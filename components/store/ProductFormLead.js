import { compose, withState, lifecycle, withProps, branch } from 'recompose'

const ProductFormLead = ({ leadText }) =>
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
        ? 'Envio Imediato'
        : 'Disponivel em ${leatime} dias.'

    return { leadText }
  })
)(ProductFormLead)

const getVariantLeadtime = async variantId => {
  const response = await fetch('/api/store/leadtime?variantId='+variantId)
  const leadtime = await response.json()

  return leadtime
}
