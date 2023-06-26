
from flask import (
    Flask, Blueprint, flash, g, redirect, render_template, session, url_for
)
from flask_wtf import FlaskForm as Form
from wtforms import RadioField
from wtforms.validators import ValidationError
from random import randrange
from .auth import login_required
from .db import get_db

bp = Blueprint('quiz', __name__, url_prefix='/quiz')

class CorrectAnswer(object):
    def __init__(self, answer):
        self.answer = answer
    def __call__(self, form, field):
        message = 'Incorrect answer.'

        if field.data != self.answer:
            raise ValidationError(message)

class PopQuiz(Form):
    class Meta:
        csrf = False
    q1 = RadioField(
        "The answer to question one is False.",
        choices=[('True', 'True'), ('False', 'False')],
        validators=[CorrectAnswer('False')]
        )


# @bp.route('/quiz', methods=['GET', 'POST'])
# @login_required
# def wtf_quiz():
#   form = PopQuiz()
#   if form.validate_on_submit():
#     return redirect(url_for('passed'))
#   return render_template(
#       'quiz/quiz.html', form=form)
#
# @bp.route('/passed')
# def  passed():
#  return render_template('quiz/passed.html')

