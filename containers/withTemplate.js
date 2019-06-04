import { compose, withProps } from 'recompose'

export default compose(
  withProps(({ router }) => {
    const { handle } = router.query

    try {
      const Template = require(`../templates/${handle.toLowerCase()}.js`).default

      return { Template }
    } catch (e) {
      return { Template: () => null }
    }
  })
)
