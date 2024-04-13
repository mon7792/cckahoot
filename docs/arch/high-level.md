# High level.

1. **Authentication and Authorization**:
   - `/auth/login` (POST): Endpoint to authenticate users and generate access tokens.
   - `/auth/logout` (POST): Endpoint to invalidate access tokens and log users out.
   - `/auth/register` (POST): Endpoint to register new users.

2. **Quizzes**:
   - `/quizzes` (GET): Retrieve a list of quizzes.
   - `/quizzes/{quiz_id}` (GET): Retrieve details of a specific quiz.
   - `/quizzes` (POST): Create a new quiz.
   - `/quizzes/{quiz_id}` (PUT): Update an existing quiz.
   - `/quizzes/{quiz_id}` (DELETE): Delete a quiz.

<!-- This section is not sure how it will work -->
3. **Questions**:
   - `/quizzes/{quiz_id}/questions` (GET): Retrieve questions for a specific quiz.
   - `/quizzes/{quiz_id}/questions/{question_id}` (GET): Retrieve details of a specific question.
   - `/quizzes/{quiz_id}/questions` (POST): Add a new question to a quiz.
   - `/quizzes/{quiz_id}/questions/{question_id}` (PUT): Update an existing question.
   - `/quizzes/{quiz_id}/questions/{question_id}` (DELETE): Delete a question from a quiz.

4. **Answers**:
   - `/quizzes/{quiz_id}/questions/{question_id}/answers` (GET): Retrieve answers for a specific question.
   - `/quizzes/{quiz_id}/questions/{question_id}/answers` (POST): Add a new answer to a question.
   - `/quizzes/{quiz_id}/questions/{question_id}/answers/{answer_id}` (PUT): Update an existing answer.
   - `/quizzes/{quiz_id}/questions/{question_id}/answers/{answer_id}` (DELETE): Delete an answer from a question.

   <!-- This section is not sure how it will work -->

5. **User Interaction**:
   - `/quizzes/{quiz_id}/start` (POST): Start a quiz session for a user.
   - `/quizzes/{quiz_id}/submit` (POST): Submit answers for a quiz session.
   - `/quizzes/{quiz_id}/scores` (GET): Retrieve scores for a quiz.

6. **Leaderboard**:
   - `/quizzes/{quiz_id}/leaderboard` (GET): Retrieve the leaderboard for a quiz.

8. **Error Handling**:
   - Handle various types of errors with appropriate HTTP status codes and error messages.

This is a basic outline and the actual implementation may vary based on specific requirements and features of your Kahoot-style app. Additionally, you might want to consider adding pagination, filtering, sorting, and other features to improve the usability of the API.