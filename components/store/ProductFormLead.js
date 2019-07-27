import { compose, withState, lifecycle } from 'recompose'

const ProductFormLead = ({ loading, leadtime, variant }) =>
  <div>
    { loading ? 'Carregando disponibilidade...' : `Disponivel em ${leadtime} dias.` }
  </div>

export default compose(
  withState('loading', 'setLoading', true),
  withState('leadtime', 'setLeadtime', null),
  lifecycle({
    async componentDidMount() {
      const response = await fetch('/api/store/leadtime?variantId='+this.props.variant.node.id)
      const leadtime = await response.json()
      this.props.setLoading(false)
      this.props.setLeadtime(leadtime)
    }
  })
)(ProductFormLead)
