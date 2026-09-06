import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const NavBack = () => {
    return (
        <nav>
            <Link to="/"><Button>Back</Button></Link>
        </nav>
    )
};

export default NavBack;