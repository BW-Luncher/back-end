# back-end

### BaseURL: https://lambdaluncher.herokuapp.com/api

---

# **Authentication**

## Register User

```
POST /auth/register
```

| name     | type   | description               |     |     |
| -------- | ------ | ------------------------- | --- | --- |
| username | string | users name \*required     |     |     |
| password | string | users password \*required |     |     |

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

| name     | type   | description               |     |     |
| -------- | ------ | ------------------------- | --- | --- |
| username | string | users name \*required     |     |     |
| password | string | users password \*required |     |     |

### response

```
{
  "message": "Welcome test123!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...etc."
}

```

## schools object layout

# **schools**

| name            | type    | description                                           |
| --------------- | ------- | ----------------------------------------------------- |
| id              | integer | school id                                             |
| school          | text    | school name _required_                                |
| school_insignia | text    | photo of item (cannot be longer than 1000 characters) |
| address         | text    | address of school _required_                          |
| email           | text    | email of school                                       |
| funds_needed    | integer | funds needed for school _required_                    |
| funds_given     | integer | funds donated to school                               |
| goal            | integer | Overall donation goal for the the school _required_   |

## GET school object

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
POST schools/
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

## PUT school

```
PUT schools/:id

```

## response

```

{
    "id": 3,
    "school": "George Washington Highschool",
    "school_insignia": "http//schools.com",
    "address": "123 school dr",
    "email": "this@gmail.com",
    "funds_needed": 9000,
    "funds_given": 1000,
    "goal": 10000
}

```

---

## DELETE School

```

DELETE schools/:id

```

## Response

- An array of all the schools still in the Database

```

[
  {
    "id": 2,
    "school": "George Washington Highschool",
    "school_insignia": "https://images.unsplash.com/photo-1566673242574-eddd38f7277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "address": "123 George Ave",
    "email": "GW@gmail.com",
    "funds_needed": 5000,
    "funds_given": 2000,
    "goal": 7000
  },
  {
    "id": 3,
    "school": "George Washington Highschool",
    "school_insignia": "https://images.unsplash.com/photo-1566673242574-eddd38f7277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "address": "123 George Ave",
    "email": "GW@gmail.com",
    "funds_needed": 5000,
    "funds_given": 2000,
    "goal": 7000
  }
]

```
