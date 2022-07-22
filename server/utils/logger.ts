const pino = require('pino')
const pretty = require('pino-pretty')
const stream = pretty({
  colorize: true,
  ignore: "hostname,pid",
  timestampKey: `time`,
  translateTime: true,

})
const logger = pino(stream)

export default logger