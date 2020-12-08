from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from apps.tasks.views import TaskViewSet

router = DefaultRouter()
router.register("tasks", TaskViewSet, basename="tasks")
tasks_urlpatterns = [url("api/v1/", include(router.urls))]