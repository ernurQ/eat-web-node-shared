import { RequestHandler } from 'express'
import { UnauthorizedError } from '../errors'
import { UserRole } from '../types'

export const buildRequireAuthMiddleware =
	(role?: UserRole): RequestHandler =>
	(req, _res, next) => {
		if (!req.user) {
			throw new UnauthorizedError()
		}

		if (role && role !== req.user.role) {
			throw new UnauthorizedError()
		}

		next()
	}
