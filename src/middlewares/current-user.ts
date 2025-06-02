import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { UserRole } from '../types'

interface JwtPayload {
	user_id: string
	role: UserRole
}

interface ReqUser {
	id: string
	role: UserRole
}

declare global {
	namespace Express {
		interface Request {
			user?: ReqUser
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
			const payload = jwt.verify(req.session.jwt, jwtKey) as JwtPayload
			req.user = {
				id: payload.user_id,
				role: payload.role,
			}
		} catch (err) {}

		next()
	}
