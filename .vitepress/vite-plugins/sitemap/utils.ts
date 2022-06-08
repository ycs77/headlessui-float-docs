import { resolve } from 'path'
import type { ResolvedOptions } from './types'

export function getResolvedPath(file: string, resolvedOptions: ResolvedOptions) {
  return resolve(process.cwd(), resolvedOptions.outDir, file)
}
