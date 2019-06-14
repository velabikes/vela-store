import NodeCache from 'node-cache'

const cacheTime = 60 * 60 * 5 // 5 hours
const cache = new NodeCache({
  stdTTL: cacheTime,
  checkperiod: cacheTime * 0.2
})

export const flushCache = () => cache.flushAll()

export const getFromCache = (key, storeFunction) => {
  const data = cache.get(key)
  if (data) return Promise.resolve({ from: 'cache', data })

  return storeFunction().then(result => {
    cache.set(key, result)

    return { from: 'request', data: result }
  })
}


export default cache
