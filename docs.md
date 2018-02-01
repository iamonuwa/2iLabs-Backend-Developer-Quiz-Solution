### Architecture
This is just an MVP of the application. I had to build it fast and accurate.

To develop such application under the given timeline, I had to use 
1. Sails JS - a NodeJS Framework.
2. MonogDB - a NoSQL Database
3. Cloudinary - For Image Uploads and Management.


### Schemas
Since the application is a quiz app, hence the following schemas were developed.
1. Quiz
2. Topics
3. Users

### Endpoints
Available endpoints includes
1. Users
[x] GET /users -> Fetch all users.
[x] POST /users -> Create a new users.
[x] GET /users/:id -> Fetch a particular user.
[x] PATCH /users/:id -> Update an existing user.
[x] DELETE /users/:id -> Remove a user account.
[] POST /facebook -> authenticate using facebook.
[x] POST /login -> Login using email and password.
[x] POST /register -> Register new account with email and password.

2. Quiz
[x] GET /quiz -> Fetch all quiz.
[x] POST /quiz -> Add new Quiz.
[x] GET /quiz/:id -> Fetch a particular quiz.
[x] PATCH /quiz/:id -> Update an existing quiz.
[x] DELETE /quiz/:id -> Remove a quiz.

3. Topics
[x] GET /topics -> Fetch all topics.
[x] POST /topics -> Add new Question.
[x] GET /topics/:id -> Fetch a particular topic.
[x] PATCH /topics/:id -> Update an existing topic.
[x] DELETE /topics/:id -> Remove a topic.