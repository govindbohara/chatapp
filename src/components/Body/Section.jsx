import Header from './header';
import PhoneBody from './PhoneBody';
import classes from './section.module.css';

const Section = () => {
	return (
		<main className={classes.main}>
			<section className={classes.section}>
				<div className={classes.phone}>
					<div className={classes.gap}></div>
					<div className={classes.phonedetails}>
						<Header />
						<PhoneBody />
					</div>
				</div>
				<article className={classes.article}>
					<h2 className={classes.head}>Simple Booking</h2>
					<p className={classes.para}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
						quibusdam numquam ut aliquam consequuntur! Velit itaque quia, deleniti
						molestiae explicabo, ipsam voluptatibus veritatis laborum, facere eaque
						fuga non.
					</p>
				</article>
			</section>
		</main>
	);
};
export default Section;
