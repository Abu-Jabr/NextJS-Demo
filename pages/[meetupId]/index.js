import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetUpDetails = (props) => {
	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta
					name="description"
					content={props.meetupData.description}
				/>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				alt={props.meetupData.title}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</Fragment>
	);
};

// Needed for dynamic pages with ssg function
export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://Buqs:WW15qbBWTIWYNf81@cluster0.6ewtx.mongodb.net/nextJsMeetupsDatabase?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	const db = client.db("nextJsMeetupsDatabase");
	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: 'blocking',
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		"mongodb+srv://Buqs:WW15qbBWTIWYNf81@cluster0.6ewtx.mongodb.net/nextJsMeetupsDatabase?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	const db = client.db("nextJsMeetupsDatabase");
	const meetupsCollection = db.collection("meetups");

	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});

	selectedMeetup._id = selectedMeetup._id.toString();

	client.close();

	return {
		props: {
			meetupData: selectedMeetup,
		},
	};
};

export default MeetUpDetails;
