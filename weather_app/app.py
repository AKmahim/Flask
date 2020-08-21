from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
import requests

app = Flask(__name__)
app.config['SQLALchemy_DATABASE_URI'] = 'sqlite3:///weather.db'
app.config['DEBUG'] = True

db = SQLAlchemy(app)

class City(db.Model):

    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)

def FtoC(F):
    C = (F-32)*5/9
    return C

@app.route("/")
def index():

    # if request.method == 'POST':
    #     new_city = request.form.get('city')

    #     if new_city:
    #         new_city_obj = City(name=new_city)

    #         db.session.add(new_city_obj)
    #         db.session.commit()
    # cities = City.query.all()



    url = "http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1"
    city = 'Khulna'
    # weather_data = []
    
    # for city in cities:
    #     res = request.get(url.format(city.name)).json()
    #     weather = {
    #         'city' : city.name,
    #         'temperature' : res['main']['temp'],
    #         'description' : res['weather'][0]['description'],
    #         'icon' : res['weather'][0]['icon'],
    #     }
    #     weather_data.append(weather)
    res = requests.get(url.format(city)).json()
    weather = {
            'city' : city,
            'temperature' : int(FtoC(res['main']['temp'])),
            'description' : res['weather'][0]['description'],
            'icon' : res['weather'][0]['icon'],
        }
    #print(weather)
    return render_template("index.html",weather=weather)

if __name__ == "__main__":
    app.run(debug=True)