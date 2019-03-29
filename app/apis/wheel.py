from flask_restful import Resource, marshal_with, fields

from app.apis.CheckemailApi import result_fields
from app.models import Wheel

imgs_fields = {
    "id":fields.Integer,
    'img':fields.String
}

response_fields = {
    'status':fields.Integer,
    'msg':fields.String,
    'datas':fields.List(fields.Nested(imgs_fields))
}
class wheelResource(Resource):
    @marshal_with(response_fields)
    def get(self):
        imgs = Wheel.query.all()
        # print(imgs)
        response_data = {
            'status': 1,
            'msg': '商品数据成功接收',
            'datas': imgs,

        }
        # print(response_data['datas'])

        return response_data