# useCallback — Memoize a Function

useCallback is a React hook that returns a memoized version of a function, which is only recreated when its dependencies change.
# 🎯 Use Cases:
Prevent unnecessary re-renders of child components that receive callback props.

Keep the same function reference between renders.

Improve performance in component trees with React.memo.
# ⚙️ Syntax:

const memoizedCallback = useCallback(() => { </br>
  doSomething(a, b); </br>
}, [a, b]);
# 🧪 Example:

const handleClick = useCallback(() => { </br>
  console.log("Button clicked");
</br>
}, []);
