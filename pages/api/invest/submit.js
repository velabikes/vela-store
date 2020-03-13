import { createCard } from 'lib/pipefy'

const handle = async (req, res) => {
  const { name, email, phone, message, profile, value } = req.body
  console.log(name)
  const card = await createCard({
    pipe_id: '1228252',
    title: `${name}`,
    fields_attributes: [
      { field_id: 'what_s_the_customer_s_name', field_value: name },
      { field_id: 'what_s_the_customer_s_email', field_value: email },
      { field_id: 'telefone', field_value: phone },
      { field_id: 'perfil', field_value: profile },
      { field_id: 'valor', field_value: value },
      { field_id: 'do_you_have_any_additional_information', field_value: message }
    ]
  })

  console.log(card)
  res.end('OK')
}

export default handle
