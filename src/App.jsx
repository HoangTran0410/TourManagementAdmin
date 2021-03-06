import React from 'react'
import { Provider } from 'react-redux'

import './assets/css/bootstrap-grid.css'
import 'antd/dist/antd.css'
import Routes from './Routes'
import store from './redux/store'
import { GlobalLoading } from './components/GlobalLoading'

function App() {
    return (
        <Provider store={store}>
            <GlobalLoading ref={(gl) => (global.Loading = gl)}>
                <Routes />
            </GlobalLoading>
        </Provider>
    )
}

export default App
