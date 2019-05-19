import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  console.log(
    '------------------------------------------------------------------------------------'
  )
  console.log([instance])
  console.log(context)
  console.log(
    '------------------------------------------------------------------------------------'
  )
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()
console.log([axios])
// console.log(axios)

export default axios
