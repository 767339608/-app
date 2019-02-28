import requests
import json
from urllib import request


def st():
    try:
        url = request.urlopen(
            'http://172.18.1.171:8000/uploadimg/start?consName=%E5%8F%8C%E9%B1%BC%E5%BA%A7&type=today&key=003e5a9a6410ed1fe85dd37b1e357a8d')
    except():
        return '未正常返回数据'
    return url


if __name__ == "__main__":
    print(st())
