import MeetupDetail from "../../components/meetups/meetupdetail";
import connectMongo from "../../utils/connectMongo";
import Meetup from "../../model/meetupModel";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <Fragment>
    <Head>
        <title>{props.meetups.title}</title>
        <meta name="description" content={props.meetups.description }/>
    </Head>
      <MeetupDetail
        image={props.meetups.image}
        title={props.meetups.title}
        address={props.meetups.address}
        description={props.meetups.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  connectMongo();

  const rawMeetups = await Meetup.find({}, { _id: 1 });

  const meetups = JSON.parse(JSON.stringify(rawMeetups));

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id } })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  connectMongo();

  const rawMeetups = await Meetup.find({ _id: id });

  const meetups = JSON.parse(JSON.stringify(rawMeetups));

  const meet = Object.assign.apply(null, meetups);

  return {
    props: {
      meetups: meet,
    },
  };
}
export default MeetupDetails;
