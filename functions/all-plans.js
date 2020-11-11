exports.handler = async function (event, context) {
	const { user } = context.clientContext
	if (!user) {
		return { statusCode: 404 }
	}

	return {
		statusCode: 200,
		body: JSON.stringify(process.env),
	}
}
