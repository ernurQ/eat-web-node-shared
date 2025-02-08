import { Subjects } from '../subjects'

interface Product {
	id: string
	branchId: string
	name: string
	thumbnail: string
	price: number
	discount: number
	quantity: number
	version: number
}

export interface ProductCreatedEvent {
	subject: Subjects.ProductCreated
	data: Product
}

export interface ProductUpdatedEvent {
	subject: Subjects.ProductUpdated
	data: Product
}

export interface ProductDeletedEvent {
	subject: Subjects.ProductDeleted
	data: Pick<Product, 'id' | 'version'>
}
