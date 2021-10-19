import {MongoClient} from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
				"mongodb+srv://Buqs:WW15qbBWTIWYNf81@cluster0.6ewtx.mongodb.net/nextJsMeetupsDatabase?retryWrites=true&w=majority"
      );

			const db = client.db();
      const meetupsCollection = db.collection("meetups");
      
      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close;
      res.status(201).json({message: 'Meetup inserted'});
    } catch (error) {
      res.status(400).json({message: 'Error inserting meetup!'});
      console.log(error.message);
    }
    
  }
}

export default handler;