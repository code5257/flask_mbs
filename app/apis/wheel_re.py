from flask_restful import Resource, marshal_with, fields

from app.apis.CheckemailApi import result_fields
from app.models import Wheel, Wheel_re

imgs_fields = {
    'img1':fields.String,
    'img2':fields.String,
    'img3':fields.String,
    'img4':fields.String,
}

response_fields = {
    'status':fields.Integer,
    'msg':fields.String,
    'datas':fields.Nested(imgs_fields)
}
class wheel_reResource(Resource):
    @marshal_with(response_fields)
    def get(self):
        imgs = Wheel_re.query.all()
        # print(imgs)
        response_data = {
            'status': 1,
            'msg': '商品数据成功接收',
            'datas': imgs,

        }
        # print(response_data['datas'])

        return response_data