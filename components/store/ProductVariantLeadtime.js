import { compose, withState, lifecycle, withProps, branch } from 'recompose'

const ProductVariantLeadtime = ({ leadText }) =>
  <div>
    { leadText }
  </div>

export default compose(
  withState('loading', 'setLoading', true),
  withState('leadtime', 'setLeadtime', null),
  lifecycle({
    async componentDidMount() {
      const leadtime = await getVariantLeadtime(this.props.variant.node.id)
      this.props.setLoading(false)
      this.props.setLeadtime(leadtime)
    }
  }),
  withProps(({ leadtime, loading }) => {
    const leadText = loading
      ? 'Consultando disponibilidade...'
      : leadtime === 0
        ? 'Disponivel para envio imediato.'
        : `Disponivel em ${leadtime} dias.`

    return { leadText }
  })
)(ProductVariantLeadtime)

const getVariantLeadtime = async variantId => {
  const response = await fetch('/api/store/leadtime?variantId='+variantId)
  const leadtime = await response.json()

  return leadtime
}
