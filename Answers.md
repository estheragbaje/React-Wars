# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

   ReactJS is a JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps.
   One of the problems React solves is described below:

- When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.
  Not only that, React is also used because of the following:
- It is simple. You just need to express the appearance of your app and React takes care of your user interface updates when there are changes in the data
- It is declarative. When changes in data happen React is aware of how to update the changes
- React is component based. This makes development of reusable code that is easy to test.

2. What does it mean to think in react?
   To think in react simply means to think in components.
   When a UI project is given to a developer to build, thinking in react helps to have a good grasp of how to break down each part of the UI into components. It is the premier way to build big, fast Web apps with JavaScript. The thought process of react can be seen below:

- Step 1: Break The UI Into A Component Hierarchy
- Step 2: Build A Static Version in React
- Step 3: Identify The Minimal (but complete) Representation Of UI State
- Step 4: Identify Where Your State
- Step 5: Add Inverse Data Flow

3. Describe state.
   State is a JavaScript object that stores a component’s dynamic data and determines the component’s behavior. Because state is dynamic it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State can only be used within a class component. When state changes, the component responds by re-rendering.

4. Describe props.
   Props can best be defined as a way of passing data from component to component, basically from parent to child component. Props make components reusable by giving components the ability to receive data from the parent component in the form of props.
   Props can be used in two ways:

- Functional component
- Class component

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
   A side effect is anything that affects something outside the scope of the function being executed. Examples of side effects are: fetching data from an API, timers, logging, and manually manipulating the DOM.
   A side effect causes a component to return a different output for the same state and props. React offers some tools for managing side effects so we can avoid bugs and inconsistencies in our app.
   The effect hook (useEffect()) is one of those.

The effect hook takes in two parameters. The first is a callback function where we can run the side effect. The way we sync effects in a React component is by passing in a dependency array as the second argument to the effect hook. Note that this argument is optional. If we don’t pass in an array after the callback function, the effect will fire after any changes.

<!--
useEffect(() => {
  console.log("The component has mounted.");
}, []); -->
