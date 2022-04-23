import React, {useState} from 'react';
import Image from "next/image";
import Container from "./Container";
import Bunny from "./Bunny";

const Menu = () => {
    const [currentTab,setCurrentTab]=useState('home');
    const [balance,setBalance]=useState(135);

    return (
        <div className={'w-full h-full'}>
            <div className={'justify-around flex items-center fixed bottom-0 w-full h-[10vh] bg-[#A8C500]'}>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('history')}}>
                    {currentTab=='history'?<Image src={'/images/history_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/history_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('equipment')}}>
                    {currentTab=='equipment'?<Image src={'/images/equipment_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/equipment_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('home')}}>
                    {currentTab=='home'||currentTab=='inventory'?<Image src={'/images/home_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/home_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('market')}}>
                    {currentTab=='market'?<Image src={'/images/market_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/market_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('job')}}>
                    {currentTab=='job'?<Image src={'/images/job_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/job_button.svg'} layout={'fill'}></Image>}
                </div>
            </div>
            <div className={'w-full h-[90vh] overflow-x-hidden absolute top-0'}>
                <Bunny currentTab={currentTab} balance={balance} changeBalance={setBalance}></Bunny>
            </div>
            <div className={'w-[30vw] h-[10vw] absolute top-[14vw] right-[6vw]'}>
                <div className={'absolute top-0 w-full h-full rounded-full wallet-shape-down'}>

                </div>
                <div className={'absolute top-0 w-full h-full rounded-full wallet-shape-up'}>

                </div>
                <div className={'absolute top-0 flex justify-around justify-items-center items-center w-full h-full'}>
                    <div className={'w-[8vw] relative h-[8vw]'}>
                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-[8vw] relative h-[8vw]'}>
                        <p className={'w-full text-white text-center font-josefin font-light text-[20px]'}>{balance}</p>
                    </div>
                    <div className={'w-[8vw] relative h-[5vw]'}>
                        <Image src={'/images/wallet_icon.svg'} layout={'fill'}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;