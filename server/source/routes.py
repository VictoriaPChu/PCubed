import logging

import json
import models

from lib import bottle
from lib.bottle import get, static_file, route

from google.appengine.api import users
from sheets import __main


@get('/')
def display_home():
    return static_file('index.html', root='./')



@route('/api/<name>')
def api(name='Tasks'):
    return json.dumps(__main(name))



    


