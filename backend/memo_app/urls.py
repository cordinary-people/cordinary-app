from django.urls import path
from .views import MemoListCreate

urlpatterns = [
    path('', MemoListCreate.as_view(), name='memo-list-create'),
]
