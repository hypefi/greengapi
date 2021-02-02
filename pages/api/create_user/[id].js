export default function userHandler(req, res) {
  const {
    query: { firstName, firstName },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    case 'POST':
      // Update or create data in your database
      res.status(200).json({ firstName, lastName })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
