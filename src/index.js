import 'app-module-path/register'
import logger from 'winston'
import app from './app'
import config from '../config'

const serverUp = ( app ) => {
	const server = app.listen( config.port )
	process.on( 'unhandledRejection', ( reason, p ) =>
		logger.error( 'Unhandled Rejection at: Promise ', p, reason )
	)
	server.on( 'listening', () =>{
		logger.info( 'ResMan Application started on http://%s:%d', config.host,  config.port )
        console.log(config.host)}
	)
}
serverUp( app )