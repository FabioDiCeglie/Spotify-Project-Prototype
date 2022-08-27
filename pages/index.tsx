import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import Center from "../components/Center";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <SideBar />
        <Center />
      </main>

      {/* <div> Player</div> */}
    </div>
  );
};

export default Home;
