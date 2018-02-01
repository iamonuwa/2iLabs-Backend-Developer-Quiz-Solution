# 2iLabs_Quiz

### Architecture
This is just an MVP of the application. I had to build it fast and accurate.

To develop such application under the given timeline, I had to use 
1. Sails JS - a NodeJS Framework.
2. MongoDB - a NoSQL Database
3. Cloudinary - For Image Uploads and Management.

I used the MVC architecture to develop this application. 

I implemented JWT to enable the API to know who is currently logged in on the app to serve the user's requests.

Most of the endpoints are protected (i.e. You need to be logged in to view the page).

### Schemas
Since the application is a quiz app, hence the following schemas were developed.
1. Quiz
2. Topics
3. Users

### Endpoints
Available endpoints includes
1. Users
    1. [x] GET /users -> Fetch all users. (Private).
    2. [x] GET /users/:id -> Fetch a particular user. (Private).
    3. [x] PATCH /users/:id -> Update an existing user. (Private).
    4. [x] DELETE /users/:id -> Remove a user account. (Private).
    5. [] POST /facebook -> authenticate using facebook. (Public)
    6. [x] POST /login -> Login using email and password. (Public)
    7. [x] POST /users/upload -> Upload a user profile picture. (Private).
    8. [x] POST /register -> Register new account with email and password. (Public)

2. Quiz
    1. [x] GET /quiz -> Fetch all quiz. (Private).
    2. [x] POST /quiz -> Add new Quiz. (Private).
    3. [x] GET /quiz/:id -> Fetch a particular quiz. (Private).
    4. [x] PATCH /quiz/:id -> Update an existing quiz. (Private).
    5. [x] DELETE /quiz/:id -> Remove a quiz. (Private).

3. Topics
    1. [x] GET /topics -> Fetch all topics. (Private).
    2. [x] POST /topics -> Add new Question. (Private).
    3. [x] GET /topics/:id -> Fetch a particular topic. (Private).
    4. [x] PATCH /topics/:id -> Update an existing topic. (Private).
    5. [x] DELETE /topics/:id -> Remove a topic. (Private)
