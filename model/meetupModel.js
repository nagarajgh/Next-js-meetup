import{Schema, model, models} from "mongoose"

const meetupScema = new Schema({
    title: String,
    image: String,
    address: String,
    description:String
});

const Meetup = models.Meetup || model('Meetup', meetupScema);

export default Meetup;