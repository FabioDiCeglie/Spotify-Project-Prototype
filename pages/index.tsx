import type { NextPage } from "next";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <SideBar />
        {/* Center */}
      </main>

      {/* <div> Player</div> */}
    </div>
  );
};

export default Home;
