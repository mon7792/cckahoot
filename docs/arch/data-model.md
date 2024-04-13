# DataModel


## TABLES

1. **User**: comes from clerk
   - `user_id`: Unique identifier

2. **Quiz**:
   - `id`: Unique identifier
   - `title`: Title of the quiz
   - `creator_id`: Foreign key referencing the creator (User)
   - `created_at`: Timestamp of quiz creation
   - `updated_at`: Timestamp of last update

3. **Question**:
   - `id`: Unique identifier
   - `quiz_id`: Foreign key referencing the quiz
   - `text`: Text of the question
   - `created_at`: Timestamp of question creation
   - `updated_at`: Timestamp of last update

4. **Options**:
   - `id`: Unique identifier
   - `question_id`: Foreign key referencing the question
   - `text`: Text of the answer
   - `is_correct`: Boolean indicating whether the answer is correct or not
   - `created_at`: Timestamp of answer creation
   - `updated_at`: Timestamp of last update

5. **QuizSession**:
   - `id`: Unique identifier
   - `user_name`: allowed anyomous users
   - `user_id`: Foreign key referencing the user
   - `started_at`: Timestamp of session start
   - `completed_at`: Timestamp of session completion
   - `score`: Score achieved in the session


## RELATIONSHIPS

1. **User**:
   - One-to-Many with Quiz: One user can create multiple quizzes.
   - One-to-Many with QuizSession: One user can have multiple quiz sessions.(Only one active quiz session at a time)

2. **Quiz**:
   - One-to-Many with Question: One quiz can have multiple questions.
   - One-to-Many with QuizSession: One quiz can be attempted multiple times by different users.
   - Many-to-One with User: Many quizzes can be created by one user.

3. **Question**:
   - Many-to-One with Quiz: Many questions belong to one quiz.

4. **Answer**:
   - Many-to-One with Question: Many answers belong to one question.

5. **QuizSession**:
   - Many-to-One with User: Many quiz sessions are associated with one user.
   - Many-to-One with Quiz: Many quiz sessions are associated with one quiz.