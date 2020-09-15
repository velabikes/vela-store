import { NextIcon } from 'components/Icons'
import { velaGreen } from 'style/colors'

const ParkingButton = () =>
  <div className='parkingButton'>
    <a href='http://www.bikeandpark.com.br'>Bike & Park</a>
    <style jsx>{`
      .parkingButton{
          text-align: left;
          margin-top: 1em;
      }
    `}</style>
  </div>
export default ParkingButton
