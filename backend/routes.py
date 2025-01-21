from app import app, db, bcrypt
from flask import Blueprint, jsonify, request


from models import User, Course

courses_routes = Blueprint('courses', __name__)


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(name=data['name'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)  # 'identity' is typically a unique user identifier like user.id added now
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401


# Fetch all courses
@courses_routes.route('/courses', methods=['GET'])

def get_courses():
    courses = Course.query.all()
    return jsonify([{
        "id": course.id, 
        "title": course.title, 
        "description": course.description
    } for course in courses])

# Fetch a single course by its ID
@courses_routes.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)
    if course:
        return jsonify({
            "id": course.id,
            "title": course.title,
            "description": course.description,
            "content": course.content
        })
    return jsonify({"message": "Course not found"}), 404

# Route to add a new course
@courses_routes.route('/courses', methods=['POST'])

def add_course():
    data = request.get_json()
    new_course = Course(
        title=data['title'],
        description=data['description'],
        content=data['content']
    )
    db.session.add(new_course)
    db.session.commit()
    return jsonify({"message": "Course created successfully"}), 201


# @courses_routes.route('/courses', methods=['GET'])
# def get_courses():
#     courses = Course.query.all()  # Assuming you are using SQLAlchemy
#     return jsonify([{
#         "id": course.id, 
#         "title": course.title, 
#         "description": course.description
#     } for course in courses])
