import connectMongo from "../utils/connectMongo";
import disconnrctMongo from "../utils/disconnectMongo";
import MeetupList from "../components/meetups/MeetupList";
import Meetup from "../model/meetupModel";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
    <Head>
      <title>React Meetup</title>
      <meta name="description" content="Beautifull platform to find new and beautifull Meetup places with details" />
    </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

//Get Staticprerender /static props : Fetch the data in a build process and never update even if there is update in server.
export async function getStaticProps() {
  try {
    connectMongo();
    console.log("connected for fetch meetup ✅");

    const meetups = await Meetup.find();

    // disconnrctMongo();
    // console.log("Connection closed 🚫");

    return {
      //write code runs in server
      //Fetch the data from server
      props: {
        meetups: JSON.parse(JSON.stringify(meetups)),
      },
      revalidate: 10, //this wil update the fetching from server every 1 second(we can vary tghe number)
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

//Get serversideprops
// export async function getServerSideProps(context){
//   const req =context.req;
//   const res = context.res;
//   return{
//     props:{
//       meetups: DUMMY_MEETUP
//     }
//   }
// }
export default HomePage;
