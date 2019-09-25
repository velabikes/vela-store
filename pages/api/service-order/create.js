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

  console.log(serviceOrder)

  const card = await createCard({
    input: {
      pipe_id: '1053749',
      title: `asdfasdfasfsd`,
      fields_attributes: [
        { field_id: 'nome', field_value: name },
        { field_id: 'cpf', field_value: 'document' },
        { field_id: 'telefone', field_value: 'phone' },
        { field_id: 'email', field_value: 'email' },
        { field_id: 'cep', field_value: 'zip' },
        { field_id: 'numero', field_value: 'number' },
        { field_id: 'complemento', field_value: 'complement' },
        { field_id: 'servico', field_value: 'service' }
      ]
    }
  })

  console.log(card)

  res.end('ok')
}

export default handle
