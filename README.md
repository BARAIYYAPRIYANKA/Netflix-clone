# Netflix Clone

## Description
A Netflix clone application that allows users to browse and watch movies and TV shows. It includes features such as user authentication, movie browsing, and streaming.

## Features
- User Authentication (Sign up, Login, Logout)
- Browse Movies and TV Shows
- Watch Trailers
- Search Functionality

# API Endpoints
## Authentication
- POST /api/v1/auth/register

Register a new user<br>
Request body:<br>
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}

- POST /api/v1/auth/login

Log in an existing user<br>
Request body:<br>
{
  "email": "user@example.com",
  "password": "password123"
}

- POST /api/v1/auth/logout<br>
Log out the current user

# Movies
- GET /api/v1/movie/trending
  Get a list of trending movies

- GET /api/v1/movie//trailers
  Get trailers of a specific movie
  URL parameters: id - The ID of the movie

- GET /api/v1/movie//details
  Get details of a specific movie
  URL parameters: id - The ID of the movie

- GET /api/v1/movie//similar
  Get a list of similar movies
  URL parameters: id - The ID of the movie

 # TV Shows
- GET /api/v1/tv/trending
   Get a list of trending TV shows

- GET /api/v1/tv//trailers
   Get trailers of a specific TV show
   URL parameters: id - The ID of the TV show

- GET /api/v1/tv//details
   Get details of a specific TV show
   URL parameters: id - The ID of the TV show

- GET /api/v1/tv//similar
   Get a list of similar TV shows
   URL parameters: id - The ID of the TV show

# Search
- GET /api/v1/search/person/
   Search for people by name
   parameters: query - The name of the person

- GET /api/v1/search/movie/
  Search for movies by title
  URL parameters: query - The title of the movie

- GET /api/v1/search/tv/
   Search for TV shows by title
   URL parameters: query - The title of the TV show

  # Technologies Used
 - Node.js
 - Express
 - MongoDB
 - Mongoose
 - JWT for authentication
 - TMDB API for movie data
 - React 

  


