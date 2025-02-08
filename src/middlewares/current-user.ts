import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { UserRole } from '../types'

interface UserPayload {
	id: string
	role: UserRole
}

declare global {
	namespace Express {
		interface Request {
			user?: UserPayload
		}
	}
}

export const buildCurrentUserMiddleware =
	(jwtKey: string): RequestHandler =>
	(req, _res, next) => {
		if (!req.session?.jwt) {
			return next()
		}

		try {
			const payload = jwt.verify(req.session.jwt, jwtKey) as UserPayload
			req.user = payload
		} catch (err) {}

		next()
	}
