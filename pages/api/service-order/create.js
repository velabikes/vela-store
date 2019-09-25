import { createCustomer, createServiceOrder } from 'lib/omie'
import pipefy from 'lib/pipefy'

const handle = async (req, res) => {
  const customer = await createCustomer({
    extId: 123,
    name: 'teste da silva'
  })

  const serviceOrder = await createServiceOrder({
    customerId: customer.id,
    extId: 17149242
  })

  const card = await pipefy.createCard({
    input: {
      pipe_id: '1053749',
      title: 'name',
      fields_attributes: [
        { field_id: 'nome', field_value: 'name' },
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
}

export default handle
