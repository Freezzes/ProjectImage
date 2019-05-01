from django.urls import path
from . import views

urlpatterns = [
    path('upload/',views.FileUploadView.as_view()),
    path('image/',views.ImageView.as_view()),
    path('comment/',views.ImageView.as_view()), 
    path('getcomment/',views.ImageView.as_view())
]