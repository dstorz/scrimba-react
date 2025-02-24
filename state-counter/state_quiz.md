1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

The new value for the state, or a callback function that takes the old value as a parameter and sets the new state.

2. When would you want to pass the first option (from answer
   above) to the state setter function?

Simple, static updates that do not rely on the past value.

3. When would you want to pass the second option (from answer
   above) to the state setter function?

If the new value relies on the old value.
