import { Event } from './types'
import { Stan } from 'node-nats-streaming'

export abstract class Publisher<E extends Event> {
	abstract subject: E['subject']
	private readonly client: Stan

	constructor(client: Stan) {
		this.client = client
	}

	publish(data: E['data']): Promise<void> {
		return new Promise((resolve, reject) => {
			this.client.publish(this.subject, JSON.stringify(data), (err) => {
				if (err) {
					reject(err)
				}
				console.log('Event published to subject', this.subject)
				resolve()
			})
		})
	}
}
