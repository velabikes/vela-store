import Field from 'components/form/Field'
import Control from 'components/form/Control'

const ControlField = (props) =>
  <div>
    <Field
      component={Control}
      {...props}
    />
  </div>

export default ControlField
