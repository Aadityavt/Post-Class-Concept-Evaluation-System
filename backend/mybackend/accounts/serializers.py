from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Student, Teacher, Classroom


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['user']
    def create(self, validated_data):
        user_data = validated_data.pop('user')  # Extract user data from the input
        user = User.objects.create_user(**user_data)  # Create the user
        student = Student.objects.create(user=user)  # Create the student
        return student


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['user']
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        teacher = Teacher.objects.create(user=user)
        return teacher
    
class ClassroomSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer()  # Nested teacher serializer to handle teacher creation
    students = StudentSerializer(many=True, read_only=True)  # List of students in the class

    class Meta:
        model = Classroom
        fields = ['id', 'name', 'description', 'teacher', 'students', 'class_code']

    def create(self, validated_data):
        teacher_data = validated_data.pop('teacher')  # Extract teacher data
        teacher = Teacher.objects.get(user=self.context['request'].user)  # Get teacher from logged-in user
        classroom = Classroom.objects.create(
            teacher=teacher,
            **validated_data
        )
        return classroom
