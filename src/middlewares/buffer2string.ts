import { MiddlewareCallback } from '.'
import GleeMessage from '../lib/message.js'

export default (message: GleeMessage, next: MiddlewareCallback) => {
  if (message.payload instanceof Buffer) {
    message.payload = message.payload.toString()
  }

  next()
}
