export interface _interfaces {
  square: number
  lightPoints: number
  cornice: number
  secretCornice: number
  totalAmount: number
  additionalInfo: string
  name: string
  tel: string
}

export type SectionRefs = {
  calcRef: React.RefObject<HTMLDivElement>
  galleryRef: React.RefObject<HTMLDivElement>
  reviewsRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  offerRef: React.RefObject<HTMLDivElement>
}
