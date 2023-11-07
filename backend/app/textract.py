import json

from app.config import GENERATION_CONFIG
from app.utils import get_textract_client

client = get_textract_client()

class AttachFile:
    url: str

def invoke():
    client.analyze_document(
        Document={
            'S3Object': {
                'Bucket': '',
                'Name': ''
            }
        },
        FeatureTypes=[]
    )