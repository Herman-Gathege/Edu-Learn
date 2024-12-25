from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

from flask_migrate import Migrate



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your-secret-key'




db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)
migrate = Migrate(app, db)  # Initialize Flask-Migrate

from routes import courses_routes  # Import the routes from routes.py
# Routes will be added here

# Register routes
app.register_blueprint(courses_routes)
if __name__ == "__main__":
    app.run(debug=True)
