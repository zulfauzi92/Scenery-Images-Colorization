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
import torch
import RRDBNet_arch as arch
import cv2
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

    hasilcoba2 = np.zeros((size, size, 3))

    hasilcoba2[:, :, 0] = img_gray
    hasilcoba2[:, :, 1] = img_gray
    hasilcoba2[:, :, 2] = img_gray

    test_gray = rgb2lab(hasilcoba2)

    # test_predict = test_gray[:,:,:]
    # test_predict = test_predict.reshape(test_predict.shape+(1,))

    l_test = []

    l_test.append(hasilcoba2[:, :, 1:])
    l_test = np.array(l_test)
    # l_test = l_test.reshape(l_test.shape + (1,))

    # print("L Channel Shape : ", l_test.shape)

    embed_coba = resize(hasilcoba2, (299, 299))

    e_test = [embed_coba]

    e_test = np.array(e_test, dtype=float)

    # print("Embedding Shape : ", e_test.shape)

    # with inception.graph.as_default():
    # inception.load_weights('/content/drive/MyDrive/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')
    ic = inception.predict(e_test)
    # print(l_test.shape)
    ab2 = model.predict([l_test, ic])
    # ab2[0,:,:,0] = ab2[0,:,:,0] * 100
    # ab2[0,:,:,1:] = ab2[0,:,:,1:] * 128

    # imshow(ab2[0,:,:,0])

    hasiltest2 = np.zeros((size, size, 3))

    hasiltest2[:, :, 0] = test_gray[:, :, 0]
    hasiltest2[:, :, 1] = ab2[0, :, :, 0] * 128
    hasiltest2[:, :, 2] = ab2[0, :, :, 1] * 128

    hasilrgb3 = lab2rgb(hasiltest2)
    hasilrgb3 = hasilrgb3 * 255
    hasilrgb3 = hasilrgb3.astype(np.uint8)

    return hasilrgb3

def gray_to_color2(image, inception, model, size):
    hasilcoba2 = np.zeros((size, size, 3))

    img_gray = rgb2gray(image)

    hasilcoba2 = np.zeros((size, size, 3))

    hasilcoba2[:, :, 0] = img_gray
    hasilcoba2[:, :, 1] = img_gray
    hasilcoba2[:, :, 2] = img_gray

    test_gray = rgb2lab(hasilcoba2)

    # test_predict = test_gray[:,:,:]
    # test_predict = test_predict.reshape(test_predict.shape+(1,))

    l_test = []

    l_test.append(hasilcoba2[:, :, 1])
    l_test = np.array(l_test)
    # l_test = l_test.reshape(l_test.shape + (1,))

    # print("L Channel Shape : ", l_test.shape)

    embed_coba = resize(hasilcoba2, (299, 299))

    e_test = [embed_coba]

    e_test = np.array(e_test, dtype=float)

    # print("Embedding Shape : ", e_test.shape)

    # with inception.graph.as_default():
    # inception.load_weights('/content/drive/MyDrive/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')
    ic = inception.predict(e_test)
    # print(l_test.shape)
    ab2 = model.predict([l_test, ic])
    # ab2[0,:,:,0] = ab2[0,:,:,0] * 100
    # ab2[0,:,:,1:] = ab2[0,:,:,1:] * 128

    # imshow(ab2[0,:,:,0])

    hasiltest2 = np.zeros((size, size, 3))

    hasiltest2[:, :, 0] = test_gray[:, :, 0]
    hasiltest2[:, :, 1] = ab2[0, :, :, 0] * 128
    hasiltest2[:, :, 2] = ab2[0, :, :, 1] * 128

    hasilrgb3 = lab2rgb(hasiltest2)
    hasilrgb3 = hasilrgb3 * 255
    hasilrgb3 = hasilrgb3.astype(np.uint8)

    return hasilrgb3


def get_filtered_image(image, action):
    # if action == 'model1':
    #     pil_img1 = image.resize((64, 64))
    #
    #     cv_img1 = np.array(pil_img1)
    #
    #     new_img = normalize(cv_img1).astype('uint8')
    #
    #     inception = InceptionResNetV2(weights=None, include_top=True)
    #     inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')
    #
    #     model = keras.models.load_model('lltoab-rmsprop-epoch-100-campur-0.0001.h5')
    #
    #     # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
    #     predict_image = gray_to_color(new_img, inception, model, 64)
    if action == 'model1':
        pil_img1 = image.resize((256, 256))

        cv_img1 = np.array(pil_img1)

        new_img = normalize(cv_img1).astype('uint8')

        inception = InceptionResNetV2(weights=None, include_top=True)
        inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')

        model = keras.models.load_model('lltoab-rmsprop-epoch-100-unsplash-0.0001.h5')

        # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        predict_image = gray_to_color(new_img, inception, model, 256)

    elif action == 'model3':
        pil_img1 = image.resize((256, 256))

        cv_img1 = np.array(pil_img1)

        new_img = normalize(cv_img1).astype('uint8')

        inception = InceptionResNetV2(weights=None, include_top=True)
        inception.load_weights('inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5')

        model = keras.models.load_model('lltoab-rmsprop-epoch-100-wajahh-0.0001-256.h5')

        # lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        predict_image = gray_to_color(new_img, inception, model, 256)


    return predict_image


def superRes(directory):
    device = torch.device('cpu')  # if you want to run on CPU, change 'cuda' -> cpu
    model = arch.RRDBNet(3, 3, 64, 23, gc=32)
    model.load_state_dict(torch.load(directory), strict=True)
    # model.eval()
    model = model.to(device)
    img = cv2.imread("geeks.png", cv2.IMREAD_COLOR)
    img = img * 1.0 / 255
    img = torch.from_numpy(np.transpose(img[:, :, [2, 1, 0]], (2, 0, 1))).float()
    img_LR = img.unsqueeze(0)
    img_LR = img_LR.to(device)

    with torch.no_grad():
        output = model(img_LR).data.squeeze().float().cpu().clamp_(0, 1).numpy()
    output = np.transpose(output[[2, 1, 0], :, :], (1, 2, 0))
    output = (output * 255.0).round()
    cv2.imwrite("geeks.png", output)


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def main():
    # print(len(output))
    url = 'http://127.0.0.1:8000/api/colored/create'

    data = request.get_json()
    action = data['action']
    print(data)

    im = Image.open(requests.get(data['img_url'], stream=True).raw).convert('RGB')

    img = get_filtered_image(im, action)

    im_pil = Image.fromarray(img)

    # im_pil.save("geeks.png")

    # buffer = BytesIO()
    im_pil.save("geeks.png", format='png')
    # image_png = buffer.getvalue()
    # open('geeks.png', 'rb')

    # superRes('RRDB_PSNR_x4.pth')

    # im2 = Image.open("geeks.png")
    # imResize = im2.resize((256, 256), Image.ANTIALIAS)
    # imResize.save("geeks.png", "PNG")
    #
    # superRes('RRDB_ESRGAN_x4.pth')

    # if action == 'model1':
    #     # superRes('RRDB_ESRGAN_x4.pth')
    #     superRes('RRDB_PSNR_x4.pth')
    #     # im = Image.open("geeks.png")
    #     # imResize = im.resize((512, 512), Image.ANTIALIAS)
    #     # imResize.save("geeks.png", "PNG")
    if action == 'model1':
        superRes('RRDB_PSNR_x4.pth')
        im = Image.open("geeks.png")
        imResize = im.resize((512, 512), Image.ANTIALIAS)
        imResize.save("geeks.png", "PNG")
    elif action == 'model3':
        superRes('RRDB_PSNR_x4.pth')
        im = Image.open("geeks.png")
        imResize = im.resize((512, 512), Image.ANTIALIAS)
        imResize.save("geeks.png", "PNG")

    files = {'colored_link': open('geeks.png', 'rb')}

    response = requests.post(url, files=files)

    return response.json()


if __name__ == '__main__':
    app.run(port=2135, debug=False)
