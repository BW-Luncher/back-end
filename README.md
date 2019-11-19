# back-end



### BaseURL: lambdalunches.herokuapp.com/api
---

# **Authentication**

## Register User
```
POST /auth/register
```
| name     	| type   	| description                	|   	|   	|
|----------	|--------	|----------------------------	|---	|---	|
| username 	| string 	| users name *required       	|   	|   	|
| password 	| string 	| users password *required   	|   	|   	|



### response 

```
{
  "message": "Welcome test123!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...etc."
}
```
---
## Login User
```
POST /auth/login
```

| name     	| type   	| description              	|   	|   	|
|----------	|--------	|--------------------------	|---	|---	|
| username 	| string 	| users name *required     	|   	|   	|
| password 	| string 	| users password *required 	|   	|   	|

### response 

```
{
  "message": "Welcome test123!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...etc."
}

```
schools layout
---
 
# **schools**

| name        	| type    	| description                                             	|
|-------------	|---------	|---------------------------------------------------------	|
| id          	| integer 	| user_items id                                       	|
| school      	| string  	|  	|
| school_insignia   	| string  	| photo of item (cannot be longer than 1000 characters)                         	|
| address	| text    	| address of school *required*                        	|
| email      	| email of school *required*                  	|
| funds_needed  	| integer 	| funds needed for school *required*                 	|
| funds_given     	| integer 	| funds donated to school                        	|
| goal    	| integer 	| Overall donation goal for the the school                       	|

## GET user items

```
Get  /schools/
```
### response 

```
[
  {
     "id": 1,
    "school": "Lakewood",
    "school_insignia": "http//schools.com",
    "address": "123 school dr",
    "email": "this@gmail.com",
    "funds_needed": 5000,
    "funds_given": 1000,
    "goal": 10000
  },
  {
      "id": 2,
    "school": "George Washington",
    "school_insignia": "http//schools.com",
    "address": "123 school dr",
    "email": "this@gmail.com",
    "funds_needed": 5000,
    "funds_given": 1000,
    "goal": 10000
  },
  {
       "id": 3,
    "school": "Wheat Ridge",
    "school_insignia": "http//schools.com",
    "address": "123 school dr",
    "email": "this@gmail.com",
    "funds_needed": 5000,
    "funds_given": 1000,
    "goal": 10000
  }
]

```
---

## GET school by ID

```
GET /schools/:id
```
### response 

```
{
     "id": 1,
    "school": "Lakewood",
    "school_insignia": "http//schools.com",
    "address": "123 school dr",
    "email": "this@gmail.com",
    "funds_needed": 5000,
    "funds_given": 1000,
    "goal": 10000
}
```
---
## POST school

```
POST schools/:id
```

### response 

```
{
  "id": 3,
  "school": "Lambda schools",
  "school_insignia": "http//schools.com",
  "address": "123 school dr",
  "email": "this@gmail.com",
  "funds_needed": 5000,
  "funds_given": 1000000000,
  "goal": 10000
}
```
---