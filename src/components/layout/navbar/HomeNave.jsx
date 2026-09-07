import { Home } from "lucide-react";
import { Link, useLocation } from "react-router";
const HomeNave = () => {
    const location = useLocation()
    return (
        <>
            <Link to={'/'} className={`action action-home ${location.pathname == "/" ? "active": ""}`}>
                <Home className="action-icon action-home-icon" />
            </Link>
        </>
    );
};

export default HomeNave;