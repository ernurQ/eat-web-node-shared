import { Subjects } from '../subjects'

interface Branch {
	id: string
	company_id: string
	name: string
	location: string
	version: number
	deletedAt: string
}

export interface BranchCreatedEvent {
	subject: Subjects.BranchCreated
	data: Branch
}

export interface BranchUpdatedEvent {
	subject: Subjects.BranchUpdated
	data: Branch
}

export interface BranchDeletedEvent {
	subject: Subjects.BranchDeleted
	data: Pick<Branch, 'id' | 'version'>
}
