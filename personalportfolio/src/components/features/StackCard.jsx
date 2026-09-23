import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Dialog, DialogContent,DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@base-ui/react";

const StackCard = () => {
  const technologies = ['JavaScript', 'Python', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML', 'CSS', 'Git', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'];
  const developingSkills = ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'TensorFlow', 'PyTorch'];
    
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary-dark"><h4>Technologies</h4></CardTitle>
            </CardHeader>
            <CardContent>
                <h4>Languages</h4>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
                <p>Currently developing skills on:</p>
                <ol>{developingSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}</ol>
                <Dialog>
                    <DialogTrigger>
                        <Button className="bg-blue-500 text-white px-4 py-2 rounded">My Stack</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Technologies</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <ul style={{ listStyleType: "disc", paddingLeft: 0 }}>
                                {technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}

export default StackCard;