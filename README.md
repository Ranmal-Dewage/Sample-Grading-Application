# Sample-Grading-Application
Sample Grading Application designed using Angular as frontend technology, Node JS as backend technology and MongoDB as the database.


# How to deploy the Backend

1. npm install
2. npm start
3. Since there are DB initialization scripts in the service.js file, comment out the line 25, 26, 27 after initial run of backend server, if you are restarting the server again and again.


# How to deploy the Frontend

1. npm install
2. npm start or ng serve


# Student IDs, Teacher IDs and Passwords

**Student IDs :**
ST_001
ST_002
ST_003

**Teacher IDs :**
TEA_001
TEA_002

Dummy password is same for all student and teacher given above : **1234**


# REST APIs Exposed by Backend NodeJS

1. Get particular student deatils  
**http://localhost:3000/students/:sid**

2. Get particular teacher deatils  
**http://localhost:3000/teachers/:tid**

3. Get particular assignment deatils  
**http://localhost:3000/assignments/:aid**

4. Get results of all the students in a given assignment  
**http://localhost:3000/students/assignment/:aid**

5. Get statistical details about the assignment questions  
**http://localhost:3000/assignments/:aid/statistics**

8. Login of students (POST)  
**http://localhost:3000/students/login**

10. Login of teachers (POST)  
**http://localhost:3000/teachers/login** 

