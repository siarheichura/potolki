export const scrollToRef = (
  ref: React.RefObject<HTMLElement> | null,
  offset = 65
) => {
  if (ref?.current) {
    const topPosition =
      ref.current.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: topPosition, behavior: 'smooth' })
  }
}
