from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2 import service_account 
import os

import cloudstorage
from google.appengine.api import app_identity


# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1J7iTpCXM3awtN24SNLfxL72UqsKFRw6bpaSCpyklwRI'
SAMPLE_RANGE_NAME = 'Tasks!A:F'

def get_data(_SAMPLE_RANGE_NAME=""):
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    


    # bucket_name = os.environ.get(
    #             'BUCKET_NAME', app_identity.get_default_gcs_bucket_name())
    # bucket = '/' + bucket_name
    # filename = bucket + '/cccxvolvo-8f7aecf9b17f.json'


    # with cloudstorage.open(filename) as cloudstorage_file:
    #         creds =  (cloudstorage_file.read())
    #         cloudstorage_file.seek(-1024, os.SEEK_END)

    creds = service_account.Credentials.from_service_account_file('CCCxVolvo_270aa57a2e4d.json')

    # if os.path.exists('token.pickle'):
    #     with open('token.pickle', 'rb') as token:
    #         creds = pickle.load(token)
    # # If there are no (valid) credentials available, let the user log in.
    # if not creds or not creds.valid:
    #     if creds and creds.expired and creds.refresh_token:
    #         creds.refresh(Request())
    #     else:
    #         # flow = InstalledAppFlow.from_client_secrets_file(
    #         #     'CCCxVolvo_270aa57a2e4d.json', SCOPES)
    #         # creds = flow.run_local_server(port=0)

            
    #     # Save the credentials for the next run
    #     with open('token.pickle', 'wb') as token:
    #         pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                range=_SAMPLE_RANGE_NAME or SAMPLE_RANGE_NAME).execute()
    values = result.get('values', [])
    headers = values[0]
    data = []
    rows = values[1:]
    for r in rows:
        data.append(dict(zip(headers, r)))
    return data
    