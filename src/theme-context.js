import React, { useReducer, createContext } from 'react'
import { ThemeProvider } from 'styled-components'

export const themes = {
  light: {
    background: '#ffffff',
    iconColor: '#24292e',
    colors: {
      gray: '#495057'
    },
    border: '1px solid #dee2e6',
    boxShadow: 'unset',
  },
  dark: {
    background: '#2f363d',
    iconColor: '#ffffff',
    colors: {
      gray: '#495057'
    },
    boxShadow: '0 1px 1px rgba(27,31,35,0.1)',
    border: 0,
  },
}

const windowGlobal = typeof window !== 'undefined' && window

const localTheme = windowGlobal.localStorage && windowGlobal.localStorage.getItem('theme') || 'light'

const initialState = {
  style: localTheme,
  theme: themes[localTheme]
}

const reducer = (state, {value, type}) => {
  windowGlobal.localStorage && windowGlobal.localStorage.setItem('theme', value)
  switch (type) {
    case 'TOGGLE_THEME':
      return state.style === 'light' ? { theme: themes.dark, style: 'dark' } : { theme: themes.light, style: 'light' }
    case 'CHANGE_THEME':
      return { theme: themes[value], style: value }
    default:
      return state
  }
}

const ThemeContext = createContext({
  state: initialState,
  dispatch: () => { }
})

function ThemeContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
   <ThemeProvider theme={state.theme}>
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
   </ThemeProvider>
  )
}

export { ThemeContext, ThemeContextProvider }