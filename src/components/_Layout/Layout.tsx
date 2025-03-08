import React, { useRef } from 'react'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Calculator } from './Calculator/Calculator'
import { Examples } from './Examples/Examples'
import { Footer } from './Footer/Footer'
import { Reviews } from './Reviews/Reviews'
import { Offer } from './Offer/Offer'
import { Work } from './Work/Work'
import { SectionRefs } from '../../_interfaces'
import './Layout.scss'

export const Layout = () => {
  const calcRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const reviewsRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const offerRef = useRef<HTMLDivElement | null>(null)

  const sectionRefs: SectionRefs = {
    calcRef,
    galleryRef,
    reviewsRef,
    aboutRef,
    offerRef
  }

  return (
    <div className="layout">
      <Header sectionRefs={sectionRefs} />
      <Main calcRef={calcRef} />
      <Calculator calcRef={calcRef} />
      <Offer sectionRefs={sectionRefs} />
      <Examples galleryRef={galleryRef} />
      <Work sectionRefs={sectionRefs} />
      <Reviews reviewsRef={reviewsRef} />
      <Footer />
    </div>
  )
}
