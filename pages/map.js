import LocationsMap from 'components/locations/LocationsMap'

const places = [
  {
    name: 'metro faria lima',
    address: 'Farial Lima, 9999 - sao paulo sp',
    pos: { lat: -23.567429054521625, lng: -46.693267822265625 },
    hours: [
      { day: 'Dom', opening: false },
      { day: 'Seg', opening: false },
      { day: 'Ter', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sáb', opening: true, openTime: '09', closeTime: '18' }
    ]
  },
  {
    name: 'Loja Vela',
    address: 'Farial Lima, 929 - sao paulo sp',
    pos: { lat: -23.567429054521625, lng: -46.593267822265625 },
    hours: [
      { day: 'Dom', opening: false },
      { day: 'Seg', opening: false },
      { day: 'Ter', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sáb', opening: true, openTime: '09', closeTime: '18' }
    ]
  },
  {
    name: 'Algum lugar qualquer',
    address: 'Farial Lima, 9912 - sao paulo sp',
    pos: { lat: -23.667429054521625, lng: -46.593267822265625 },
    hours: [
      { day: 'Dom', opening: false },
      { day: 'Seg', opening: false },
      { day: 'Ter', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'Sáb', opening: true, openTime: '09', closeTime: '18' }
    ]
  }
]

const LocationsMapPage = () =>
  <div>
    <LocationsMap locations={places} />
    <style jsx>{`
      div {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `}</style>
  </div>

export default LocationsMapPage
