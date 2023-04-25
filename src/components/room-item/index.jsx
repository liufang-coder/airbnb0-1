import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd';
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
 
const RoomItem = memo((props) => {
    const { itemData,itemWidth = "25%",itemClick } = props
    const [ selectIndex,setSelectIndex ] = useState(0)
    const sliderRef = useRef()
    // 事件处理逻辑
    function controlClickHandle(isRight = true,event) {
        // 上一个下一个
        isRight ? sliderRef.current.next(): sliderRef.current.prev()
        // 拿到最新的索引
        let newIndex = isRight ? selectIndex + 1:selectIndex - 1
        const length = itemData.picture_urls.length
        if(newIndex < 0) newIndex = length - 1
        if(newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)
        // 阻止事件冒泡
        event.stopPropagation()
    }
    // 跳转到图片详情页
    function itemClickHandle() {
        if(itemClick) itemClick(itemData)
    }
    const pictureElement = (
        <div className="cover">
            <img src={itemData.picture_url} alt="" />
         </div>
    )
    const swiperElement = (
        <div className="swiper">
        <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false,e)}>
                <IconArrowLeft width="20" height="20"/>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true,e)}>
                <IconArrowRight width="20" height="20"/>
            </div>
        </div>
        <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
                {
                    itemData?.picture_urls?.map((item,index) => {
                        return (
                            <div className="item" key={index}>
                               <span className={classNames('dot',{active:selectIndex === index})}></span>
                            </div>
                        )
                    })
                }
            </Indicator>
        </div>
            <Carousel dots={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover">
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
  
        </div>
    )
  return (
    <ItemWrapper 
    verifyColor={itemData.verify_info?.text_color || "#39576a"}
    itemWidth={itemWidth}
    onClick={itemClickHandle}
    >
        <div className="inner">
        {
            !itemData.picture_urls ? pictureElement : swiperElement
        }

            <div className="desc">
                {itemData.verify_info.messages.join("·")}
            </div>
            <div className="name">{itemData.name}</div>
            <div className="price">¥{itemData.price}/晚</div>
            <div className="bottom">
                <Rating 
                name="half-rating-read" 
                defaultValue={itemData.star_rating ?? 5} 
                precision={0.1} 
                readOnly
                sx={{fontSize:"12px",color:"#00848a"}} />
                <span className='point count'>{itemData.reviews_count}</span>
                {itemData.bottom_info?.content && <span className='point'>·</span>}
                <span className='point extra'>{itemData.bottom_info?.content}</span>
            </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.PropTypes = {
    itemData:PropTypes.object
}
export default RoomItem