Notes

Hook
=> React hooks must be called in the exact same order in component render function, it should not be called conditionally, We can not put hook inside of if statement,function,loops. They must be at the top level of function

useState Hook
=>useState always returns an array with two values.First is the current state (variable that contains the component data) and second is the function which is used to update the current state.

When computing a Fibonacci series using useState, each update triggers a re-render of the component, potentially leading to unnecessary re-computation of the entire sequence. This can result in a significant performance overhead, especially for larger values of n, leading to slower execution and possible freezing of the UI.

To efficiently compute a Fibonacci series, it is recommended to use more appropriate approaches, such as iterative or recursive algorithms that are optimized for handling mathematical computations. These algorithms can efficiently compute Fibonacci numbers without the overhead of triggering multiple component re-renders, resulting in better performance and faster execution.
or You can take a function as an argument in useState and put your code there

useEffect Hook
=>Everything inside the useState hook is get executed everytime our application renders. It is used when component mounts or some resources on your page change.
useEffect take a function as an argument which runs everytime when the application renders and second parameter is a dependency array and whatever you pass in the array is the value that whenver it gets changed the hook is executed.

When we pass empty array then hook is executed only once because empty array is never going to change

useMemo
=> Think of a function that performs a complex calculations, it gets executed every time the component re rendered. Here we have a slow function that we don't want to get executed again and again.
Memo is used for memoized value which means caching the value so that we don't have to compute the value again and again.
For example we have a input and it gives same output every time if we have same input so we can cache the input value no and the output it gives us.
If the no doesn't change we don't need to recalculate the slow function over and over again.
we use useMemo and we pass it a function and the function is what we want to memoized.and the second argument is the list of dependency.
We are only running the slow code when we have to.
Memory overhead
Note: Everytime the component is render a new object is created which has different reference then the previous one

useRef Hook
=> What if we want to display no of times the component renders. We can't do it with state and useEffect, We will go into infine loop. Solution is useRef
useRef doesn't cause you to re render
It can be used to store a mutable value that does not cause a re-render when updated.
Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.
useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).
It's like doing this: const count = {current: 0}. We can access the count by using count.current.
=> Reference element inside your html element, each element has ref attribute and you can set that to any ref you want. It is used to reference input element
Use useRef to focus the input:
Tracking State Changes
The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.

UseContext hook
=>It can be broken into two different sections. We have a Context provider that wraps all the code that need access to the information of context and the single prop value which has value of the context. All the component isside the provider has access to the value prop.
Context is for passing the prop all the way down to any of the children without passing it manually to each children. It is like a global state for all of the children.
