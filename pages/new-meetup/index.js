import Head from "next/head";

import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetUpPage = () => {
	const router = useRouter();

	const addMeetupHandler = async (enteredMeetupData) => {
		try {
			const response = await fetch("/api/new-meetup", {
				method: "POST",
				body: JSON.stringify(enteredMeetupData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();

			router.push("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Fragment>
			<Head>
				<title>Schedule New Meetup</title>
				<meta
					name="description"
					content="Schedule your own meetups and create amazing networking opportunities"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</Fragment>
	);
};

export default newMeetUpPage;
