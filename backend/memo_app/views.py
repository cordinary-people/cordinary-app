from rest_framework import generics
from .models import Memo
from .serializers import MemoSerializer


class MemoListCreate(generics.ListCreateAPIView):
    queryset = Memo.objects.all()
    serializer_class = MemoSerializer
