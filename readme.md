# Behaviours API

The API is used for retrieving, modifying, deleting the data.

## Run on local machine

To use this repository you should have following
installed in your machine

- node
- npm
- mongoDB
- git

Clone the project

```bash
  git clone https://github.com/UsernameZERO/behavioursAPI
```

Go to the project directory

```bash
  cd behavioursAPI/

```

Install Dependencies

```bash
npm install --save
```

- Make sure to start Mongodb, as it differ from system to system.
- Add your google credentials for google social Authentication and also for recaptcha.

Now run the application

```bash
npm start
```

-To view the behaviours
- Use GET ---> Url/Api

-To view selected behaviour
- Use GET ---> Url/Api/{SelectedBehaviour name}
-To add a behaviour in a selected behaviour
- Use POST ---> Url/Api/{SelectedBehaviour name}/add
-To Edit the behaviour
- Use PUT ---> Url/Api/{SelectedBehaviour name}/update/:id
-To Delete a behaviour
- Use DELETE ---> Url/Api/{SelectedBehaviour name}/:id

## Folder Structure

```bash
    API
├── configs
├── controllers
├── models
|── node_modules
├── routes
├── index.js
├── package-lock.json
├── package.json
└── readme.md
```
