from flask import Flask,render_template,request,redirect,url_for,flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "Secret Key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:mahim@localhost/students'
app.config['SQLALCHEMY_TRACK_MODIFIACTIONS'] = False

db = SQLAlchemy(app)

class student(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(100))

    def __init__(self, name, email,phone):
      self.name = name
      self.email = email
      self.phone = phone


@app.route("/")
def Index():

    all_data = student.query.all()


    return render_template("index.html",all_data=all_data)

@app.route("/insert", methods = ['POST'])
def insert():

    #get the data from form
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']

        #insert data into database
        data = student(name,email,phone)
        db.session.add(data)
        db.session.commit()

        flash("Student Data Has Been Inserted Successfully")
        return redirect(url_for('Index'))


#here is the update function
@app.route("/update",methods=['GET','POST'])
def update():

    if request.method == 'POST':
        data = student.query.get(request.form.get('id'))

        data.name = request.form['name']
        data.email = request.form['email']
        data.phone = request.form['phone']

        db.session.commit()
        flash("Student Data Updated Successfully.")

        return redirect(url_for('Index'))

#here is the delete function
@app.route("/delete/<id>/",methods=['GET','POST'])
def delete(id):
    data = student.query.get(id)
    db.session.delete(data)
    db.session.commit()
    flash("Student Data Deleted.")

    return redirect(url_for('Index'))


if __name__ == "__main__":
    app.run(debug=True)