import { Message, Stan } from 'node-nats-streaming'
import { Event } from './types'

export abstract class Listener<E extends Event> {
	abstract subject: E['subject']
	abstract queueGroupName: string
	abstract onMessage(data: E['data'], msg: Message): void

	private client: Stan
	protected ackWait = 1000 * 5

	constructor(client: Stan) {
		this.client = client
	}

	subscriptionOptions() {
		return this.client
			.subscriptionOptions()
			.setManualAckMode(true)
			.setAckWait(this.ackWait)
			.setDeliverAllAvailable()
			.setDurableName(this.queueGroupName)
	}

	listen() {
		const subscription = this.client.subscribe(
			this.subject,
			this.queueGroupName,
			this.subscriptionOptions(),
		)

		subscription.on('message', (msg: Message) => {
			console.log(`Message received: ${this.subject}/${this.queueGroupName}`)

			const parsedData = this.parseMessage(msg)
			this.onMessage(parsedData, msg)
		})
	}

	parseMessage(msg: Message) {
		const data = msg.getData()
		return typeof data === 'string'
			? JSON.parse(data)
			: JSON.parse(data.toString('utf-8'))
	}
}
