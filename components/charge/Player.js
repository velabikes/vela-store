import React from 'react'
import { compose, lifecycle, withState, withProps, withHandlers } from 'recompose'

const Player = ({ handleRef, src }) =>
  <div className='player'>
    <video
      src={src}
      ref={handleRef}
      autobuffer="true"
      preload="true"
      muted="muted"
    />
    <style jsx>{`
      .player video {
        width: 100%;
        height: 56vw;
      }
    `}</style>
  </div>

export default compose(
  withState('windowHeight', 'setWindowHeight', 0),
  withState('duration', 'setDuration', 0),
  withProps({ ref: React.createRef() }),
  withHandlers(() => {
    let myVideo = null

    return {
      handleRef: () => (ref) => (myVideo = ref),
      handleWindowDimension: ({ setWindowHeight }) => () => setWindowHeight(window.innerHeight),
      handleScroll: ({ setDuration, duration, windowHeight }) => () => {
        if (!myVideo) return
        if (!duration) setDuration(myVideo.duration)

        const { top, height } = myVideo.getBoundingClientRect()
        const pixelsShowing = windowHeight - top
        const showUntil = windowHeight + height

        if (pixelsShowing > 0 && pixelsShowing <= showUntil) {
          const percent = pixelsShowing / showUntil
          const currentTime = (duration * percent).toFixed(2)

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
