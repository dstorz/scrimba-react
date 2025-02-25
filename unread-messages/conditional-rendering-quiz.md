1. What is "conditional rendering"?

Choosing whether to render something based on a condition.

2. When would you use &&?

With an explicitly boolean value, and usually when you want to "turn off" rendering of an element (as opposed to swapping it for another.)

3. When would you use a ternary?

When you have multiple things you want to render based on the condition, like the show/hide text on a button.

4. What if you need to decide between > 2 options on
   what to display?

Usually cleaner to do it in a variable or function outside the render block and show that instead eg.

<h1>{determinedText}</h1>
