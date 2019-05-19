import { AxiosRequestConfig, AxiosPromise, AxiosResponce } from '../types'

import { parseHeaders } from '../helpers/headers'

import { createError } from '../helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config
    const request: XMLHttpRequest = new XMLHttpRequest()
    if (responseType) request.responseType = responseType
    if (timeout) request.timeout = timeout
    request.open(method.toUpperCase(), url!, true)
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4 || request.status === 0) return
      const responseHeaders: object = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText

      const response: AxiosResponce = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }
    Object.keys(headers).forEach(hname => {
      if (data === null && hname.toLowerCase() === 'content-type') {
        delete headers[hname]
      } else {
        request.setRequestHeader(hname, headers[hname])
      }
    })
    request.send(data)
    function handleResponse(response: AxiosResponce): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request faild with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
