import pika
import json

params = pika.URLParameters(
    "amqps://unktxwic:cLNHGOStZVoThJ4g6U6flysi3K7MsG9u@shrimp.rmq.cloudamqp.com/unktxwic")

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin',
                          body=json.dumps(body), properties=properties)
