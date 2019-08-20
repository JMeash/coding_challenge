# Coding Challenge Flatfair

This challenge implements a data model of a tree hierarchy structure and a function to calculate the fee amount of a membership. 

## Getting Started

To run the application, clone the github repository and run the docker container that contains the database. 
Then you can set the environment variables in the .env file to change the given values to the function. 
If you need help installing the application you can follow the instructions below.

### Installing

Clone the repository in your local using `git checkout`.

Once you are in the root of the project, run `npm i` and we must initialize the mongoDB database that is inside a docker container. If you are running a docker in a desktop-based instead of a VM, please change the environment variable of MONGO_URL to:

```
MONGO_DB=mongodb://192.168.99.100:27017/hermes?authSource=admin
```
to
```
MONGO_DB=mongodb://localhost:27017/hermes?authSource=admin
```

Then run docker-compose up -d this command will start the mongoDB database with the data model inside the `data/db/mongo-seed/init.json`  If neccesary, the model can be changed, and you would only have to re-run the docker-compose. 

Finally to run the application, make sure the env variables are set up accordingly to how the function must be ran, and execute `node index.js` in the `src/back` 


## Structure and given limitations

To correctly follow the given proposal, I have left the calculate_membership_fee parameters as given: 
- rent_amount is the total amount of the rent.
- rent_period is an array with two values, the number of weeks and the number of months.
- organization_structure is an object that has been slightly improved, check below.

I have mocked how this function would work in an service/controller design pattern, with some limitations as there isn't a real server behind the function.

An improvement of the given requirement is to change the rent_amount parameter to an object in the controller, that way we would be able to easily escalate to support multiple currencies.

### Organization_structure data model

The model has been changed to be added into a no-sql database such as mongoDB. 
This decision was based on the given requirements, as this would allow us a lot of flexibility in the model as we did not have a lot of requirements, quick response time and adding new branches in the tree would be extremely easy.

Each document is based on the following model:
```
{
    "uuid": String - unique identifier of the uuid npm package
    "name": String - name to identify the branch
    "parent": String - unique identifier of the parent,
    "config":
        {"has_fixed_membership_fee": Boolean,
            "fixed_membership_fee":{
                "amount": Number,
                "currency": String - Currency in ISO 4217 (3 letters)
            }
        },
    }
```

## Running the tests

To run the tests execute `npm run test`

## Built With

* [Docker](https://www.docker.com/get-started) - The container for mongoDB
* [MongoDB](https://www.mongodb.com/) - No-SQL Database

## Authors

* **José Manuel Medrano Martínez** - [JMeash](https://github.com/JMeash)
