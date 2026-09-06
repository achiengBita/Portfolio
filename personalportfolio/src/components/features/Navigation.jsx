import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navigation = () => {
    return (
        <nav>
            <Link to="/projects"><Button>Projects</Button></Link>
        </nav>
    )
};

export default Navigation;