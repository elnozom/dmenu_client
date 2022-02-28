 const pushParams = (params, path) => {
    return new Promise(resolve => {
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
  }

  export default pushParams