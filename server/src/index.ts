/* eslint-disable no-console */
import app from './web-app/app'

const port = process.env.PORT || 3000

// Start the server
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`web server is listening on ${port}`)
})
