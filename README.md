
![image](https://drive.google.com/uc?export=view&id=1i8OzH4Ip6_4Csz6jgZcKed6TzSmV7l9E)


# Pick Auto π

Pick Auto is an application to help people with little time to manage the services of their vehicles setting appointments between users and drivers, keeping the revisions up to date.


## πProject Structure
```
pickauto
β   README.md
β   start.sh
β   docker-compose.yml    
β
ββββmotor-services-backend
β   βββ controllers
β   βββ db
β   β   βββ database.js
β   βββ Dockerfile
β   βββ index.js
β   βββ init
β   β   βββ 01_database_creation.sql
β   β   βββ 02_user_creation.sql
β   β   βββ 03_db_tasks.sql
β   βββ models
|   βββ node_modules
β   βββ mysql_data
β   β   βββ aria_log.00000001
β   β   βββ aria_log_control
β   β   βββ ...
β   βββ package.json
β   βββ package-lock.json
β   βββ routes
β   
ββββmotor-services-frontend
β   βββ dist
β   β   βββ index.3aefa2fc.css
β   β   βββ index.e37c8fbd.js
β   β   βββ index.html
|   βββ node_modules
β   βββ Dockerfile
β   βββ package.json
β   βββ package-lock.json
β   βββ postcss.config.js
β   βββ public
β   βββ src
β   β   βββ assets
β   β   βββ components
β   β   βββ index.html
β   β   βββ js
β   β   β   βββ index.js
β   β   βββ styles
β   β       βββ index.css
β   βββ vite.config.js
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

## π₯οΈ Tech Stack

**Client:** React, Material UI

**Server:** Node, Express


## π₯ Authors

- [@ricmiber96](https://github.com/ricmiber96)
- [@JuanFran928](https://github.com/JuanFran928)
- [@Marta-ramiro](https://github.com/Marta-ramiro)


## Demo

https://pickauto.es/

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Features

- Light/dark mode toggle
