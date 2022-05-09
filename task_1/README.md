## To run application follow this steps

1. copy **.env.example** to **.env** and modify config values if necessary
2. **npm install** to install dependencies
3. **npm run dev** - will start server
4. **npm run test** - will run all available tests 

## Available routes 

1. **POST /track** 
* set **Content-Type: application/x-www-form-urlencoded** for a request in case you use POSTMAN
* in case data contains **count** parameter, request increments value under KEY **count** in redis DB 

2. GET /count
* returns current value of value under key **count** stored in Redis DB

3. Other routes should return 404