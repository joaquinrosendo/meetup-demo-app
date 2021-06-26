import { Link } from 'react-router-dom';
// classes is made up object name, this object will contain classes from css file as properties
import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNavigation;