# 2iLabs_Quiz

### Architecture
This is just an MVP of the application. I had to build it fast and accurate.

To develop such application under the given timeline, I had to use 
1. Sails JS - a NodeJS Framework.
2. MonogDB - a NoSQL Database
3. Cloudinary - For Image Uploads and Management.

I used the MVC architechture to develop this application. 

I implemented JWT to enable the api know who is currently logged in on the app to serve the user's requests.

Most of the endpoints are protected (i.e. You need to be logged in to view the page).

### Schemas
Since the application is a quiz app, hence the following schemas were developed.
1. Quiz
2. Topics
3. Users

### Endpoints
Available endpoints includes
1. Users
[x] GET /users -> Fetch all users. (Private).
[x] GET /users/:id -> Fetch a particular user. (Private).
[x] PATCH /users/:id -> Update an existing user. (Private).
[x] DELETE /users/:id -> Remove a user account. (Private).
[] POST /facebook -> authenticate using facebook. (Public)
[x] POST /login -> Login using email and password. (Public)
[x] POST /users/upload -> Upload a user profile picture. (Private).
[x] POST /register -> Register new account with email and password. (Public)

2. Quiz
[x] GET /quiz -> Fetch all quiz. (Private).
[x] POST /quiz -> Add new Quiz. (Private).
[x] GET /quiz/:id -> Fetch a particular quiz. (Private).
[x] PATCH /quiz/:id -> Update an existing quiz. (Private).
[x] DELETE /quiz/:id -> Remove a quiz. (Private).

3. Topics
[x] GET /topics -> Fetch all topics. (Private).
[x] POST /topics -> Add new Question. (Private).
[x] GET /topics/:id -> Fetch a particular topic. (Private).
[x] PATCH /topics/:id -> Update an existing topic. (Private).
[x] DELETE /topics/:id -> Remove a topic. (Private)
