import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="left_a_right">
                <div className="left">掲示板</div>
                <div className="right"><Link to="/createThread">スレッドをたてる</Link></div>
            </div>
        </header>
    )
}

export default Header;