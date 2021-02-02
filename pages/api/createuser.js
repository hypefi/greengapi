// Fake users data
const createuser = [{ firstName: "anas", lastName: "boukharta" }]

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({message: 'user created successfully!'} )
    let First = toUpperCase(firstName);
    let Last = toUpperCase(lastName);
    console.log( First, Last );
  } else {
    // Handle any other HTTP method
    
  }
}
