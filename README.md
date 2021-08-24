# LAB - 08

# auth-api

### `Author: Khaled Tahat`

[tests report]()

### Setup

`.env` requirements

- PORT=3003
- POSTGRES_URI = postgres://postgres:0000@localhost:5432/authapi
- SECRET=super secret

- Running the app - `npm start` 

- Endpoints: 
    - `/signup` 
        - returns Object example with `201` status if exists:<br />
        
        ```
        {
             "capabilities": [
                "read",
                "create",
                "update"
            ],
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QyIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiXSwiaWF0IjoxNjI5ODAyNzk4fQ.oOBMWRyUBMyr9Ho1M4C95-qaWyq8Pu5tuLsX0zH58q0",
            "id": 4,
            "userName": "test2",
            "password": "$2b$10$clFhyvQCvUtKuZjJ.94CRetbPekBR.lKk1NAA.2BSU5MvFUfKNsCO",
            "role": "editor",
            "updatedAt": "2021-08-24T10:59:58.126Z",
            "createdAt": "2021-08-24T10:59:58.126Z"
        }
        ```

    - `/signin`
        - returns Object example with `200` status if exists:<br />
        
        ```
        {
             "capabilities": [
                "read",
                "create",
                "update"
            ],
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QyIiwiY2FwYWJpbGl0aWVzIjpbInJlYWQiLCJjcmVhdGUiLCJ1cGRhdGUiXSwiaWF0IjoxNjI5ODAyNzk4fQ.oOBMWRyUBMyr9Ho1M4C95-qaWyq8Pu5tuLsX0zH58q0",
            "id": 4,
            "userName": "test2",
            "password": "$2b$10$clFhyvQCvUtKuZjJ.94CRetbPekBR.lKk1NAA.2BSU5MvFUfKNsCO",
            "role": "editor",
            "updatedAt": "2021-08-24T10:59:58.126Z",
            "createdAt": "2021-08-24T10:59:58.126Z"
        }
        ```

- Tests: <br />
Unit Tests: `npm run test` <br />

- UML

<img src="/home/kztahat/401-course/week2/auth-api/src/auth-api.png"
     alt="code-challenge-1 whiteBoard"
     style="float: left; margin-right: 10px;" />