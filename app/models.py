from app.ext import db


class User(db.Model):
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    tel = db.Column(db.String(128),unique=True)
    passrod = db.Column(db.String(128))
    email = db.Column(db.String(128),unique=True)


class Goods(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128))
    price = db.Column(db.String(128))
    img = db.Column(db.String(128))


class Wheel(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    img  = db.Column(db.String(128))



class Wheel_re(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    img1 = db.Column(db.String(128))
    img2 = db.Column(db.String(128))
    img3 = db.Column(db.String(128))
    img4 = db.Column(db.String(128))