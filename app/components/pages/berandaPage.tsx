import { Button } from "~/common/shadcn/button";
import HomeHeaderCard from "../cards/homeHeaderCard";

export default function BerandaPage() {

  return (
    <div className="flex  gap-4 px-4 mt-2 justify-center">
      <div className="flex flex-col gap-4 w-5/6 md:w-4/6">
        <HomeHeaderCard />
      </div>
    </div>
  );
}
