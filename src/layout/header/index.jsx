import { Link } from "react-router-dom";
import "./main.scss"
import Icon from "../../assets/icon";
import Search1 from "../../components/search/search";

const Header = () => {
    return (
        <>
            <div className='container'>
                <div className="navbar">
                    <div className="navbar_logo">
                        <Link to="/"> <Icon /> </Link>
                    </div>
                    <div className="navbar_search">
                        <Search1/>
                    </div>
                    <div className="navbar_links">
                        <Link to="/"> Home </Link> 
                        <Link to="/category"> Category </Link> 
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;