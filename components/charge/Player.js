import React from 'react'
import { compose, lifecycle, withState, withProps, withHandlers } from 'recompose'

const Player = ({ handleRef, src }) =>
  <video
    src={src}
    ref={handleRef}
    autobuffer="true"
    preload="true"
    muted="muted"
  />

export default compose(
  withState('windowHeight', 'setWindowHeight', 0),
  withState('duration', 'setDuration', 0),
  withProps({ ref: React.createRef() }),
  withHandlers(() => {
    let myVideo = null

    return {
      handleRef: ({ setDuration }) => (ref) => {
        myVideo = ref
        setDuration(myVideo.duration)
      },
      handleWindowDimension: ({ setWindowHeight }) => () => setWindowHeight(window.innerHeight),
      handleScroll: ({ duration, windowHeight }) => () => {
        if (!myVideo) return

        const { top, height } = myVideo.getBoundingClientRect()
        const pixelsShowing = windowHeight - top
        const showUntil = windowHeight + height

        if (pixelsShowing > 0 && pixelsShowing <= showUntil) {
          const percent = pixelsShowing / showUntil
          const currentTime = duration * percent
          myVideo.currentTime = currentTime
          myVideo.pause()
        }
      }
    }
  }),
  lifecycle({
    componentDidMount () {
      const { handleScroll, handleWindowDimension, setWindowHeight } = this.props
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleWindowDimension)
      setWindowHeight(window.innerHeight)
    },
    componentWillUnmount () {
      window.removeEventListener('scroll')
      window.removeEventListener('resize')
    }
  })
)(Player)
