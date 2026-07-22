from apps.accounts.models import UserProfile


class AuthService:

    @staticmethod
    def create_profile(user):
        UserProfile.objects.create(
    user=user
)