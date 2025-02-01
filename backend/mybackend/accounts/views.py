from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer, StudentSerializer, TeacherSerializer
from .models import Student, Teacher
from django.contrib.auth import login 


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    # Get the data from the request
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role')

    # Check if the user already exists
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

    # Create the user
    user = User.objects.create_user(username=username, email=email, password=password)
    
    # Assign role
    if role == 'student':
        Student.objects.create(user=user)
    elif role == 'teacher':
        Teacher.objects.create(user=user)
    else:
        return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)

    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(username=username, password=password)
    
    if user is not None:
        # Log the user in (this will create a session for them)
        login(request, user)
        
        # Check if the user is a student or teacher
        if Student.objects.filter(user=user).exists():
            role = 'student'
        elif Teacher.objects.filter(user=user).exists():
            role = 'teacher'
        else:
            role = 'unknown'

        return Response({'role': role}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)