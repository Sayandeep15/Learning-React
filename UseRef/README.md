# UseRef Hook
useRef is a React hook that allows you to persist values across renders without causing re-renders when the value changes. It is also used to access DOM elements directly.
# ⚙️ How it works:
useRef(initialValue) returns an object: { current: initialValue }.

This object remains constant throughout the component's lifecycle.

Updating ref.current does not trigger a re-render.

# 🧠 Use cases:
Accessing DOM nodes (e.g., focusing an input).

Holding mutable variables like timers or previous state values.

Avoiding re-renders when storing a value that doesn't affect the UI.

# Syntax:
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus(); // DOM access
}, []);

return <input ref={inputRef} />;


