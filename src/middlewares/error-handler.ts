import { ErrorRequestHandler } from 'express'
import { BaseError } from '../errors'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof BaseError) {
		res.status(err.status).send(err.serializeError())
		return
	}

	const internalServerError = new BaseError(500, 'Something went wrong.')
	res.status(500).send(internalServerError.serializeError())
}
