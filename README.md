# Polling and Survey App with Payment Integration

This project involves the development of an advanced Polling and Survey application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The goal is to integrate payment functionalities, implemented a robust user management system, and created an admin dashboard with role management.

## Live Site Link

[https://pollinate-01.web.app/]()

## GitHub Repositories

- [https://github.com/programming-hero-web-course1/b8a12-client-side-JannatulHappy]()
- [https://github.com/programming-hero-web-course1/b8a12-server-side-JannatulHappy]()



#### Homepage 📄🌟

- **Hero Section 🚀**

- **Latest Surveys Section 📅**

  - Displayed most recently created surveys (6 surveys).

- **How It Works Section 🛠**

  - Custom section matching the website theme.

- **FAQ❓📚**
  - Meaningful FAQs.

#### Surveys Page (public)

- Displayed all surveys with relevant information.
- Allowed users to filter by title, category, and vote.

#### Survey Details Page (public)

- Information about the survey.
- Users can vote.
- Pro-users can add comments.
- Only authorized users can vote.
- Prevent duplicate submissions.
- Display survey results visually by charts.
- Allow users to view results after the survey deadline or after voting.
- Enable liking or disliking a survey.
- Allow users to report inappropriate content.

#### Pricing Page

- Integrated a payment system for users to become pro-user members by a pro nav link in navbar.


### Dashboard

#### Admin Dashboard

- Manage users.
- Change user roles to admin/surveyor.
- Filter users based on roles.
- Publish or unpublish survey status.
- View payments of pro-user members.
- Survey responses table and chart.

#### Surveyor Dashboard

- Create or update a survey.
- View feedback for individual surveys.
- View feedback messages given by the admin on unpublish.
- Survey responses table and chart.

#### User

- Participate in a survey.
- Like or dislike a survey.
- Report a survey.

#### Pro-User

- All permissions of a user.
- Comment on a survey.

#### Package (implement )

- ToDo:

## if you want to run it in you machine

MONGO_URI=mongodb://localhost:27017/polling-and-survey-app
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

5. Start the backend server by running `npm run dev:backend`.
6. Start the frontend server by running `npm run dev:frontend`.

## Testing

The application can be tested by running the following command:

npm run test

## Deployment

To deploy the application to a production environment, follow these steps:

1. Build the frontend and backend applications by running `npm run build`.
2. Deploy the frontend application to a web server.
3. Deploy the backend application to a Node.js server.
