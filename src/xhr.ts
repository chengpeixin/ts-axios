import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(hname => {
    if (data === null && hname.toLowerCase() === 'content-type') {
      delete headers[hname]
    } else {
      request.setRequestHeader(hname, headers[hname])
    }
  })
  request.send(data)
}
