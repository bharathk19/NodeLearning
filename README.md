This Project is used to learn NodeJS .

In order to learn please install

1. Node.js
2. GitHub (To learn and pull this project)
3. Any Code Editor (Prefer to use VS Code)
4. And couple of extensions like Git History, Code spell checker, Git lens, Live server, prettier, vscode-icons and tab nine
5. Any Browser you like (prefer to user Chrome, Firefox)
6. Postman to test API's

Node inbuild packages exercise are in nodeinbuilt folder ==> FileSystem.js and OperatingSystemINfo.js which can be run from the folder with command node <fileName>.js i.e node FileSystem.js

The FileSystem.js file contains the following functions:
writeFile: Is a function that enables you to write a file of any extension.
appendFile: Is a function that enables you to append any data to a file. remember to append "/n" at the string we are passing as argument to the function.
readFile: Is a function that enables you to read a file of any extension. Please note that to pass a encoding type i.e 'UTF-8' to decode the text as human readable.
renameFile: Is a function that enables you to rename a file.
unlike: Is a function that enables you to delete a file.

All the above functions accept both relative paths and absolute paths. Can refer to this link "https://www.youtube.com/watch?v=ephId3mYu9o from a youtube." to know more about the relative and absolute paths.

HTTP Module : This module helps you create services for a application.
nodeinbuilt/http.js files details with a basic example to demonstrate how a request is processed.
nodeinbuilt/staticApi.js files details with a basic example to demonstrate how the data can be loaded with file system and respond with the data.

Added Start and dev scripts to the package.json. this helps you to run a specific file when running.
Example: "npm start" and "npm run dev" are the commands to start from the folder where package.json is located.

ActualLearn directory is where we would be learning the expressJS framework.
As the name explains basicExpress.js is used for basic examples to use express.
