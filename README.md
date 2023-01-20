////DESCRIPTION

--Nest JS To do app.
--To create and see the to do list.
--The focus was on backend

-- The frontend was not completed as I don't know much react. Still I tried to do some with basic html, css and JAVAScript

-- Time to complete the assignment: Approx 8-10 Hours


```bash
$ npm install
```

///RUNNING

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Running the app

## API can be tested uing postman

-curl --location --request POST 'http://localhost:3000/todo' \
--header 'Content-Type: application/json' \
--header 'x-api-key: b581a124-c5bf-4db6-8012-450a41e4431b_100' \
--data-raw '{
        "id": 6,
        "title": "To but a car",
        "Description": "Buy a luxury car",
        "dueDate": 2024,
        "priority":"Low"
        
}'


-curl --location --request GET 'http://localhost:3000/todo'

-curl --location --request GET 'http://localhost:3000/todo/:id'##http://localhost:3000/todo/5

## Stay in touch

- Author - "Anand Mishra"
- Email - anandatti@gmail.co.in


