import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import Header from './components/Header'
import GlobalStyle from './styles/global'
import './config/ReactotronConfig'

import store from './store'

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
