# What causes components to rerender?

state changes:

When a component’s state changes, it will re-render itself. Usually, it happens either in a callback or in useEffect hook. State changes are the “root” source of all re-renders.

A component will re-render itself if its parent re-renders. Or, if we look at this from the opposite direction: when a component re-renders, it also re-renders all its children.

When the value in Context Provider changes, all components that use this Context will re-render, even if they don’t use the changed portion of the data directly. Those re-renders can not be prevented with memoization directly, but there are a few workarounds that can simulate it

Everything that is happening inside a hook “belongs” to the component that uses it. The same rules regarding Context and State changes apply here:

state change inside the hook will trigger an unpreventable re-rerender of the “host” component
if the hook uses Context and Context’s value changes, it will trigger an unpreventable re-rerender of the “host” component
Hooks can be chained. Every single hook inside the chain still “belongs” to the “host” component, and the same rules apply to any of them.

# how to prevent uneccessary rerender

we can use react.memo to memoize a component. we can also use useMemo & useCallback

# how to optimize react application? (write down everything you know)

we can use lazy loading and code splitting. besides we can minimize rerendering through techniques like react.memo and useMemo

# how do you monitor the performance of your react app

we can use the react profiler
