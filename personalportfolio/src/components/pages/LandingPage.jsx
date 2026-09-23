import Namecard from "../features/NameCard";
import StackCard from "../features/StackCard";
import ConnectCard from "../features/ConnectCard";

const LandingPage = () => {
    return (
        <div className="m-5 p-5 flex flex-col gap-5 justify-center items-center">
            <div>
                <Namecard />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <StackCard />
                <ConnectCard />
            </div>
        </div>
    );
}

export default LandingPage;