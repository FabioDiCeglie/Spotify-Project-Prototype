import { ChevronDownIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Center: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow">
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            // @ts-ignore
            src={session?.user?.image}
            alt=""
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Center;
