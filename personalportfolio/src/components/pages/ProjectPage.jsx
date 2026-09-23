import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ProjectPage = () => {
    return (
        <div>
            <div>
                <Link to="/"><Button>Back</Button></Link>
            </div>
        </div>
    );
}

export default ProjectPage;