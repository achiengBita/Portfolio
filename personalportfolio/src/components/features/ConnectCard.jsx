import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail, AiFillThunderbolt} from "react-icons/ai"

const ConnectCard = () => {
    return (
        <Card className="m-5">
            <CardHeader>
                <CardTitle className="text-primary-dark">Connect with Me</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    <li><AiFillMail /><a href="mailto:bitasheryl@gmail.com">bitasheryl@gmail.com</a></li>
                    <li><AiFillInstagram />instagram.com/example</li>
                    <li><AiFillGithub />github.com/example</li>
                    <li><AiFillThunderbolt />kaggle.com/example</li>
                    <li><AiFillLinkedin />linkedin.com/example</li>
                </ul>
            </CardContent>
        </Card>
    );
}

export default ConnectCard;