import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
// import SectionHeader from '@/components/section-header'
// import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'
// import SectionHeader from '@/components/section-header'
// import SectionRooms from '@/components/section-rooms'
// import SectionTabs from '@/components/section-tabs'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {

  // 从redux中获取数据
  const { 
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo,
    longForInfo:state.home.longForInfo,
    plusInfo:state.home.plusInfo

  }),shallowEqual)

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    // 控制header展示
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
  },[dispatch])

  return (
    <HomeWrapper>
      <AppHeader/>
      <HomeBanner/>
      <div className="content-wrapper">
        {/* <div className="discount">
          <SectionHeader 
          title={discountInfo.title} 
          subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.33333%"/>
        </div> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longForInfo) && <HomeLongFor infoData={longForInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}

        {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
        <div className="high-score">
          <SectionHeader 
          title={highScoreInfo.title} 
          subtitle={highScoreInfo.subtitle}/>
          <SectionRooms roomList={highScoreInfo.list}/>
        </div> */}
      </div>
    </HomeWrapper>
  )
})

export default Home