import logging
import json
import os

from google.appengine.api import users
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import ndb
from google.appengine.ext.webapp import template

from sheets import get_data


import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), 'index.html')
        self.response.out.write(template.render(path, {}))

class Api(webapp2.RequestHandler):
    def get(self, name=''):
        self.response.write(json.dumps(get_data(name)))

application = webapp2.WSGIApplication([
    ('/', MainPage),
    (r'/api/(.*)', Api),
], debug=True)