import { createCustomer, createServiceOrder } from 'lib/omie'

const handle = async (req, res) => {
  const customer = await createCustomer({
    extId: 123,
    name: 'teste da silva'
  })

  const serviceOrder  = await createServiceOrder({
    customerId: customer.extId,
    extId: 17149242
  })

  console.log(serviceOrder)
}

export default handle