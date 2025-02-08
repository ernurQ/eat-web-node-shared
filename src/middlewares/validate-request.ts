import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import { BadRequestError } from '../errors'

export const buildValidateRequestMiddleware =
	(): RequestHandler => (req, _res, next) => {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			const firstError = errors.array().at(0)!
			throw new BadRequestError(firstError.msg)
		}

		next()
	}
