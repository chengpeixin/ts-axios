import axios, { AxiosError } from '../../src/index'


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const arr = new Int32Array([21, 31])
// console.log(arr)
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })


// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json',
//     'Accept': 'application/json,text/plain,*/*'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })



// const getdata = async () => {
//   const data = await axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//       a: 1,
//       b: 2
//     }
//   })
//   console.log(data)
// }

// getdata()

// axios({
//   method: 'post',
//   url: '/base/post',
//   responseType: 'json',
//   data: {
//     a: 3,
//     b: 4
//   }
// }).then((res) => {
//   console.log(res)
// })


// axios({
//   method: 'get',
//   url: '/error/get1'
// }).then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e)
// })


// axios({
//   method: 'get',
//   url: '/error/get'
// }).then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e)
// })

// setTimeout(function () {
//   axios({
//     method: 'get',
//     url: '/error/get'
//   }).then(res => {
//     console.log(res)
//   }).catch(e => {
//     console.log(e)
//   })
// }, 5000)



// axios({
//   method: 'get',
//   url: '/error/timeout',
//   timeout: 2000
// }).then(res => {
//   console.log(res)
// }).catch((e: AxiosError) => {
//   console.log(e.message)
//   console.log(e.config)
//   console.log(e.code)
//   console.log(e.request)
//   console.log(e.response)
// })

