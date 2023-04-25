import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSectionV2 = memo((props) => {
    // 从props中获取数据
  const { infoData } = props

  // 定义内部的state以及数据转换
  // 动态取第一个数据 
  const initialName = Object.keys(infoData.dest_list)[0] 
  const [name,setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 在useEffect副作用中监听infoData的改变(会被渲染三次)
//   useEffect(() => {
//     setName()
//   },[infoData])
  // 传入回调函数每次都会刷新组件-性能优化：使用useCallback
  // 回调函数接收子组件传过来的值
  const tabClickHandle = useCallback(function (index,name) {
    setName(name)
  },[])
  return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%"/>
        <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.PropTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2