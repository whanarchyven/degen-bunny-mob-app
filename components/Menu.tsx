import React, {useState} from 'react';
import Image from "next/image";
import Container from "./Container";


const Menu = () => {
    const [currentTab,setCurrentTab]=useState('home');
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
                    {currentTab=='home'?<Image src={'/images/home_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/home_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('market')}}>
                    {currentTab=='market'?<Image src={'/images/market_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/market_button.svg'} layout={'fill'}></Image>}
                </div>
                <div className={'align-middle relative inline-block w-[18%] h-[8vh]'} onClick={()=>{setCurrentTab('job')}}>
                    {currentTab=='job'?<Image src={'/images/job_button_active.svg'} layout={'fill'}></Image>:<Image src={'/images/job_button.svg'} layout={'fill'}></Image>}
                </div>
            </div>
            <div className={'w-full h-[90vh] absolute top-0'}>
                <Container currentTab={currentTab}></Container>
            </div>
        </div>
    );
};

export default Menu;