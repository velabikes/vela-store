import NodeCache from 'node-cache'

const cacheTime = 60 * 60 * 5 // 5 hours
const cache = new NodeCache({
  stdTTL: cacheTime,
  checkperiod: cacheTime * 0.2
})

export const flushCache = () => cache.flushAll()

export const getFromCache = async (key, storeFunction) => {
  const list = cache.get(key)
  if (list && list.length > 0) return Promise.resolve({ from: 'cache', data: list })

  return { from: 'request', data: await storeFunction() }
}


export default cache
