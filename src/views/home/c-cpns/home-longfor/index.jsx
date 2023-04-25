import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
    const { infoData } = props
  return (
    <LongForWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <div className="long-for-list">
            <ScrollView>
                {
                    infoData.list.map(item => {
                        return (
                            <LongForItem key={item.city} itemData={item}/>
                        )
                    })
                }
            </ScrollView>
        </div>
    </LongForWrapper>
  )
})

HomeLongFor.PropTypes = {
    infoData:PropTypes.object
}

export default HomeLongFor