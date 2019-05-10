import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import routes from './routes'

class App {
  public app: express.Application

  constructor () {
    // run the express instance and store in app
    this.app = express()
    this.config()
  }

  private config (): void {
    // Serve static contents from public directory
    this.app.use(express.static(path.join(__dirname, '..', 'public')))
    // enable cors by adding cors middleware
    this.app.use(cors())
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // add routes
    this.app.use('/api/v1', routes)
    // Serve index.html from public directory if no other routs matched.
    // This is required to support single page application
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    })
  }
}

export default new App().app
