import React from 'react';
import Image from "next/image";
import {workItemInterface} from "./workItemInterface";
import {number} from "prop-types";
import WorkPopup from "./WorkPopup";

interface activityItemInterface extends workItemInterface{
    progress:number
}


interface activityPopupInterface extends activityItemInterface{
    activityItem:activityItemInterface,
    closePop:()=>any;
    changeActiveItem:(item:activityItemInterface)=>void;
}

const ActivityPopup = ({activityItem,closePop,changeActiveItem}:activityPopupInterface) => {

    return (
        <div className={'w-full h-full absolute bg-cover bg-[url(../public/images/fishbg.png)] z-[99999999]'}>
            <div className={'w-full absolute top-[10vh] flex items-center'}>
                <div className={'dashed-line inline-block w-[10%] h-[1px] border-white'}></div>
                <div className={'mx-[1%] z-[99999] w-[4.8vh] relative h-[4vh] justify-center items-center rounded-full bg-[#FFB800] inline-flex'} onClick={()=>{closePop()}}>
                    <div className={'w-[1.7vh] relative h-[1.7vh]'}>
                        <Image src={'/images/work_module/work_arrow_back.svg'} layout={'fill'}></Image>
                    </div>
                </div>
                <div className={'dashed-line inline-block w-[7%] h-[1px] border-white'}></div>
                <h2 className={'font-soyuz mx-[1%] text-[3.8vh] w-[60%] text-center'}>{activityItem.workItem.workName}</h2>
                <div className={'dashed-line inline-block w-[26%] h-[1px] border-white'}></div>
            </div>
            <p className={'absolute top-[17vh] ml-[12%] font-josefin font-medium w-[80%] text-[1.9vh]'}>{activityItem.workItem.description}</p>
            <div className={'w-full absolute top-[47vh] flex items-center'}>
                <div className={'dashed-line inline-block w-[10%] h-[1px] border-white'}></div>
                <div className={'mx-[1%] w-[6.5vh] relative h-[6.5vh] justify-center items-center rounded-full inline-flex'}>
                    <Image src={'/images/work_module/chiefs/'+activityItem.workItem.chiefName+'.png'} layout={'fill'}></Image>
                </div>
                <h2 className={'font-soyuz mx-[1%] text-[3.0vh]'}>{activityItem.workItem.chiefName}</h2>
                <div className={'dashed-line inline-block w-[11%] h-[1px] border-white'}></div>
                <button className={'font-soyuz font-semibold text-[#000] vitality-bar-positive w-[30%] inline-block rounded-[1vh] h-[5vh] mx-[1%]'}>{activityItem.workItem.task}</button>
                <div className={'dashed-line inline-block w-[6%] h-[1px] border-white'}></div>
            </div>
            <p className={'w-full absolute top-[54vh] text-white text-[2.4vh] font-josefin ml-[12%] font-medium'}>requirements</p>
            <div className={'w-full absolute top-[57vh] flex items-center'}>
                <div className={'inline-block w-[10%] h-[1px] border-white'}></div>
                <div className={'w-[80%] h-[4.5vh] '}>
                    {activityItem.workItem.requirements.dex!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#FFB800]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>DEX</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{activityItem.workItem.requirements.dex}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.str!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#AEC700]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>STR</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{activityItem.workItem.requirements.str}</p>
                            </div></div> : <div className={'inline-block'}></div> }

                    {activityItem.workItem.requirements.vit!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#EC43FF]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>VIT</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{activityItem.workItem.requirements.vit}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.int!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#F97A55]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>INT</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{activityItem.workItem.requirements.int}</p>
                            </div></div> : <div className={'inline-block'}></div> }

                    {activityItem.workItem.requirements.krm!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] bg-[#595AD0]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh]'}>KRM</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh]'}>{activityItem.workItem.requirements.krm}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.skills?.map(item=>{
                        return(
                            <div key={item.name} className={'w-[4vh]  align-middle h-[4vh] relative inline-flex mx-[1%] w-[25%] h-[4vh] rounded-full mt-[0.5vh] border-4 border-[#'+item.color+']'}>
                                <Image src={'/images/work_module/skills/'+item.name.replace(/\s/g, '_')+'.svg'} layout={'fill'}></Image>
                            </div>

                        );

                    })}
                </div>
                <div className={'w-full absolute top-[10vh] flex items-center'}>
                    <div className={'inline-block relative ml-[10%] w-[20%] h-[3vh]'}>
                        <Image src={'/images/work_module/profit.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-[15%] h-[4vh] bg-[#737373] relative inline-flex items-center rounded-full right-[-1vw]'}>
                        <p className={'absolute left-[5%] text-white font-josefin text-[3vh] uppercase'}>+{activityItem.workItem.profit}</p>
                        <div className={'absolute w-[4vw] scale-[2] h-[4vw] right-0'}>
                            <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <button className={'font-soyuz right-[8vw] h-[5vh] w-[30vw] top-[64vh] absolute font-semibold text-[#000] green-gradient inline-block rounded-full'} onClick={()=>{changeActiveItem(activityItem)}}>Change job</button>
            {/*<div className={'dashed-line absolute inline-block w-[17vw] top-[54vh] left-[36vw] h-[1px] border-white'}></div>*/}
            {/*<div className={'dashed-line absolute inline-block w-[5vw] top-[67vh] left-[48vw] h-[1px] border-white'}></div>*/}
            {/*<div className={'dashed-line rotate-90 absolute inline-block w-[30vw] top-[57vh] left-[38vw] h-[1px] border-white'}></div>*/}

        </div>
    );
};

export default ActivityPopup;