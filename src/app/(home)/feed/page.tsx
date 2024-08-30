import Container from "@/components/container";
import LeftSide from "@/views/feed/left-side";
import MidSide from "@/views/feed/mid-side";
import RightSide from "@/views/feed/right-side";

const FeedPage = () => {
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

export default FeedPage;
