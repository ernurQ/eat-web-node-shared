import { BaseError } from './base-error'

export class BadRequestError extends BaseError {
	constructor(message = 'Bad request.') {
		super(400, message)
	}
}

export class UnauthorizedError extends BaseError {
	constructor(message = 'Unauthorized.') {
		super(401, message)
	}
}

export class ForbiddenError extends BaseError {
	constructor(message = 'Forbidden.') {
		super(403, message)
	}
}

export class NotFoundError extends BaseError {
	constructor(message = 'Not found.') {
		super(404, message)
	}
}

export class ConflictError extends BaseError {
	constructor(message = 'Conflict.') {
		super(409, message)
	}
}
