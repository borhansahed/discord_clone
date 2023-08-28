import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p className="text-4xl text-blue-500 font-bold">Hello Discord Clone</p>
      <Button>Hello</Button>

      <UserButton afterSignOutUrl="/" />
    </>
  );
}
