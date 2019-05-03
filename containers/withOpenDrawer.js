import { connect } from 'react-redux'

const withOpenDrawer = connect(
  ({ openDrawer }) => ({ openDrawer })
)

export default withOpenDrawer
