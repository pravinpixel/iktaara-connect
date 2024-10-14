import dynamic from "next/dynamic";

const HomePageComponent = dynamic(() => import("@/views/components/home"));
export default function Home() {
  return (
    <div>
      <HomePageComponent />
    </div>
  );
}
