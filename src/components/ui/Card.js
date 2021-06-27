import classes from './Card.module.css';

function Card(props) {
    return (
        /* children is a special prop which every component receives by default
            children always holds the content which is passed between the JSX component tags <Card>content</Card> */
        <div className={classes.card}>{props.children}</div>
    )
}

export default Card;