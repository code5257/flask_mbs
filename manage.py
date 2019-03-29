from flask_migrate import MigrateCommand
from flask_script import Manager

from app import createApp

app = createApp()
manage = Manager(app)
manage.add_command('db',MigrateCommand)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    manage.run()
