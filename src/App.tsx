import React from 'react'
import { routes } from './routes'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Header from './components/Header'
import 'antd/dist/antd.css'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch >
          {
            routes.map(({ id, path, exact, component }) =>
              (
                <Route key={id} path={path} exact={exact} component={component} />
              )
            )}
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
