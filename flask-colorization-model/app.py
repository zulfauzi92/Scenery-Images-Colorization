# -*- coding: utf-8 -*-
"""
Created on Mon Jun 13 22:30:42 2022

@author: admin
"""

from __future__ import division, print_function
# coding=utf-8
import requests
# Flask utils
from flask import Flask, redirect, url_for, request, render_template, jsonify
from PIL import Image
import numpy as np
import keras
from keras.applications.inception_resnet_v2 import InceptionResNetV2
from skimage.color import rgb2lab, lab2rgb, gray2rgb, rgb2gray, rgb2hsv, hsv2rgb
from skimage.transform import resize
from io import BytesIO
# Define a flask app

# import json
import flask_cors
from flask_cors import cross_origin

app = Flask(__name__, template_folder='templates')
flask_cors.CORS(app)


def normalize(arr):
    arr = arr.astype('float')
    # Do not touch the alpha channel
    for i in range(3):
        minval = arr[..., i].min()
        maxval = arr[..., i].max()
        if minval != maxval:
            arr[..., i] -= minval
            arr[..., i] *= (255.0 / (maxval - minval))
    return arr


def gray_to_color(image, inception, model, size):

    hasilcoba2 = np.zeros((size, size, 3))

    img_gray = rgb2gray(image)

    hasilcoba2[:, :, 0] = img_gray
    hasilcoba2[:, :, 1] = img_gray
    hasilcoba2[:, :, 2] = img_gray

    lab = rgb2lab(hasilcoba2)

    test_predict = img_gray

    test_predict = test_predict.reshape(test_predict.shape + (1,))

    l_test = [test_predict]

    l_test = np.array(l_test)

    embed_coba = resize(hasilcoba2, (299, 299))

    e_test = [embed_coba]

    e_test = np.array(e_test)

    inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')
    ic = inception.predict(e_test)

    ab2 = model.predict([l_test, ic]) * 128

    hasiltest2 = np.zeros((size, size, 3))

    hasiltest2[:, :, 0] = lab[:, :, 0]
    hasiltest2[:, :, 1] = ab2[0, :, :, 0]
    hasiltest2[:, :, 2] = ab2[0, :, :, 1]

    hasilrgb3 = lab2rgb(hasiltest2)
    hasilrgb3 = hasilrgb3 * 255
    hasilrgb3 = hasilrgb3.astype(np.uint8)

    return hasilrgb3


def get_filtered_image(image, action):
    if action == '256x256':
        pil_img1 = image.resize((256, 256))

        cv_img1 = np.array(pil_img1)

        new_img = normalize(cv_img1).astype('uint8')

        inception = InceptionResNetV2(weights=None, include_top=True)
        inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')

        model = keras.models.load_model('256-to-ab-3.h5')

        # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        predict_image = gray_to_color(new_img, inception, model, 256)
    elif action == '512x512':
        pil_img1 = image.resize((512, 512))

        cv_img1 = np.array(pil_img1)

        new_img = normalize(cv_img1).astype('uint8')

        inception = InceptionResNetV2(weights=None, include_top=True)
        inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')

        model = keras.models.load_model('512-to-ab-3.h5')

        # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        predict_image = gray_to_color(new_img, inception, model, 512)
    elif action == '768x768':
        pil_img1 = image.resize((768, 768))

        cv_img1 = np.array(pil_img1)

        new_img = normalize(cv_img1).astype('uint8')

        inception = InceptionResNetV2(weights=None, include_top=True)
        inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')

        model = keras.models.load_model('768-to-ab-3.h5')

        # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        predict_image = gray_to_color(new_img, inception, model, 768)

    return predict_image


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def main():
    # print(len(output))
    url = 'http://127.0.0.1:8000/api/colored/create'

    data = request.get_json()

    print(data)

    im = Image.open(requests.get(data['img_url'], stream=True).raw).convert('RGB')

    img = get_filtered_image(im, data['action'])

    im_pil = Image.fromarray(img)

    # im_pil.save("geeks.png")

    # buffer = BytesIO()
    im_pil.save("geeks.png", format='png')
    # image_png = buffer.getvalue()
    # open('geeks.png', 'rb')

    files = {'colored_link': open('geeks.png', 'rb')}

    response = requests.post(url, files=files)

    return response.json()


if __name__ == '__main__':
    app.run(port=2135, debug=False)
