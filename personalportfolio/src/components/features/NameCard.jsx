import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cv from "@/assets/cv.pdf";
import { LuArrowRight } from "react-icons/lu";

const NameCard = () => {
    return (
        <Card className="p-5 border-l-5 border-primary-dark">
            <CardHeader>
                <p className="text-xs text-secondary-dark">👋 Welcome</p>
                <CardTitle className="text-2xl font-bold"><h1>Hi, I'm <span className="text-primary-dark">Sheryl</span>.</h1></CardTitle>
                <CardDescription>Junior Data Science | Software Engineer</CardDescription>
            </CardHeader>
            <CardContent>
                <p>I design and build data-driven, full-stack web applications with MERN. Developing expertise in Data Science, AI and Machine Learning.</p>
                <p>Bachelor's degree in Food Nutrition and Dietetics,<i><b>University of Nairobi</b></i>, with a growing interest in health technology and its application in improving public health outcomes and contribution to innovative health solutions.</p>
                <a className="text-secondary-dark hover:underline" href={cv} download>Download CV</a>
            </CardContent>
            <CardFooter>
                <div className="flex flex-row gap-5 justify-start items-center">
                    <Link to="/nutrition" className="text-secondary-dark underline hover:text-primary-dark">Nutrition Projects </Link>
                    <Button className="bg-primary-dark text-white hover:bg-primary-light">
                        <Link to="/projects" className="flex flex-row items-center justify-center gap-2">View My Work<LuArrowRight/></Link>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default NameCard;