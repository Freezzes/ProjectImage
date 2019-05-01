from django.urls import path
from . import views

urlpatterns = [
    path('upload/',views.FileUploadView.as_view()),
    path('image/',views.ImageView.as_view()),
    path('comment/',views.CommentUploadView.as_view()), 
    path('getcomment/',views.CommentView.as_view())
]