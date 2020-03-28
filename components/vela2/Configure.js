import ModelSelector from './ModelSelector'
import TireSelector from './TireSelector'
import ColorSelector from './ColorSelector'

const Configure = () => {
  return (
    <div className='configure'>
      <ColorSelector />
      <ModelSelector />
      <TireSelector />
      <style jsx>{`
      .configure {
        padding: 1em;
      }
      `}</style>
    </div>
  )
}

export default Configure
