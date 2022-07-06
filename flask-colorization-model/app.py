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
# Define a flask app
app = Flask(__name__, template_folder='templates')
# import json
import base64


#
# print('Model loaded. Check http://127.0.0.1:3000/')


@app.route('/', methods=['GET', 'POST'])
def main():
    # print(len(output))
    url = 'http://127.0.0.1:8000/api/gallery/create'
    img_url = 'http://127.0.0.1:8000/storage/colorization/up-1655985163.png'

    im = Image.open(requests.get(img_url, stream=True).raw)

    im.save("geeks.png")

    files = {'filename': open('geeks.png', 'rb')}

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

    # payload = json.dumps({"image": im, "other_key": "value"})
    response = requests.post(url, files=files)

    # data = requests.post(url, files=files)

    # data = request.get_json()

    return response.json()


if __name__ == '__main__':
    app.run(port=3000, debug=False)
