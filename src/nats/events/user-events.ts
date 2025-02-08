import { Subjects } from '../subjects'

interface User {
	id: string
	name: string
	profilePicture: string
	version: number
}

export interface UserCreatedEvent {
	subject: Subjects.UserCreated
	data: User
}

export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated
	data: Pick<User, 'id'>
}
