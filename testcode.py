import json
import requests
import readjson

key = '5mSxW4DUx3kq2fzTIP5f3tQizva61zJQ'
s=requests.get("https://www.mapquestapi.com/geocoding/v1/address?key=5mSxW4DUx3kq2fzTIP5f3tQizva61zJQ&location=Kuulankatu, Seinäjoki")
print(s)

ss =s.json()

lat = ss['results'][0]['locations'][0]['latLng']['lat']
lng = ss['results'][0]['locations'][0]['latLng']['lng']
#print("latitude: ",lat)
#print("longitude: ",lng)

# tehdään geojson -olio

geo = {
    "type":"Feature",
    "geometry": {
        "type":"Point",
        "coordinates":[lng,lat]
    },
    "properties": {
        "name": "Kuulankatu"
    }
}
print(geo)