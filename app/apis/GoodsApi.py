import time

from flask_restful import Resource, fields, marshal_with

from app.apis.CheckemailApi import result_fields
from app.models import Goods

"""
{
    'status':1,
    'msg':商品数据成功接收,
    'goods':[
    {
    'name':'xxxx',
    'price':'xxxx',
    'img':'xxxx'
    }
    ]
}

"""
goods_fields = {
    "id":fields.Integer,
    'name':fields.String,
    'price':fields.String,
    'img':fields.String
}

response_fields = {
    'status':fields.Integer,
    'date':fields.String,
    'msg':fields.String,
    'datas':fields.List(fields.Nested(goods_fields))
}
class goodsResource(Resource):
    @marshal_with(response_fields)
    def get(self):
        goods = Goods.query.all()
        print(goods)
        response_data = {
            'status': 1,
            'date':str(time.time()),
            'msg': '商品数据成功接收',
            'datas':goods,

        }
        print(response_data['datas'])

        return response_data