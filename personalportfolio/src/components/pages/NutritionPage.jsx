import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import { Card, CardContent, CardDescription} from "@/components/ui/card";
import nascop1 from "@/assets/NASCOP_ME_Courses_-Hs (1).pdf";
import nascop2 from "@/assets/NASCOP_ME_Courses_-Hs.pdf";

const NutritionPage = () => {
    return (
        <div>
            <Card>
                <CardDescription>
                    <p>Certifications and Training</p>
                </CardDescription>
                <Carousel className="relative w-full max-w-4xl mx-auto">
                    <CarouselContent>

                        <CarouselItem className="basis-full">
                        <div className="p-2">
                            <Card>
                            <CardContent className="flex items-center justify-center p-2">
                                <iframe
                                src={`${nascop1}#toolbar=0`}
                                className="w-full h-[500px]"
                                title="NASCOP Certificate 1"
                                />
                            </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>

                        <CarouselItem className="basis-full">
                        <div className="p-2">
                            <Card>
                            <CardContent className="flex items-center justify-center p-2">
                                <iframe
                                src={`${nascop2}#toolbar=0`}
                                className="w-full h-[500px]"
                                title="NASCOP Certificate 2"
                                />
                            </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>

                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </Card>
            <div>
                <Link to="/"><Button>Back</Button></Link>
            </div>
        </div>
    );
}

export default NutritionPage;