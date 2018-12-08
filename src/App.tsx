import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import './App.css'
import stores from './stores'
import history from './history'

import Menu from './components/Menu'
import RootSection from './components/RootSection'

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Provider {...stores}>
          <div className='App'>
            <header className='App-header'>
              <Menu />
            </header>
            <main className='App-main'>
              <Route
                path='/'
                component={RootSection}
              />
            </main>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
