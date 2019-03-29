import uuid

from flask import Blueprint, render_template, request, session, redirect, url_for

from app.ext import db, cache
from app.models import User


blue = Blueprint('blue',__name__)

def init_views(app):
    app.register_blueprint(blue)



@blue.route('/index/')
def index():
    token = session.get('token')
    try:
        userid = cache.get(token)
        user = User.query.get(userid)

    except:
        user = None
    return render_template('index.html',user=user)


@blue.route('/register/',methods=['POST','GET'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    elif request.method == 'POST':
        user = User()
        user.tel = request.form.get('tel')
        user.passrod = request.form.get('password')
        user.email = request.form.get('email')
        # print(request.form.get('tel'),request.form.get('password'),request.form.get('email'))
        #
        db.session.add(user)
        db.session.commit()

        # 状态保持
        token = uuid.uuid5(uuid.uuid4(), 'register').hex
        session['token'] = token
        cache.set(token, user.id, timeout=60 * 2)

        return redirect(url_for('blue.index'))

@blue.route('/logout/')
def logout():
    try:
        session.pop('token')
        return redirect(url_for('blue.index'))
    except:
        return redirect(url_for('blue.index'))


@blue.route('/login/',methods=['POST','GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    elif request.method == 'POST':
        tel = request.form.get('tel')
        password = request.form.get('password')
        print(tel,password)

        users = User.query.filter(User.tel == tel).filter(User.passrod== password)
        if users.count():
            user = users.first()

            # 状态保持
            token = uuid.uuid5(uuid.uuid4(), 'register').hex
            session['token'] = token
            cache.set(token, user.id, timeout=60 * 5)

            return redirect(url_for('blue.index'))

        else:
            return '账号或密码错误'