from flask import Flask, jsonify

import os
import openai

import oneai

from flask_cors import CORS, cross_origin



app = Flask(__name__)

cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'

  
def createTopicList(t):

  topicList = []
  
  text = t
  pipeline = oneai.Pipeline(
    steps = [
        oneai.skills.Topics(),
  ]
)

  output = pipeline.run(text)
  for topic in output.topics:
    topicList.append(topic.value)
  return topicList

# Load your API key from an environment variable or secret management service
openai.api_key = os.environ['API_KEY']

oneai.api_key = os.environ['ONE_AI']

def getResponse(prompt, max_tokens = 4000):
  
  response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=1, max_tokens=max_tokens)

  return response["choices"][0]["text"].strip()


@app.route('/<prompt>', methods=["GET", "POST"])
@cross_origin()
def index(prompt):
  return jsonify({
    "response": getResponse(prompt),
    "topics": createTopicList(getResponse(prompt))
  })


@app.route('/question/<subject>/<topic>')
@cross_origin()

def generate_question(subject, topic, difficulty="high school", max_tokens = 4000):

  response = openai.Completion.create(model="text-davinci-003", prompt="Generate a " + subject + " question about " + topic + " with a difficulty  of " + difficulty + " " + topic, temperature=1, max_tokens=max_tokens)
  return jsonify({
    "question": response["choices"][0]["text"].strip()
  })


app.run(host='0.0.0.0', port=81, debug=True)
