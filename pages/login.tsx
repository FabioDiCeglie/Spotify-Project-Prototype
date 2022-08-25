import type { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";

const Login: NextPage = ({ providers }: any) => {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Spotify logo"
      />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button className="bg-[#18D860]">Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
