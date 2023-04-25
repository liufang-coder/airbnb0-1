import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
// import { getEntireRoomListData } from '@/services/modules/entire'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {

  // 发送网络请求，获取数据，并且保存当前的页面
  // 请求统一放到redux中进行管理
  const dispatch = useDispatch()
  useEffect(() => {
    // getEntireRoomListData(0).then(res => {

    // }) 
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false}))
  },[dispatch])
  return (
    <EntireWrapper>
      <AppHeader/>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire