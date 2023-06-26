"""
Created on 6/5/2023

@author: yuraheo
"""
import os
from flask import Flask, render_template, redirect, url_for
from .quiz import PopQuiz



def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True, template_folder =
    'templates')
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/quiz', methods=['GET', 'POST'])
    def quiz():
        form = PopQuiz()
        if form.validate_on_submit():
            return redirect(url_for('passed'))
        return render_template('quiz/quiz.html', form=form)

    @app.route('/passed')
    def passed():
        return render_template('quiz/passed.html')

    #@app.route('/chatbot', methods = ['POST'])
    #def chatbot():
    #write the chatbot route here

    from . import db
    db.init_app(app)

    from . import blog
    app.register_blueprint(blog.bp)

    from . import auth
    app.register_blueprint(auth.bp)

    from . import quiz
    app.register_blueprint(quiz.bp)

    # from . import chatbot
    # app.register_blueprint(chatbot.bp)

    # app.add_url_rule('/', endpoint='index')

    return app


