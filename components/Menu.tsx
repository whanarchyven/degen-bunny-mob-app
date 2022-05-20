import React, {useState} from 'react';
import Image from "next/image";
import Container from "./Container";
import Bunny from "./Bunny";

const Menu = () => {
    const [currentTab,setCurrentTab]=useState('home');
    const [balance,setBalance]=useState(135);

    return (
        <div className={'w-full h-full sm:w-[35vw] sm:mx-[32.5vw]'}>

            <div className={'w-full h-[80vh] overflow-x-hidden fixed top-0 sm:w-[35vw] sm:h-[95vh]'}>
                <Bunny currentTab={currentTab} balance={balance} changeBalance={setBalance} changeTab={setCurrentTab}></Bunny>
            </div>
            <div className={'justify-around flex items-center fixed bottom-0 sm:w-[35vw] z-[999] w-full h-[10vh] bg-[#A8C500]'}>
                <div className={'cursor-pointer align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('history')}}>
                    {currentTab=='history'?<Image src={'/images/history_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/history_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'cursor-pointer align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('equipment')}}>
                    {currentTab=='equipment'?<Image src={'/images/equipment_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/equipment_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'cursor-pointer align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('home')}}>
                    {currentTab=='home'||currentTab=='inventory'?<Image src={'/images/home_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/home_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'cursor-pointer align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('market')}}>
                    {currentTab=='market'?<Image src={'/images/market_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/market_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'cursor-pointer align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('job')}}>
                    {currentTab=='job'?<Image src={'/images/job_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/job_button.svg'} layout={'fill'}></Image>}
                </div>
            </div>
            <div className={'w-[30vw] h-[10vw] fixed top-[8vw] right-[6vw] sm:w-[8vw] sm:h-[3vw] sm:right-[33vw] sm:top-[1vh]'}>
                <div className={'absolute top-0 w-full h-full rounded-full wallet-shape-down'}>

                </div>
                <div className={'absolute top-0 w-full h-full rounded-full wallet-shape-up'}>

                </div>
                <div className={'absolute top-0 flex justify-around justify-items-center items-center w-full h-full'}>
                    <div className={'w-[8vw] relative h-[8vw] sm:w-[2vw] sm:h-[2vw]'}>
                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-[8vw] relative h-[8vw] sm:w-[2vw] sm:h-[2vw]'}>
                        <p className={'w-full text-white text-center font-josefin font-light text-[20px] sm:text-[1.5vw]'}>{balance}</p>
                    </div>
                    <div className={'w-[8vw] relative h-[5vw] sm:w-[2vw] sm:h-[2vw]'}>
                        <Image src={'/images/wallet_icon.svg'} layout={'fill'}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;