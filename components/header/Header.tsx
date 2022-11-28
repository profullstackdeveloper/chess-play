import React from "react";
import { useRouter } from "next/router";
import Logo from "../logo/Logo";
import { ContextType, Web3Context } from "../../context/Web3Context";

export default function Header() {
  const router = useRouter();

  const [walletInfo, setWalletInfo] = React.useState<any>("");

  const { conectedWallet }: ContextType = React.useContext(Web3Context);

  React.useEffect(() => {
    if (conectedWallet) {
      setWalletInfo(conectedWallet);
    } else {
      setWalletInfo(localStorage.getItem("connectedWallet"));
    }
  }, [conectedWallet]);

  return router.pathname === "/" ? (
    <div className='md:mt-[50px] md:ml-[90px] mt-[20px] ml-[50px]'>
      <Logo></Logo>
    </div>
  ) : (
    <div className='w-full h-[73.5px] px-[100px]'>
      <div className='w-full h-full flex items-center justify-between border-b border-solid border-b-header-underline'>
        <Logo></Logo>
        <div className='flex'>
          <div className='px-2 py-2 bg-blue2 rounded-l-[4px] text-white font-semibold'>
            0.04 ETH
          </div>
          <div className='px-4 py-2 bg-white rounded-r-[4px] text-black font-semibold'>
            0xa41...91214
          </div>
        </div>
      </div>
    </div>
  );
}
