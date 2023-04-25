import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useState,useEffect } from 'react'
import { RightWrapper } from './style'
 
const HeaderRight = memo(() => {
  // 定义组件内部状态
  const [showPanel,setShowPanel] = useState(false)

  // 副作用代码-网络请求、手动更新DOM、事件监听
  useEffect(() => {
      // 事件处理函数
      function windowHandleClick() {
        setShowPanel(false)
      }
      window.addEventListener("click",windowHandleClick,true)
      return () => {
        window.removeEventListener("click",windowHandleClick)
      }
  },[])
  
  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
        <div className='btns'>
          <span>登录</span>
          <span>注册</span>
          <IconGlobal/>
        </div>
        <div className="profile" onClick={profileClickHandle}>
          <IconMenu/>
          <IconAvatar/>
          {
            showPanel && (
              <div className="panel">
                <div className="top">
                  <div className="item register">注册</div>
                  <div className="item login">登录</div>
                </div>
                <div className="bottom">
                    <div className="item register">出租房源</div>
                    <div className="item login">开展体验</div>
                    <div className='item'>帮助</div>
                  </div>
              </div>
            )
          }
        </div>
    </RightWrapper>
  )
})

export default HeaderRight