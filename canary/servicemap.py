import json


def service_map():
    with open('../service-map.json') as jsn:
        return json.load(jsn)
