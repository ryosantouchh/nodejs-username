# Kittitat (Touch) Suntimak

### Stack

- Node.js
- Express.js
- Typescript
- Zod
- Prisma

### Prerequisite

- Yarn
- Typescript
- Node V.16.2 ++
- Postman

### Features

- Create User
- Get All Users
- Get User By ID
- Delete User
- Update User
- Search Query ( Plus )
- Handle Three case of Request Image ( Base64 with/without prefix , Image File )

### Installation

\***\* [Yarn](https://yarnpkg.com/) is required to start the project \*\***

Install the dependencies and devDependencies and start the server.

```sh
yarn && yarn serve
```

##### Open another terminal to see how table look like

```
yarn prisma studio
```

### Use Postman to Call these Routes

##### Get All Users - GET : http://localhost:8080/v1/user

###### Response

```
{
    "data": {
        "count": 7,
        "users": [
            {
                "id": 1,
                "firstName": "Odell",
                "lastName": "Beckham",
                "gender": "male",
                "birthDate": null,
                "image": null,
                "createdAt": "2024-03-05T12:50:30.217Z"
            },
            {
                "id": 3,
                "firstName": "Jalen",
                "lastName": "Ramsey",
                "gender": "male",
                "birthDate": "1987-03-05T00:00:00.000Z",
                "image": null,
                "createdAt": "2024-03-05T15:24:54.458Z"
            },
            {
                "id": 4,
                "firstName": "Aaron",
                "lastName": "Donald",
                "gender": "male",
                "birthDate": null,
                "image": null,
                "createdAt": "2024-03-05T15:36:50.342Z"
            },
        ]
    },
    "message": "get all users!"
```

##### Get All User with Query - GET : http://localhost:8080/v1/user?search=Trevor

**\*** Note - can query with `?page=number` and `?itemPerPage=number`

###### Response

```
{
    "data": {
        "count": 1,
        "users": [
            {
                "id": 15,
                "firstName": "Trevor",
                "lastName": "Lawrence",
                "gender": "male",
                "birthDate": "1998-03-05T00:00:00.000Z",
                "image": null,
                "createdAt": "2024-03-05T17:08:01.765Z"
            }
        ]
    },
    "message": "get all users!"
}
```

##### Get User by Id - GET : http://localhost:8080/v1/user/1

###### Response

```
{
    "data": {
        "id": 1,
        "firstName": "Odell",
        "lastName": "Beckham",
        "gender": "male",
        "birthDate": null,
        "image": null,
        "createdAt": "2024-03-05T12:50:30.217Z"
    },
    "message": "get user!"
}
```

##### Create User - POST : http://localhost:8080/v1/user

\***\* Note - support both JSON and FormData \*\***

###### Request

```
{
    "firstName": "Justin",
    "lastName": "Reeves",
    "gender": "male",
    "birthDate": "1987-03-05T00:00:00.000Z"
}
```

###### Response

```
{
    "message": "create user success!"
}
```

##### Update User By ID - PUT : http://localhost:8080/v1/user/1

###### Response

```
{
    "firstName": "David"
}
```

###### Response

```
{
    "message": "update user data by id success!"
}
```

##### Delete User By ID - DELETE : http://localhost:8080/v1/user/15

###### Response

```
{
    "message": "delete user data by id success!"
}
```
