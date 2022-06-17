import classes from './search.module.css';
import { BsArrowRightShort } from 'react-icons/bs';
const Search = () => {
	return (
		<>
			<div className={classes.searchcont}>
				<input className={classes.input} type="text" placeholder="Type a message" />
				<div className={classes.ok}>
					<div className={classes.icn}>
						<a>
							<BsArrowRightShort />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Search;
