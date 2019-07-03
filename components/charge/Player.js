import React from 'react'
import { compose, lifecycle, withState, withProps, withHandlers } from 'recompose'

const Player = ({ setPos, pos, handleRef }) =>
  <div>
    <video
      src='Sample MP4 Video File'
      ref={handleRef}
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
      handleScroll: () => () => console.log(myVideo.getBoundingClientRect())
    }
  }),
  lifecycle({
    componentDidMount () {
      console.log(this)
      window.addEventListener('scroll', this.props.handleScroll)
    }
  })
)(Player)
