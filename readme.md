
# Club de vuelo

A brief description of what this project does and who it's for


## API Reference

#### Client

| Type | Endpoint | Description |
|-------|-------|-------|
| /get | / | Landing page |
| /get | /contact | Page to contact |
| /post | /contact | Send a message to the admin |
| /get | /about-us | About us |
| /get | /projects | List of projects |
| /get | /sponsors | Sponsors |
| /get | /prices | List of prices |
| /get | /meteo | Access to meteo |
| /get | /events/new | New event form render |
| /get | /news/create | Create a new form render |


#### Server

| Type | Endpoint | Description |
|-------|-------|-------|
| /get | /signup | Sign up form render |
| /post | /signup | Sign up form post |
| /get | /login | Access to private zone form render |
| /post | /login | Access to private zone form post |
| /get | /profile/:id | User profile |
| /get | /profile/:id/edit | User profile form render |
| /post | /profile/:id/edit | User profile form post |
o| /post | /profile/:id/edit | To do ADMIN |
| /post | /profile/:id/delete | Delete a profile |
o| /get | /userlist | List of users |
o| /post | /logout | Log out from session |
| /get | /events | List of events |
| /post | /events/new | New event form post |
| /get | /events/:id | Access to a event |
| /get | /events/:id/edit | Edit a event form render |
| /post | /events/:id/edit | Edit a event form post |
| /post | /events/:id/delete | Delete a event |
| /post | /events/:id/join | Join to a event |
| /get | /news | List of news |
| /post | /news/create | Create a new form post |
| /get | /news/:id | Access to a new |
| /get | /news/:id/edit | Edit a new form render |
| /post | /news/:id/edit | Edit a new form post |
| /post | /news/:id/delete | Delete a new |
| /post | /news/:id/comment | Comment a new |
| /post | /news/:id/comment/delete | Delete a comment on a new |