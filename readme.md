### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById(): Selects a single element by its ID attribute. IDs should be unique, so this returns only one element.

2. getElementsByClassName(): Selects all elements with a specific class name. Finds all elements that have a given class.

3. querySelector(): Selects the first element that matches a CSS selector. More versatile as it can use any CSS selector.

4. querySelectorAll(): Selects all elements that match a CSS selector. Returns a static NodeList that doesn't update automatically.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element:

1. Create the element: const newElement = document.createElement('div');
2. Add content/attributes: newElement.textContent = 'Hello World';
3. Insert into DOM using methods like:
   . parent.appendChild(newElement) - adds as last child
   . parent.insertBefore(newElement, referenceElement) - inserts before reference element
   . parent.replaceChild(newElement, oldElement) - replaces existing element

### 3. What is Event Bubbling and how does it work?

When an event happens (said that click a button), it first triggers on that exact element, then “bubbles up” to its parent, then to the parent’s parent, and so on until it reaches the top (document).

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where we attach a single event listener to a parent element to handle events triggered on its child elements. This works due to event bubbling.

It's useful because:
. It reduces memory usage by minimizing the number of event listeners.
. It works for dynamically added elements without needing to attach new listeners.
. It simplifies code when dealing with many similar elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

1. preventDefault() → Stops the browser’s built-in action (e.g., don’t submit a form, don’t follow a link).

2. stopPropagation() → Stops the event from bubbling up, so parent elements won’t hear about it.
