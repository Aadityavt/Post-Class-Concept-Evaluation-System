from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # You can add more student-specific fields here, e.g., grade, year, etc.

    def __str__(self):
        return self.user.username


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # You can add more teacher-specific fields here, e.g., subject, department, etc.

    def __str__(self):
        return self.user.username
class Classroom(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)  # Link to the teacher who created the class
    students = models.ManyToManyField(Student, blank=True)  # Students enrolled in the class
    class_code = models.CharField(max_length=12, unique=True)  # Unique class code for the URL
    
    def __str__(self):
        return self.name