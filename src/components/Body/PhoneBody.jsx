import classes from './phonebody.module.css';
import { BsCircle } from 'react-icons/bs';
import Search from './search';

const PhoneBody = () => {
	return (
		<>
			<div className={classes.sender}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className={classes.sender}>
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div className={classes.recieverimage}>
				<img src="/photos/dog-image-1.jpg" alt="dog" />
				<img src="/photos/dog-image-2.jpg" alt="dog" />
				<img src="/photos/dog-image-3.jpg" alt="dog" />
			</div>
			<div className={classes.reciever}>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
			</div>
			<div className={classes.reciever}>
				<p>Lorem ipsum dolor?</p>
			</div>
			<div className={classes.sender}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. saepe voluptatum
					aliquid!
				</p>
			</div>
			<div className={classes.price}>
				<div className={classes.walk}>
					<a className={classes.icn}>
						<BsCircle />
					</a>
					<p>30 minutes walk</p>
				</div>
				<div>
					<p className={classes.pricedetail}>$29</p>
				</div>
			</div>
			<div className={classes.price}>
				<div className={classes.walk}>
					<a className={classes.icn}>
						<BsCircle />
					</a>
					<p>1 hour walk</p>
				</div>
				<div>
					<p className={classes.pricedetail}>$49</p>
				</div>
			</div>
			<Search />
		</>
	);
};
export default PhoneBody;
