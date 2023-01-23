from unicodedata import category
from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('',views.index,name='home'),
    path('about',views.about,name='about'),
    path('service',views.service,name='service'),
    path('classical',views.classical,name='classical')
]