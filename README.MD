 Backend API for a Bookmarking Application

 Database used MongoDB

 API Included:-

Creating Bookmarks
Creating Tags

Retrieving Bookmarks
Retrieving Tags

Deleting Bookmarks
Deleting Tags

Adding Tags to Bookmarks
Removing Tags to Bookmarks


Installation:-

Download node.js latest version

Should have mongodb atlas account(Create an account in mongodb and copy the url string)

On terminal

##npm install

##npm start


Creating Bookmarks:-http://localhost:3000/bookmarks (POST)
Creating tags:-http://localhost:3000/tags (POST)
Retrieving Bookmarks:-http://localhost:3000/bookmarks (GET)
Retrieving Tags:-http://localhost:3000/tags (GET)
Adding tag to bookmark:-http://localhost:3000/bookmarks/add/:id (PATCH)
Removing tag from bookmark:-http://localhost:3000/bookmarks/remove/:id (PATCH)
Delete Bookmarks:-http://localhost:3000/bookmarks/:id (DELETE)
Delete Tags:-http://localhost:3000/tags/:id (DELETE)
