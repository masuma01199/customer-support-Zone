## What is JSX, and why is it used?

- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript code.

* It makes the code more readable and easier to write. Instead of using complex React.createElement() functions, JSX allows developers to visualize the UI structure directly. React transforms JSX into standard JavaScript that the browser can understand.

## What is the difference between State and Props?

Props (Properties) | State
Data passed from a parent to a child. | Data managed internally by the component.
Immutable (Read-only for the child). | Mutable (Can be changed using a setter).
Configuration and communication. | Handling interactivity and dynamic data.

## What is the useState hook, and how does it work?

- The useState hook is a function that allows you to add "state" to a functional component.

* It takes the initial value as an argument and returns an array containing two elements:

- The current state value.
- A function to update that value.
- example: const [count, setCount] = useState(0);

## How can you share state between components in React?

- State in React is "unidirectional" (flows down). To share state between components, we use the following methods:

* Lifting State Up: Moving the state to the closest common parent component so both children can access it via props.

* Context API: Creating a "Global" state that any component can subscribe to without passing props through every level.

* State Management Libraries: Using tools like Redux or Zustand for complex, large-scale applications.

## How is event handling done in React?

- Event handling in React is very similar to handling events on DOM elements, with two main syntax differences:

* CamelCase: Events are named using camelCase instead of lowercase (e.g., onClick instead of onclick).

* Functions as Handlers: You pass a function as the event handler rather than a string.

--> Correct: <button onClick={handleClick}>Complete</button>

--> Incorrect: <button onclick="handleClick()">Complete</button>
