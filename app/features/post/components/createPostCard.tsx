import { Card, CardContent } from "shared/shadcn/card";
import CreatePostForm from "./createPostForm";

export default function HomeHeaderCard() {
  return (
    <>
      <Card className="bg-[#1d232a] border-0  shadow-lg">
        <CardContent>
          <CreatePostForm />
        </CardContent>
      </Card>
    </>
  );
}
