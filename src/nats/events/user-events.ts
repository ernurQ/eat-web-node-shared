import { Subjects } from '../subjects'

interface User {
	id: string
	fullName: string
	profilePicture: string
	version: number
	deletedAt: string | null
}

export interface UserCreatedEvent {
	subject: Subjects.UserCreated
	data: User
}

export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated
	data: User
}
