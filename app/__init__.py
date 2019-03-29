from flask import Flask

from app.apis import init_apis
from app.ext import init_ext
from app.settings import init_settings
from app.views import init_views


def createApp(env_name='default'):

    app = Flask(__name__)

    init_settings(app,env_name)

    init_ext(app)

    init_views(app)

    init_apis(app)

    return app