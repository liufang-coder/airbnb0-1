import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'
// import AppHeader from './components/app-header'
import routes from './router'
const App = memo(() => {
  // 页面切换时回到顶部
  // const location = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // },[location.pathname])
  useScrollTop()
  return (
    <div className='app'>
      {/* <AppHeader/> */}
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter/>
    </div>
  )
})

export default App