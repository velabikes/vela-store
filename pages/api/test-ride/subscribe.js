import { createCard } from 'lib/pipefy'

const handle = (req, res) => {
  const { name, email, phone, city, height } = req.body
  console.log(name)
  const card = await createCard({
    pipe: '968118',
    title: `${name}`,
    fields: [
      { field_id: 'what_s_the_company_s_name', field_value: name },
      { field_id: 'what_s_the_customer_s_email', field_value: email },
      { field_id: 'what_s_the_customer_s_phone', field_value: phone },
      { field_id: 'cep', field_value: city },
      { field_id: 'altura_cm', field_value: height }
    ]
  })

  console.log(card)
  res.end('OK')
}

export default handle
