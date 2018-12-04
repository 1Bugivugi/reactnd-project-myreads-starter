# MyReads Project

This project was created with a starter template for the final assessment project for Udacity's React Fundamentals course. The template provided a static example of the CSS and HTML markup that I used to implement the necessary React code that I needed to complete the project. I added interactivity to the project and made it dynamic.

## Installation

* **Zip-Download:** Download the repository as a zip-file, extract it, use Git Bash to change
into the project directory.
* **Clone the Repository:** Clone the repository with Git Bash to a directory of your choice: ```git clone https://github.com/1Bugivugi/reactnd-project-myreads-starter```.

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Regards and Dependencies 
* I used [Maeva's study jam](https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be) to better understand and learn basic concepts of React. The project is scalable so I plan to improve it(ex. making shelves reusable, change some methods, etc) as I graduate.
* The [Udacity React lessons about controlled components](https://classroom.udacity.com/nanodegrees/nd001/parts/c3e7b0d6-ffef-4421-b5fc-6df10fd0a1ae/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/14331e60-a548-4cfb-a326-054545da8927/concepts/fc3f11d3-8779-4d8a-8a23-1cd782f8ddf3) helped me to implement the basic version of the search function. I refined it with the help of Maeva's study jam mentioned above.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
