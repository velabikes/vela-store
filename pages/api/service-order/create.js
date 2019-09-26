import { putCustomer, createServiceOrder, findCustomer } from 'lib/omie'
import { createCard } from 'lib/pipefy'

const handle = async (req, res) => {
  const { name, doc, description } = req.body

  if (!name || !doc || !description) return res.end('Missing fields.')

  const existingCustomer = await findCustomer({ doc })

  const customer = await putCustomer({
    ...existingCustomer && { id: existingCustomer.id },
    ...!existingCustomer && { extId: new Date().valueOf() },
    name
  })

  const serviceOrder = await createServiceOrder({
    customerId: customer.id,
    extId: new Date().valueOf(),
    description
  })

  const card = await createCard({
    input: {
      pipe_id: '1053749',
      title: `#${serviceOrder.number} - ${name}`,
      fields_attributes: [
        { field_id: 'omie', field_value: serviceOrder.number },
        { field_id: 'nome', field_value: name },
        { field_id: 'email', field_value: email },
        { field_id: 'servico', field_value: description }
      ]
    }
  })

  res.end('ok')
}

export default handle
