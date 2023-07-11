# Storybook Play State Update Problem

There's a problem using storybook interactions and storybook jest when updating a state.
When updating the state inside a `play` function, the component does not re-render and thus does not get the state update.

It works perfectly in the browser, but not when running it via jest.

To test it out:

```bash
npm install && npx nx test storybook-play-state-problem
```

In the console output you will see that the updated state will not be printed.
