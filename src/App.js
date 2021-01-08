import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './routes'
import Header from './components/Header'
import GlobalStyle from './styles/global'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}
