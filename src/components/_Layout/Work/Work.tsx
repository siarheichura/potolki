import React from 'react'
import { StepsContainer } from './Steps/Steps'
import { Present } from './Present/Present'
import { SectionRefs } from '../../../_interfaces'
import './Work.scss'

export const Work = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  return (
    <div className="work" ref={sectionRefs.aboutRef}>
      <div className="container">
        <div className="work__container">
          <h2 className="work__title">КАК МЫ РАБОТАЕМ</h2>
          <div className="work__content">
            <StepsContainer />
            <Present calcRef={sectionRefs.calcRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
