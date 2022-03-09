 const pushParams = (route, prop , remove = null) => {
    let params = {...route.query}
    let propname = Object.keys(prop)[0]
    params[propname] = prop[propname]
    if (remove != null) params[remove] = null
    let path = route.path
    return setParms(params , path)
  }



  const setParms = (params , path) => new Promise(resolve => {
    history.pushState(
      {},
      null,
      path +
      '?' +
      Object.keys(clearNullValues(params))
        .map(key => {
          return (
            encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
          )
        })
        .join('&')
    )
    window.scrollTo({ top: 0, behavior: 'smooth' });
    resolve(true)
  })


  export const clearNullValues = (obj) => {
    let clone = { ...obj }
    Object.keys(clone).forEach((key) => {
      let k = key 
      clone[k] === null || '' ? delete clone[k] : ''
    })
    return clone
  }
  export default pushParams

