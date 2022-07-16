#SERIALIZERS CONVERT PYTHON OBJECTS INTO JSON FORMAT SO IT IS USER FRIENDLY
from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note 
        fields = '__all__'