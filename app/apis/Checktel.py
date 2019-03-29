from flask import request
from flask_restful import Resource

from app.models import User


class telResource(Resource):
    def get(self):
        tel = request.args.get('tel')

        users = User.query.filter(User.tel==tel)
        # print( users.count())
        if users.count():
            response_data = {
                'status': 0,
                'msg': '该手机号已被注册'
            }
        else:
            response_data = {
                'status': 1,
                'msg': '该邮手机号可用'
            }



        return response_data