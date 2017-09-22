## Live demo

<https://arek-starter.herokuapp.com/active>

## Install arek-starter with :
```
npm i
```
## Run arek-starter with:
```
npm start
```
## Exercises 
### React
1. Create new React button component (you can copy one of the existing). Let's call it `CounterButton`. Inside the button display a number of times that this button was clicked. Keep the the counter value in React state and modify it on every click by +1.

<https://facebook.github.io/react/docs/hello-world.html>

### Styled Components
2. Create a styled compontent that will wrap the value of `CounterButton`. Change the color of text to blue.
3. Change the styling depending on number of clicks. If the number of clicks is greater than 5 make the text red and bigger.
4. Change the background of the `CounterButton` (only that button).

<https://www.styled-components.com/>

### Redux
5. Create next React button component and name it `ReduxCounter`. It should do the same as `CounterButton`, but this time we will save it's value in redux store. (Pro tip: Install Redux DevTools for your browser. Working with Redux will be easier. Investigate how "ReduxButton" works.)

<http://redux.js.org/>

### React Router
7. Create links to "HOME" (path: "/") and "MY BUTTONS" (path: "/mybuttons"). Do it with React Router. Don't worry about styling.
8. Render `CounterButton` and `ReduxCounter` only when url matches "/mybuttons". Other buttons can be still rendered.

<https://reacttraining.com/react-router/>

### GraphQL, Apollo, SQlite
9. Create new React button component and name it `GraphQLButton`. Apply the same functionality as before but this time save changes in database.

<http://graphql.org/learn/>

<http://dev.apollodata.com/react/>

<https://www.sqlite.org/docs.html>