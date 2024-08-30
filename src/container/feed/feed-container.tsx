import Container from "@/components/container";
import LeftSide from "./left-side";
import MidSide from "./mid-side";
import RightSide from "./right-side";

const FeedContainer = () => {
  return (
    <Container>
      <div className="h-[1000px] grid grid-cols-12 gap-x-6">
        <div className="col-span-3">
          <LeftSide />
        </div>
        <div className="col-span-6">
          <MidSide />
        </div>
        <div className="col-span-3">
          <RightSide />
        </div>
      </div>
    </Container>
  );
};

export default FeedContainer;
