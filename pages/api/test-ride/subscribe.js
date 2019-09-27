import { createCard } from 'lib/pipefy'

const handle = (req, res) => {
  const { name, email, phone, city, height } = req.body

  const card = createCard({
    pipe: 968118,
    title: `${name}`,
    fields_attributes: [
      { field_id: 'nome', field_value: name },
      { field_id: 'email', field_value: email },
      { field_id: 'telefone', field_value: phone },
      { field_id: 'cidade', field_value: city },
      { field_id: 'height', field_value: height }
    ]
  })

  console.log(card)
  res.end('OK')
}

export default handle
