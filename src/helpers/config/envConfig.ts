export const getBaseUrl = ():string => {
  return 'http://157.230.240.97:9999/api/v1'
}
export const getNodeIstiak = ():boolean => {
    return process.env.ISTIAK?true:false
    
}