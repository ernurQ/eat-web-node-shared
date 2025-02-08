export class BaseError extends Error {
	status: number
	message: string

	constructor(status: number, message: string) {
		super(message)
		Object.setPrototypeOf(this, BaseError.prototype)
		this.status = status
		this.message = message
	}

	serializeError(): { status: number; message: string } {
		return {
			status: this.status,
			message: this.message,
		}
	}
}
