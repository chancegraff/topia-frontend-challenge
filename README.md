# Topia Frontend Coding Challenge

### Premise

Topia is a combination of several front-end technologies. There is a graphical canvas, a user interface, and a streaming system. All 3 interact to deliver a unique experience.

This test is designed to touch on the elements of all 3.

While topia runs on a user’s computer, peer avatars are added or removed from the canvas depending on whether or not the peer avatar falls within the range of the user’s viewport. A user’s screen height and width determine how much of the Topia a user can see centered on their own avatar.

In this test, you will rewrite the central algorithm that runs in Topia to maintain which peer avatars are on canvas and which ones are not.

You will wrap the results of this algorithm in a user interface of your own design.

- At the root level of this project, in `App.js`, you are expected to present a button named `Create User List`.
- Pressing this button will launch a modal that will display input fields for current position with default values of `x = 800; y = 400`
- `x, y` (the user’s current position) should be editable in the modal and as it changes it should update the results of the list.
- The list of users can be found in `/src/utils/constants.js`
- Upon closing the modal and when current position and screen size update state, run a utility located in `/src/utils/listUsersInView.js` called `listUsersInView`. This function should return an array of the users in view. `more details about the functionality of this utility are below`
- From this array, list the users in a table, sorted by distance to the center `x,y`
- Columns for the table should be: username, distance, and a visual indication whether this user is a broadcaster or not. For this, there is a field called `is_broadcaster` in the user object.
- For purposes of this test and for use in `listUsersInView` assume the avatar height and width for each user is `height = 125px` and `width = 50px` and that the position of each user is the center point of the avatar

### User List Functionality

Your task is to complete the function `listUsersInView`. It has 5 arguments:

- `users` - a map of users to search through. Each user is indexed by the user’s ID. Each object of the indexed user contains an x, y, width and height.

- `positionX`, `positionY` - The X and Y coordinate of the user’s own avatar

- `screenWidth`, `screenHeight` - The width and height of the user’s screen

You are to use these arguments to determine whether or not a peer avatar in `users` is indeed in the user’s viewport of `screenWidth` width and `screenHeight` height centered at `positionX` and `positionY`

For each peer avatar that appears in the viewport, add the ID of that user to the array `usersInView` which is currently declared and empty at the top of the function `listUsersInView`.

### How to complete

Please submit this completed project to a new github repo. We can coordinate our own use and download of the completed code when you let us know you’re done!

To run this repository, run: `npm start` from the project directory at your terminal and test your progress at `http://localhost:3000/`. Please ensure `node` and `npm` are installed on your computer

##### Happy Coding!