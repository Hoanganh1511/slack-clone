import Container from "@/components/container";
import LeftSide from "@/views/feed/left-side";
import MidSide from "@/views/feed/mid-side";
import RightSide from "@/views/feed/right-side";

const FeedPage = () => {
  return (
    <div className="container">
      <div className="h-[1000px] pt-[20px] grid grid-cols-12 gap-x-[24px]">
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
    </div>
  );
};

export default FeedPage;
