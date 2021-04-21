import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const Header = ({ title, onAdd, showAdd }) => {

	const location = useLocation()
	
	return (
	  <header className='header'>
			<h1>{title}</h1> 
			{location.pathname === '/' && (
				<div>
				<Button text={showAdd ? <FaMinus /> : <FaPlus />} color={showAdd ? '#d2252f' : '#10a023'} onClick={onAdd} />
				</div>
			)}
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
