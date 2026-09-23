import {Card, CardFooter, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Link } from "react-router-dom";
import cv from "@/assets/cv.pdf";

const AboutCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle><h4>About Me</h4></CardTitle>
            </CardHeader>
            <CardContent>
                <p>Bachelor's degree in Food Nutrition and Dietetics <i>University of Nairobi</i>, with a growing interest in health technology and its application in improving public health outcomes and contribution to innovative health solutions.</p>
                <a href={cv} download>Download CV</a>   
            </CardContent>
            <CardFooter>
                <Link to="/nutrition">View Nutrition Projects</Link>
            </CardFooter>
        </Card>
    );
}

export default AboutCard;