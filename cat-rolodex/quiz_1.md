1. What do props help us accomplish?

Basically arguments for the Component. Pass in relevant data to customize and reuse a component.

2. How do you pass a prop into a component?

Similar to html propreties, eg. `<Contact img="fish.png" />`

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

So, you _can_ add custom props to native DOM objects, both in raw html and rendered JSX, and React will not complain. The attributes are even accessible in Firefox's console.

**BUT DO NOT DO THIS.** It is unsupported so not every browser or device will work the same way. Some might discard the custom attribute. (Have not tested.)

You can pass custom string props, but it's not defined by the HTML spec and will be ignored. (You _can_ access it on the DOM object though.)

4. How do I receive props in a component?
   function Navbar(props) {
   const {arg1, arg2} = props;
   return (
   <header>
   ...
   </header>
   )
   }

I like to use object deconstruction now to make things explicit. I wonder if there's a better way like defining it in the function parameters

5. What data type is `props` when the component receives it?

object.
