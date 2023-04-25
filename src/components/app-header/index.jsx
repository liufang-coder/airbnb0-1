import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import useScrollPasition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'


const AppHeader = memo(() => {
  // 定义搜索组件内部状态
  const [ isSearch,setIsSearch ] = useState(false)
  // 从redux中获取数据决定是不是固定定位
  const { headerConfig } = useSelector((state) => ({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const { isFixed,topAlpha } = headerConfig
  // 监听滚动
  const { scrollY } = useScrollPasition()
  const prevY = useRef(0)
  // 在正常滚动的情况（搜索框没有弹出来），不断记录值
  if(!isSearch) prevY.current = scrollY
  // 在弹出搜索功能的情况，滚动的距离大于之前记录的距离的30
  if(isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  // 透明度的逻辑
  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={{isAlpha}}>
        <HeaderWrapper  className={classNames({fixed:isFixed})}>
          <div className="content">
            <div className="top">
              <HeaderLeft/>
              <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
              <HeaderRight/>
            </div>
            <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
          </div>
          {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
        </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader