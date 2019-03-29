from flask import request
from flask_restful import Resource, fields, marshal_with

from app.models import User

"""
def checkemail(request):
    email = request.GET.get('email')

    # 去数据库中查找
    users = User.objects.filter(email=email)
    if users.exists():  # 账号被占用
        response_data = {
            'status': 0,  # 1可用， 0不可用
            'msg': '账号被占用!'
        }
    else:   # 账号可用
        response_data = {
            'status':1,  # 1可用， 0不可用
            'msg': '账号可用!'
        }

    # 返回JSON数据
    return JsonResponse(response_data)

"""
result_fields = {
    'status': fields.Integer,
    'msg': fields.String,
}


class emailResource(Resource):
    def get(self):
        email = request.args.get('email')

        users = User.query.filter(User.email==email)
        # print( users.count())
        if users.count():
            response_data = {
                'status': 0,
                'msg': '该邮箱已被注册'
            }
        else:
            response_data = {
                'status': 1,
                'msg': '该邮箱可用'
            }



        return response_data



