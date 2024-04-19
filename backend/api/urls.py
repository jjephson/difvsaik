from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("feedback/", views.FeedbackListCreate.as_view(), name="feedback-list"),
    path("feedback/delete/<int:pk>/",
         views.FeedbackDelete.as_view(), name="delete-feedback"),
]
