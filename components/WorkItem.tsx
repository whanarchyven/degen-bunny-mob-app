import React from 'react';

import {workItemInterface} from "./workItemInterface";

import Image from "next/image";


const WorkItem = ({workItem}:workItemInterface) => {
    return (
        <div className={'w-[80%] mx-[10%] h-[12vh] rounded-[1vh] relative bg-[#000]'}>
            <div className={'absolute top-0 rounded-[1vh] w-full h-full'}>
                <Image src={'/images/work_module/work_place/'+workItem.workName.replace(/\s/g, '_')+'.png'} layout={'fill'} className={'rounded-[1vh]'}></Image>
            </div>
            <div className={'absolute rounded-[1vh] top-0 w-full h-full opacity-[0.75] bg-[#403F40]'}>

            </div>
            <div className={'absolute top-0 rounded-l-[1vw] w-[98%] h-full'}>
                <Image src={'/images/work_module/work_overlay.svg'} layout={'fill'} className={'rounded-l-[1vh]'}></Image>
            </div>
            <div className={'absolute top-[-15px] left-[-15px] w-[50px] h-[50px]'}>
                <Image src={'/images/work_module/chiefs/'+workItem.chiefName+'.png'} layout={'fill'}></Image>
            </div>
            <h3 className={'absolute left-[15%] text-white font-soyuz text-[3.5vh] leading-[125%]'}>{workItem.workName}</h3>
            <p className={'absolute left-[5%] text-white font-josefin text-[2vh] bottom-[4.7vh] leading-[125%]'}>requirements</p>
            <div className={'absolute w-[80%] h-[4.5vh] bottom-[0vh]'}>
                {workItem.requirements.dex!=0?
                    <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#FFB800]'}>
                        <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>DEX</p>
                        <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                            <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                            <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{workItem.requirements.dex}</p>
                        </div></div> : <div className={'inline-block'}></div> }
                {workItem.requirements.str!=0?
                    <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#AEC700]'}>
                        <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>STR</p>
                        <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                            <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                            <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{workItem.requirements.str}</p>
                        </div></div> : <div className={'inline-block'}></div> }

                {workItem.requirements.vit!=0?
                    <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#EC43FF]'}>
                        <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>VIT</p>
                        <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                            <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                            <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{workItem.requirements.vit}</p>
                        </div></div> : <div className={'inline-block'}></div> }
                {workItem.requirements.int!=0?
                    <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#F97A55]'}>
                        <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>INT</p>
                        <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                            <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                            <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{workItem.requirements.int}</p>
                        </div></div> : <div className={'inline-block'}></div> }

                {workItem.requirements.krm!=0?
                    <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#595AD0]'}>
                        <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>KRM</p>
                        <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                            <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                        </div>
                        <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                            <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{workItem.requirements.krm}</p>
                        </div></div> : <div className={'inline-block'}></div> }
                {workItem.requirements.skills?.map(item=>{
                    return(
                        <div key={item.name} className={'w-[4vh]  align-middle h-[4vh] relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] border-4 border-[#'+item.color+']'}>
                            <Image src={'/images/work_module/skills/'+item.name.replace(/\s/g, '_')+'.svg'} layout={'fill'}></Image>
                        </div>

                    );

                })}
            </div>

            <div className={'absolute bottom-[-2vh] w-[22.5%] h-[4vh] bg-[#737373] inline-flex items-center rounded-full right-[-1vw]'}>
                <p className={'absolute left-[5%] text-white font-josefin text-[3vh] uppercase'}>+{workItem.profit}</p>
                <div className={'absolute w-[4vw] scale-[2] h-[4vw] right-0'}>
                    <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                </div>
            </div>

        </div>
    );
};

export default WorkItem;