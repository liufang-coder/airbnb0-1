import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
 
const SectionTabs = memo((props) => {
    const { tabNames = [],tabClick } = props
    tabNames.push("hhhhh")
    tabNames.push("jjjj")
    tabNames.push("lll")
    const [currentIndex,setCurrentIndex] = useState(0)
    function itemClickHandle(index,name) {
        setCurrentIndex(index)
        tabClick(index,name)
    }
  return (
    <TabsWrapper>
        <ScrollView>
            {
                tabNames.map((item,index) => {
                    return (
                        <div 
                        className={classNames("item",{active:index === currentIndex})} 
                        key={index}
                        onClick={e => itemClickHandle(index,item)}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.PropTypes = {
    tabNames:PropTypes.array
}

export default SectionTabs