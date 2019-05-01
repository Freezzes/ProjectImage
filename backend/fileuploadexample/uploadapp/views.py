from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import FileSerializer,CommentSerializer
from rest_framework import generics
from .models import File,Comment

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)
    
    def post(self, request, *args, **kwargs):
      
      file_serializer = FileSerializer(data=request.data)

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageView(generics.ListAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer

class CommentUploadView(APIView):
    
    def post(self, request, *args, **kwargs):
      
      comment_serializer = CommentSerializer(data=request.data)

      if comment_serializer.is_valid():
          comment_serializer.save()
          return Response(comment_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(comment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentView(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

