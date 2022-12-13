//new meetup is a form where user enter data in textfield and send it
//So we are detecting POST method in order to get enttered data and send it to Backend.


import connectMongo from '../../utils/connectMongo'
import Meetup from '../../model/meetupModel';

// /api/new-meetup
// POST /api/new-meetup

/**
 * 
 * @param {import ('next') NextApiRequest} req 
 * @param {import ('next') NextApiResponse} res 
 */

async function handler(req, res) {

  try{

    //connecting to Database
    await connectMongo(); 
    console.log("Connected ✅");
  
    //Creating document in database.
    const meetup = await Meetup.create(req.body)
    console.log("Document Created ✅");
    // res.json(meetup)
  
      // res.status(201).json({ message: 'Meetup inserted.!' });
    res.json(meetup)


  } catch(error){
    res.json(error)
    console.log(error);
  }

  }

export default handler;

