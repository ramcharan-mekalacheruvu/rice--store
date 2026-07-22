from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.serializers.customer_serializer import CustomerSerializer


class CustomerListAPIView(APIView):
    """
    GET /api/v1/auth/customers/
    Admin-only: list all customers (users).
    """

    permission_classes = [IsAdminUser]

    def get(self, request):

        customers = User.objects.all().order_by("-date_joined")

        serializer = CustomerSerializer(
            customers,
            many=True,
        )

        return Response(serializer.data)


class CustomerDetailAPIView(APIView):
    """
    GET /api/v1/auth/customers/<id>/
    Admin-only: retrieve a single customer (user) with their addresses.
    """

    permission_classes = [IsAdminUser]

    def get(self, request, pk):

        customer = get_object_or_404(
            User,
            pk=pk,
        )

        serializer = CustomerSerializer(customer)

        return Response(serializer.data)