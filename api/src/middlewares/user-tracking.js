const userTrackingMiddleware = async (req, res, next) => {
  if (req.ip !== '::1') {
    const ip = req.ip.replace('::ffff:', '')
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const result = await response.json()

    console.log(result)
  }

  next()
}

module.exports = userTrackingMiddleware
