import logging
import json
import os

from google.appengine.api import users
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import ndb


from lib import bottle
from lib.bottle import abort, post, get, request, error, debug, redirect, response, static_file

from sheets import get_data


import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.out.write('Hello, webapp2 World!')

class Api(webapp2.RequestHandler):
    def get(self, name=''):
        self.response.write(json.dumps(get_data(name)))

application = webapp2.WSGIApplication([
    ('/', MainPage),
    (r'/api/(.*)', Api),
], debug=True)