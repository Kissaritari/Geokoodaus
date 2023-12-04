import json
import requests

f = open('gasstations.json')

stations = json.load(f)

for station in stations:
    url = "https://www.mapquestapi.com/geocoding/v1/address?"
    key = 'key=5mSxW4DUx3kq2fzTIP5f3tQizva61zJQ'
    addr= ['addr']
    x = "&location"
    s = requests.get(url+key+x+addr)
    print(s)

    #print(station)

f.close()