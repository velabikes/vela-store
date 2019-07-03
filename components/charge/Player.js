import React from 'react'
import { compose, lifecycle, withState, withProps, withHandlers } from 'recompose'

const Player = ({ setPos, pos, handleRef }) =>
  <div>
    <video
      src='http://techslides.com/demos/sample-videos/small.mp4'
      ref={handleRef}
      autobuffer="true"
      preload="true"
      muted="muted"
    />
    asdf
    {pos}
  </div>

export default compose(
  withState('pos', 'setPos', null),
  withProps({ ref: React.createRef() }),
  withHandlers(() => {
    let myVideo = null

    return {
      handleRef: () => (ref) => (myVideo = ref),
      handleScroll: () => () => { if (myVideo && myVideo.getBoundingClientRect().top > 0) myVideo.play() }
    }
  }),
  lifecycle({
    componentDidMount () {
      console.log(this)
      window.addEventListener('scroll', this.props.handleScroll)
    }
  })
)(Player)
