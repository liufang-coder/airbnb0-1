import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App';
import "normalize.css"
import "antd/dist/antd.less" 
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme';
// import "antd/dist/antd.css"
// 1.引入jsconfig.json
// @ -> src:在webpack配置
// 问题：react脚手架隐藏webpack
// 解决一：npm run eject(不推荐)
// 解决二：craco -> create-react-app config
// 安装craco:npm i @craco/craco@alpha -D
// 配置craco.config.js
// 配置启动 package.js -> scripts:craco
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  
  // </React.StrictMode>
);


