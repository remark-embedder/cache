import path from 'path'
import fs from 'fs-extra'
import cacheManager from 'cache-manager'
import type {Cache as CMCache, Store} from 'cache-manager'
import fsStore from 'cache-manager-fs'

const TTL = Number.MAX_SAFE_INTEGER

class Cache {
  cache: CMCache
  directory: string

  constructor(
    directory = path.join(
      process.cwd(),
      'node_modules/.cache/@remark-embedder/cache',
    ),
  ) {
    this.directory = directory
    this.ensureCacheDirExists()
    this.cache = cacheManager.caching({
      store: fsStore as Store,
      ttl: TTL,
      options: {
        ttl: TTL,
        path: this.directory,
      },
    })
  }

  ensureCacheDirExists() {
    fs.ensureDirSync(this.directory)
  }

  get(key: string): Promise<string | undefined> {
    return new Promise(resolve => {
      this.cache.get(
        key,
        (err: NodeJS.ErrnoException | undefined, res: string) => {
          if (err?.code === 'ENOENT') {
            this.ensureCacheDirExists()
          }
          resolve(err ? undefined : res)
        },
      )
    })
  }

  set(key: string, value: string): Promise<string | undefined> {
    return new Promise(resolve => {
      this.cache.set(
        key,
        value,
        {ttl: TTL},
        (err: NodeJS.ErrnoException | undefined) => {
          if (err?.code === 'ENOENT') {
            this.ensureCacheDirExists()
            resolve(this.set(key, value))
          } else {
            // istanbul ignore next because I'm not sure how to reproduce this situation
            resolve(err ? undefined : value)
          }
        },
      )
    })
  }
}

export default Cache
