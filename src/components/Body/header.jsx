import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import classes from './header.module.css';
const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.namedetails}>
				<a className={classes.arrow}>
					<AiOutlineArrowLeft />
				</a>
				<div className={classes.imgcont}>
					<img src="/photos/avatar.jpg" alt="avatar" />
				</div>
				<div className={classes.detail}>
					<p className={classes.name}>Govind Bohara</p>
					<p className={classes.avaiable}>Avaiable to Walk</p>
				</div>
			</div>
			<div>
				<a className={classes.dot}>
					<BiDotsVerticalRounded className={classes.doticon} />
				</a>
			</div>
		</div>
	);
};
export default Header;
