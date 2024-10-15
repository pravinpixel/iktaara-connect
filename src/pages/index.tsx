import dynamic from "next/dynamic";

const HomePageComponent = dynamic(() => import("@/components/section/home"));
export default function Home() {
  return <HomePageComponent />;
}
