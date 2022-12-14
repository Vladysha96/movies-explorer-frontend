import './Logo.css';
import logo from '../../images/logo.svg';
import { useHistory } from 'react-router-dom';
import { pages } from '../../utils/constants';

function Logo() {
    const history = useHistory();

    function handleClick() {
        history.push(pages.Main);
    }

    return (
        <img className='logo' alt='Логотип' src={logo} onClick={handleClick} />
    );
};

export default Logo;
