export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'Head'
  | 'options'
  | 'Options'
  | 'psot'
  | 'Post'
  | 'put'
  | 'Put'
  | 'patch'
  | 'Patch'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
