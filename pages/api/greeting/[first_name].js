export default function greetingHandler(req, res) {
  const {
    query: { first_name },
    method,
  } = req

  console.log(req.query);

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ first_name: `Hello ${first_name} !` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, first_name: first_name || `Hello ${first_name}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
