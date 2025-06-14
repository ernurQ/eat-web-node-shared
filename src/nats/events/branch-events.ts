import { Subjects } from '../subjects'

interface Branch {
	id: string
	sellerId: string
	name: string
	location: string
	version: number
	deletedAt: string | null
	locationGeo: {
		type: string
		coordinates: [number, number]
	}
}

export interface BranchApprovedEvent {
	subject: Subjects.BranchApproved
	data: {
		id: string
		sellerId: string
		name: string
		location: string
		locationGeo: {
			type: string
			coordinates: [number, number]
		}
	}
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
