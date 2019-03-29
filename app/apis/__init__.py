from flask_restful import Api

from app.apis import CheckemailApi, wheel_re
from app.apis.CheckemailApi import emailResource
from app.apis.Checktel import telResource
from app.apis.GoodsApi import goodsResource
from app.apis.wheel import wheelResource
from app.apis.wheel_re import wheel_reResource

api = Api()

def init_apis(app):
    api.init_app(app)

#添加资源
api.add_resource(emailResource,'/apis/v1/checkemail/')
api.add_resource(telResource,'/apis/v1/checketel/')

api.add_resource(goodsResource,'/apis/v1/goods/')
api.add_resource(wheelResource,'/apis/v1/wheel/')
api.add_resource(wheel_reResource,'/apis/v1/wheel_re/')