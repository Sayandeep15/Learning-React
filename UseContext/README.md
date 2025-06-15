# UseContext Hook

useContext is a React hook that lets you read values from a React Context directly in a function component, without passing props manually through every level of the component tree.

# ⚙️ How it works:
First, you create a Context object using React.createContext().

You provide the context value at a higher level using a <Context.Provider>.

Then, in any nested component, you can access the value using useContext(MyContext).

This avoids prop drilling (passing props through many components).

# 🧠 Use cases:
Sharing global data like:

User authentication status

Theme (dark/light)

Language settings

Global configuration or API base URLs

# Imports:
1. import {createContext} from 'react'
2. import {useContext} from 'react'
