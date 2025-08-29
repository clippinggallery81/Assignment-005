1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById  Gets one element by its unique ID.
     getElementsByClassName Gets many elements that share the same class.
     querySelector Gets the first element that matches a CSS selector.
     querySelectorAll Gets all elements that match a CSS selector.


2. How do you **create and insert a new element into the DOM**?
Ans: let newElement = document.createElement("element-tag");


3. What is **Event Bubbling** and how does it work?
Ans: If a child is clicked, the event doesn't just stop there, but rather it goes up step by step (parent → its parent → body → document).


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where you use a single event listener on their common parent element instead of having separate event listeners for multiple child elements. Then use event bubbling to figure out which child was clicked and work on it.

Why is it useful?
Performance is better. Instead of having separate listeners for a hundred buttons, just put one listener on the parent.
Works with dynamic elements. It will work even if the element is newly added to the DOM, because the event is being caught on the parent. The code is smaller and cleaner.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: When a form is submitted, the page reloads by default. To prevent this, preventDefault() is used.

stopPropagation() This stops event bubbling. This means the event will no longer go to the parent.

