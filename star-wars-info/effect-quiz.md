1. In what way are React components meant to be "pure functions"

function(state) -> UI

In other words, react components will always render the same with the same state.

2. What is a "side effect" in React? What are some examples?

Calling an API endpoint. Interfacing with localData.

An effect that is outside react.

3. What is NOT a "side effect" in React? Examples?

Setting state. Rendering components.

4. When does React run your useEffect function? When does it NOT run
   the effect function?

The first time the component renders, and every time it renders _if the dependency array has changed._ If there are no changes in the dependency array, the effect will not rerun.

5. How would you explain what the "dependecies array" is?

An array of values that are checked for changes to decide whether or not the side effect needs to rerun. An empty array also works and indicates "run this side effect exactly once" because the empty array will never change after. The same is true for an array of static values like `[0]` or `[1, 'a']`.
