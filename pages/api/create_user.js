// Fake users data
const createuser = [{ firstName: "anas", lastName: "boukharta" }]

export default function handler(req, res) {

  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body);
    if(req.body.firstName==='' || req.body.firstName===null || req.body.firstName===undefined || req.body.lastName==='' || req.body.lastName===null || req.body.lastName===undefined){
      //throw 'firstName is empty!'; 
      res.status(400).send('One of the names is empty!')
    }

    res.status(200).json(req.body.firstName.toUpperCase() + " " + req.body.lastName.toUpperCase() )

  } else {
    // Handle any other HTTP method
    res.status(400).send('Wrong method, please use POST')
    
  }
}
