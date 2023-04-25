import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } = props
    let showMessgae = "显示全部"
    if(name) {
        showMessgae = `查看更多${name}房源`
    }
    // 跳转到详情页（路由的跳转）
    const navigate = useNavigate()
    function moreClickHandle() {
        navigate("/entire")
    }
  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
        <div className="info" onClick={moreClickHandle}>
            <span className="text">{showMessgae}</span>
            <IconMoreArrow/>
        </div>
    </FooterWrapper>
  )
})

SectionFooter.PropTypes = {
    name:PropTypes.string,
    color:PropTypes.string
}

export default SectionFooter