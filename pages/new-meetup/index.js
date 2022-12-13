//domain.com/meet-up
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    const router = useRouter();

    async function  onAddHandler( enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
        const data = await response.json();
        console.log(data);

        router.replace('/')
    }

    return( 
    <Fragment>
    <Head>
        <title>Adding New Meetup</title>
        <meta name='description' content='You can add a new places which is not exists so let others can explore' />
    </Head>
    <NewMeetupForm onAddMeetup = {onAddHandler}/>

    </Fragment>
    )
}

export default NewMeetupPage;