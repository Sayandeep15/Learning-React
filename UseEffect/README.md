# UseEffect Hook

useEffect is a hook that lets you run side effects in your function components. These effects can include data fetching, subscriptions, or manually modifying the DOM.

# ⚙️ How it works:
useEffect(callback, dependencies) runs the callback after the component renders.

If you pass a dependency array [], it runs once (on mount).

If dependencies are listed, it re-runs when any of them change.

You can return a function from the effect to handle cleanup (like removing listeners or timers).

# 🧠 Use cases:
Fetching data from APIs

Adding/removing event listeners

Syncing state with localStorage

Handling component lifecycle logic

#  Example:
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component will unmount");
  };
}, []);
