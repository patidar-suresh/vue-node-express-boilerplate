# vue-node-express-boilerplate
A template for full stack project built using vue as client and nodejs and express as server all in TypeScript

## Project setup
This boiler plate has two components client and server. 
Client is a VueJS application created using vue-cli. 
Server is a NodeJS application created using express and typescript.

##### In order to install all dependencies run following command from the project root directory.
```
npm install
```

##### Client Development -> Compiles and hot-reloads for development
```
cd client
npm run serve
```

##### Server Development -> Compiles and hot-reloads for development
```
cd server
npm run dev
```

##### Build for production -> Compile both client and server for production build, copy compiled code to build directory in server directory. server/build will contain final compiled code.
Run below command from root directory 
```
npm run build

```

##### Run NodeJS server -> Start server on port 3002 
```
npm run server

```
Access the application from url http://localhost:3002