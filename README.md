
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
│   ├── mysql_data
│   │   ├── aria_log.00000001
│   │   ├── aria_log_control
│   │   ├── ib_buffer_pool
│   │   ├── ibdata1
│   │   ├── ib_logfile0
│   │   ├── multi-master.info
│   │   ├── mydatabase [error opening dir]
│   │   ├── mysql [error opening dir]
│   │   └── performance_schema [error opening dir]
│   ├── package.json
│   ├── package-lock.json
│   └── routes
│   
└───motor-services-frontend
│   ├── dist
│   │   ├── index.3aefa2fc.css
│   │   ├── index.e37c8fbd.js
│   │   └── index.html
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
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## 🖥️ Tech Stack

**Client:** React,

**Server:** Node, Express


## 👥 Authors

- [@ricmiber96](https://github.com/ricmiber96)
- [@JuanFran928](https://github.com/JuanFran928)
- [@Marta-ramiro](https://github.com/Marta-ramiro)


## Demo

https://pickauto.es/


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

