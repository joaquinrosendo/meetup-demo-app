import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {/* meetups is array of objects, and meetup is a single object in meetups array */}
            {props.meetups.map(meetup =>
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />)}
        </ul>
    );
}

export default MeetupList;