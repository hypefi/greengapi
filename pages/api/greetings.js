// Fake users data
const greetings = [{ id: 1, first_name: "anas" }, { id: 2, first_name:"john" }, { id: 3 }]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(greetings)
}
