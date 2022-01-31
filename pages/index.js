import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-15-40-pm-1575998170.png?crop=1xw:1xh;center,top&resize=980:*",
		address: "Some address 5, 1234 Some City",
		description: "This is our first meetup!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-14-03-pm-1575998085.png?crop=1xw:1xh;center,top&resize=980:*",
		address: "Some address 5, 1234 Some City",
		description: "This is our second meetup!",
	},
];

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>We Meets</title>
				<meta
					name="description"
					content="Demo meetup scheduler with NextJS and React"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />;
		</Fragment>
	);
};

// Static generation
export const getStaticProps = async () => {
	let meetups;
	try {
		const client = await MongoClient.connect(
			"mongodb+srv://Buqs:WW15qbBWTIWYNf81@cluster0.6ewtx.mongodb.net/nextJsMeetupsDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		const db = client.db("nextJsMeetupsDatabase");
		const meetupsCollection = db.collection("meetups");

		meetups = await meetupsCollection.find().toArray();

		client.close();
	} catch (error) {
		meetups = DUMMY_MEETUPS;
		console.log(error.message);
	}

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10, // Internally static generation (refreshes sit every 10 secs)
	};
};

// // Server-side rendering
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   // Fetch from any API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;
