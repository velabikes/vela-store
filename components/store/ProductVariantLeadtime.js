import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import { compose, withState, lifecycle, withProps } from 'recompose'

const ProductVariantLeadtime = ({ leadText }) =>
  <div>
    { leadText }
  </div>

ProductVariantLeadtime.propTypes = {
  leadText: PropTypes.string
}

export default compose(
  withState('loading', 'setLoading', true),
  withState('leadtime', 'setLeadtime', null),
  lifecycle({
    async componentDidMount () {
      const leadtime = await getVariantLeadtime(this.props.variant.node.id)
      this.props.setLoading(false)
      this.props.setLeadtime(leadtime)
    }
  }),
  withProps(({ leadtime, loading }) => {
    const leadText = loading
      ? 'Consultando disponibilidade...'
      : leadtime === 0
        ? 'Disponível para envio imediato.'
        : `Disponível para envio em ${leadtime} dias úteis.`

    return { leadText }
  })
)(ProductVariantLeadtime)

const getVariantLeadtime = async variantId => {
  const response = await fetch(`/api/store/leadtime?variantId='${variantId}`)
  const leadtime = await response.json()

  return leadtime
}
