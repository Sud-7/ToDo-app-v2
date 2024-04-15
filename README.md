## TODO App

This is my first App
Features it contains
    -Anyone can signup
    -Anyone can signin
    -Anyone can see there existing ToDos
    -Anyone can mark a todo as done

Steps for construting the App.

1. create README.md
2. better to create backend first





## Backend
1. create a folder backend
2. intialise node project for knowing what packages and scirpts has been used in it.
3. Run in the *cd Backend >npm init
    1. complete the requirements, JSON file gets created
4. Run in the *cd Backend >npm install express----> creates dependencies in the JSON file; package-lock.json also gets created
5. Use of package.json; in dependencies mark the other libraries we call for project, even if we lose that node_mod folder just by running >npm install it will install all the dependecies
6. created index.js --> using and creating HTTP server and routes
>zod
7. created "types.js" file, installed zod library >npm install zod
    1. add all the requirements of zod
8. Importing of documents; using module.exports in the /types.js --> to call use import { createTodo } from "./types";
9. we added the validation over the inputs
>mongoDB
10. created a file db.js and >npm install mongoose
11. create mongo db schema
12. Then, import mongoDB inside index.js and add data insertion over MongoDB
13. Then Test backend using Postman
14. Working correctly, checked all the end points




## Frontend
1. get into root folder and run "npm create vite@latest"
2. Then get inside the frontend folder and run >npm install--> to get the dependencies of react
3. then into app.css & index.css remove all the text and removed all the code from App.jsx except return and put hi there
4. Test using >npm run dev; ugly hi there
5. Then, create folder components inside src and inside components create file Createtodo.jsx
6. Interesting thing, he used *export function* rather than *module.exports*
7. Create new file /same location  Todos.jsx
8. Then, taught us to use for loop for multiple items in array
9. Then, CORS error came; >npm install CORS under backend/index.js
10. Tried hitting BE from FE, infinite request coz of *fetch approach*, stucked in a loop as too many request hitting the end point
11. Corrected the Components file, working fine.