# Prerequisites
* Python version 3.12.0
* PostgreSQL version 16.1
* API Key generated from [2factor](https://2factor.in/).


# Setup steps

* ```pip install -r requirements.txt```
* ```python manage.py migrate```
* ```python manage.py createsuperuser```

# Run Project
* ```python manage.py runserver```
* Login to [Django Administration Page](http://127.0.0.1:8000/admin) using superuser and add details of superuser in EC_Admins.
* Navigate to [Login Page](http://127.0.0.1:8000) and select Login as Admin, add Voter details, add Candidate details, generate election and logout from Admin dashboard.
* Click on Register and fill Voter registration form, record and upload a video of 5-10 seconds for face registration.
* Login as Voter, Click on Election, select Candidate, record and upload a video of 5-10 seconds for face verification, enter SMS OTP and Email OTP.
* Login as Admin, complete election and generate result.

