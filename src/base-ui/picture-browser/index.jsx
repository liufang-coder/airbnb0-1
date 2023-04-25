import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
    const { pictureUrls,closeClick } = props
    // 记录图片切换索引
    const [ currentIndex,setCurrentIndex ] = useState(0)
    // 记录下一张上一张状态用于控制动画展示的方向
    const [ isNext,setIsNext ] = useState(true)
    // 记录图片的显示和隐藏
    const [ showList,setShowList ] = useState(true)
    // 当图片浏览器展示出来时，让滚动的功能消失
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    },[])
    // 子组件点击关闭父组件里内容时：父组件传递一个回调函数 子组件调用回调函数
    function closeClickHandle() {
        if(closeClick) closeClick()
        setCurrentIndex()
    }
    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1: currentIndex - 1
        // 越界
        const length = pictureUrls.length
        if(newIndex < 0) newIndex =  length - 1
        if(newIndex > length - 1) newIndex = 0 
        setCurrentIndex(newIndex)
        setIsNext(isNext)
    }

    function handleBottomItemClick(index) {
        setIsNext(index > currentIndex)
        setCurrentIndex(index)
    }
  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
    <div className="top">
        <div className="close-btn" onClick={closeClickHandle}>
            <IconClose/>
        </div>
    </div>
    <div className="slider">
        <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false)}>
                <IconArrowLeft width="77" height="77"/>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
                <IconArrowRight width="77" height="77"/>
            </div>
        </div>
        <div className="picture">
            <SwitchTransition mode='in-out'>
                <CSSTransition
                    key={pictureUrls[currentIndex]}
                    classNames="pic"
                    timeout={200}
                > 
                    <img src={pictureUrls[currentIndex]} alt="" />
                </CSSTransition>
            </SwitchTransition>
        </div>
    </div>
    <div className="preview">
        <div className="info">
            <div className="desc">
                <div className="count">
                    <span>{currentIndex + 1}/{pictureUrls.length}</span>
                    <span>room apartment图片{currentIndex + 1}</span>
                </div>
                <div className="toggle" onClick={e => setShowList(!showList)}>
                    <span>{showList ? "隐藏":"显示"}照片列表</span>
                    {showList ? <IconTriangleArrowBottom />:<IconTriangleArrowTop/>}
                </div>
            </div>
            <div className="list">
                <Indicator selectIndex={currentIndex}>
                    {
                        pictureUrls.map((item,index) => {
                            return (
                                <div 
                                className={classNames('item',{active:currentIndex === index})} 
                                key={item}
                                onClick={e => handleBottomItemClick(index)}
                                >
                                    <img src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
        </div>
    </div>
    </BrowserWrapper>
  )
})

PictureBrowser.PropTypes = {
    pictureUrls:PropTypes.array
}

export default PictureBrowser