import fs from 'fs-extra'
import Cache from '..'

let cache: Cache | null = null

afterEach(() => {
  if (cache) fs.removeSync(cache.directory)
})

test('caches values', async () => {
  const key = 'MY_KEY'
  const value = 'MY_VALUE'
  cache = new Cache()
  expect(await cache.get(key)).toBe(null)
  await cache.set(key, value)
  expect(await cache.get(key)).toBe(value)

  // removing the cache directory causes errors
  fs.removeSync(cache.directory)
  expect(await cache.get(key)).toBe(undefined)

  // removing the cache directory causes errors
  // but we recover from those kinds of errors
  fs.removeSync(cache.directory)
  expect(await cache.set(key, value)).toBe(value)
})
