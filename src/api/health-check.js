export default function handler(req, res) {
	res.status(200).json({
		message: 'On line',
		timestamp: Date.now(),
	})
}
