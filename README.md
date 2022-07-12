# Jsonplaceholder to Reqres Automation

## :clipboard: About
This is a practice project with the intent of exercising working with simultaneous APIs and a database. The automation gets user data from the Jsonplaceholder API, stores users on a local MongoDB Community database based on their respective ids, transforms the user data to an appropriate model for the Reqres API and creates a user in it. The automation utilizes a cron job system to run automatically everyday 9PM.

---

## :package: Dependencies
* [Express](https://expressjs.com)
* [Axios](https://axios-http.com)
* [Dotenv](https://npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)
* [Mongoose](https://mongoosejs.com/)
* [Node-Cron](https://www.npmjs.com/package/node-cron)

---

## Requirements

Git, Node.js and a code editor, like VSCode.

---

## :file_folder: How to install and use
* Clone repository.
```
    $ git clone https://github.com/Has333/Jsonplaceholder-to-Reqres-Automation.git
```

* Access main directory.

```
    $ cd Jsonplaceholder-to-Reqres-Automation
```
* Install all dependencies using the command `npm install` (or `yarn install` depending on your package manager).

```
    $ npm install || yarn install
```

---

## Setting up environment variables

Now, we need to open the project with a code editor to set up environment variables, by creating a `.env` file based on `.env.example` on the project folder. We need to add a port for our server to use.

---

Afterwards, we can run `npm start` on the terminal. We can leave the automation running and it will update the database everyday at 9PM.
