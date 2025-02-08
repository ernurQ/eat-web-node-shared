import { Subjects } from '../subjects'

interface Company {
	id: string
	version: number
	name: string
}

export interface CompanyCreatedEvent {
	subject: Subjects.CompanyCreated
	data: Company
}

export interface CompanyUpdatedEvent {
	subject: Subjects.CompanyUpdated
	data: Company
}

export interface CompanyDeletedEvent {
	subject: Subjects.CompanyDeleted
	data: Pick<Company, 'id' | 'version'>
}
