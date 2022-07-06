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

# import json
import flask_cors
from flask_cors import cross_origin

app = Flask(__name__, template_folder='templates')
flask_cors.CORS(app)

#
# print('Model loaded. Check http://127.0.0.1:3000/')


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def main():
    # print(len(output))
    url = 'http://127.0.0.1:8000/api/gallery/create'

    data = request.get_json()

    print(data)

    im = Image.open(requests.get(data['img_url'], stream=True).raw).convert('RGB')

    im.save("geeks.png")

    files = {'filename': open('geeks.png', 'rb')}

    response = requests.post(url, files=files)

    return response.json()


if __name__ == '__main__':
    app.run(port=2135, debug=False)
