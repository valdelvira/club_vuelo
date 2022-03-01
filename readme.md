
# Club de vuelo

A brief description of what this project does and who it's for



## API Reference

#### Client

| Type | Endpoint | Description |
|-------|-------|-------|
| /get | / | Landing page |
| /get | /contact | Contact page |
| /post | /contact | Contact admin |
| /get | /about-us | About us |
| /get | /projects | List of projects |
| /get | /sponsors | Sponsors |
| /get | /prices | List of prices |
| /get | /meteo | Access to meteo |
| /get | /events/new | New event form render |
| /get | /news/create | Create a new form render |
o| /post | /logout | Log out from session |


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
| /post | /profile/:id/delete | Delete a profile (for ADMIN) |
o| /get | /userlist | List of users |
| /get | /events | List of events |
| /post | /events/create | New event form post |
| /get | /events/:id | Access an event |
| /get | /events/:id/edit | Edit an event form render |
| /post | /events/:id/edit | Edit an event form post |
| /post | /events/:id/delete | Delete an event |
| /post | /events/:id/join | Join a event |
| /get | /news | List of news |
| /post | /news/create | Create a new form post |
| /get | /news/:id | Access specific news |
| /get | /news/:id/edit | Edit news form render |
| /post | /news/:id/edit | Edit news form post |
| /post | /news/:id/delete | Delete news |
| /post | /news/:id/comment | Comment news |
| /post | /news/:id/comment/delete | Delete a comment on news |