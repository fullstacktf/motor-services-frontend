
![image](https://drive.google.com/uc?export=view&id=1i8OzH4Ip6_4Csz6jgZcKed6TzSmV7l9E)


# Pick Auto 🚗

Pick Auto is an application to help people with little time to manage the services of their vehicles setting appointments between users and drivers, keeping the revisions up to date.


## 📁Project Structure
```
pickauto
│   README.md
│   start.sh
│   docker-compose.yml    
│
└───motor-services-backend
│   ├── controllers
│   ├── db
│   │   └── database.js
│   ├── Dockerfile
│   ├── index.js
│   ├── init
│   │   ├── 01_database_creation.sql
│   │   ├── 02_user_creation.sql
│   │   └── 03_db_tasks.sql
│   ├── models
|   ├── node_modules
│   ├── mysql_data
│   │   ├── aria_log.00000001
│   │   ├── aria_log_control
│   │   ├── ...
│   ├── package.json
│   ├── package-lock.json
│   └── routes
│   
└───motor-services-frontend
│   ├── dist
│   │   ├── index.3aefa2fc.css
│   │   ├── index.e37c8fbd.js
│   │   └── index.html
|   ├── node_modules
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── index.html
│   │   ├── js
│   │   │   └── index.js
│   │   └── styles
│   │       └── index.css
│   └── vite.config.js
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 🖥️ Tech Stack

**Client:** React, Material UI

**Server:** Node, Express


## 👥 Authors

- [@ricmiber96](https://github.com/ricmiber96)
- [@JuanFran928](https://github.com/JuanFran928)
- [@Marta-ramiro](https://github.com/Marta-ramiro)


## Demo

https://pickauto.es/

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Features

- Light/dark mode toggle
