import React from 'react';
import Image from "next/image";
import {workItemInterface} from "./workItemInterface";
import {number} from "prop-types";
import WorkPopup from "./WorkPopup";

import {activeTask} from "./activeTaskInterface";

interface activityPopupInterface extends activeTask{
    activityItem:activeTask,
    closePop:()=>any;
    changeActiveItem:(item:activeTask)=>void;
}

const ActivityPopup = ({activityItem,closePop,changeActiveItem}:activityPopupInterface) => {

    return (
        <div className={'w-full h-full absolute bg-cover bg-[url(../public/images/fishbg.png)] z-[99999999]'}>
            <div className={'w-full absolute top-[10vh] flex items-center sm:top-[2vw]'}>
                <div className={'dashed-line inline-block w-[10%] h-[1px] border-white sm:hidden'}></div>
                <div className={'mx-[1%] z-[99999] w-[4.8vh] relative h-[4vh] justify-center items-center rounded-full bg-[#FFB800] inline-flex sm:ml-[12%] sm:w-[3.0vw] sm:h-[3.0vw]'} onClick={()=>{closePop()}}>
                    <div className={'w-[1.7vh] cursor-pointer relative h-[1.7vh] sm:w-[2vw] sm:h-[2vw]'}>
                        <Image src={'/images/work_module/work_arrow_back.svg'} layout={'fill'}></Image>
                    </div>
                </div>
                <div className={'dashed-line inline-block w-[7%] h-[1px] border-white sm:hidden'}></div>
                <h2 className={'font-soyuz mx-[1%] text-[3.8vh] w-[60%] text-center sm:text-[2.5vw]'}>{activityItem.workItem.workName}</h2>
                <div className={'dashed-line inline-block w-[26%] h-[1px] border-white sm:hidden'}></div>
            </div>
            <p className={'absolute top-[17vh] ml-[12%] font-josefin font-medium w-[80%] text-[1.9vh] sm:text-[1.3vw] sm:top-[6vw]'}>{activityItem.workItem.description}</p>
            <div className={'w-full absolute top-[47vh] flex items-center sm:ml-[10%] sm:top-[24vw]'}>
                <div className={'dashed-line inline-block w-[10%] h-[1px] border-white sm:hidden'}></div>
                <div className={'mx-[1%] w-[6.5vh] relative h-[6.5vh] justify-center items-center rounded-full inline-flex sm:w-[4vw] sm:h-[4vw]'}>
                    <Image src={'/images/work_module/chiefs/'+activityItem.workItem.chiefName+'.png'} layout={'fill'}></Image>
                </div>
                <h2 className={'font-soyuz mx-[1%] text-[3.0vh] sm:text-[2vw]'}>{activityItem.workItem.chiefName}</h2>
                <div className={'dashed-line inline-block w-[11%] h-[1px] border-white sm:hidden'}></div>
                <button className={'font-soyuz font-semibold text-[#000] vitality-bar-positive w-[30%] inline-block rounded-[1vh] h-[5vh] mx-[1%] sm:h-[3vw] sm:w-auto sm:text-[1.7vw]'}>{activityItem.workItem.task}</button>
                <div className={'dashed-line inline-block w-[6%] h-[1px] border-white sm:hidden'}></div>
            </div>
            <p className={'w-full absolute top-[54vh] text-white text-[2.4vh] font-josefin ml-[12%] font-medium sm:text-[1.5vw] sm:top-[28vw]'}>requirements</p>
            <div className={'w-full absolute top-[57vh] flex items-center sm:top-[30vw]'}>
                <div className={'inline-block w-[10%] h-[1px] border-white sm:hidden'}></div>
                <div className={'w-[80%] h-[4.5vh] sm:w-[78%] sm:ml-[10%]'}>
                    {activityItem.workItem.requirements.dex!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] bg-[#FFB800]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>DEX</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] sm:w-[2vw] sm:h-[2vw] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>{activityItem.workItem.requirements.dex}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.str!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] bg-[#AEC700]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>STR</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] sm:w-[2vw] sm:h-[2vw] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>{activityItem.workItem.requirements.str}</p>
                            </div></div> : <div className={'inline-block'}></div> }

                    {activityItem.workItem.requirements.vit!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] bg-[#EC43FF]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>VIT</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] sm:w-[2vw] sm:h-[2vw] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>{activityItem.workItem.requirements.vit}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.int!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] bg-[#F97A55]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>INT</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] sm:w-[2vw] sm:h-[2vw] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>{activityItem.workItem.requirements.int}</p>
                            </div></div> : <div className={'inline-block'}></div> }

                    {activityItem.workItem.requirements.krm!=0?
                        <div className={'items-center relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] bg-[#595AD0]'}>
                            <p className={'align-middle inline-block w-[38%] ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>KRM</p>
                            <div className={'w-[20%] relative z-[9999] h-[40%] inline-block'}>
                                <Image src={'/images/work_module/work_stat_arrow.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[2.0vh] sm:w-[2vw] sm:h-[2vw] h-[2.0vh] bg-[#403F40] justify-center inline-flex items-center rounded-full'}>
                                <p className={'align-middle inline-block ml-[10%] text-[1.5vh] sm:text-[1.5vw]'}>{activityItem.workItem.requirements.krm}</p>
                            </div></div> : <div className={'inline-block'}></div> }
                    {activityItem.workItem.requirements.skills?.map(item=>{
                        return(
                            <div key={item.name} className={'w-[4vh]  align-middle h-[4vh] sm:h-[3vw] sm:w-[3vw] relative inline-flex mx-[1%] w-[25%] h-[4vh] sm:h-[3vw] rounded-full mt-[0.5vh] border-4 border-[#'+item.color+'] sm:align-top'}>
                                <Image src={'/images/work_module/skills/'+item.name.replace(/\s/g, '_')+'.svg'} layout={'fill'}></Image>
                            </div>

                        );

                    })}
                </div>
                <div className={'w-full absolute top-[10vh] flex items-center sm:w-[90%] sm:left-[8%] sm:mt-[2vw] sm:pl-[1vw]'}>
                    <div className={'inline-block relative ml-[10%] w-[20%] h-[3vh] sm:h-[3vw] sm:ml-0'}>
                        <Image src={'/images/work_module/profit.svg'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-[15%] h-[4vh] sm:h-[3vw] bg-[#737373] relative inline-flex items-center rounded-full right-[-1vw] sm:w-[25%] sm:h-[3vw]'}>
                        <p className={'absolute left-[5%] text-white font-josefin text-[3vh] uppercase sm:text-[2.5vw]'}>+{activityItem.workItem.profit}</p>
                        <div className={'absolute w-[4vw] scale-[2] h-[4vw] right-0 sm:w-[2.2vw] sm:h-[2.2vw]'}>
                            <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <button className={'font-soyuz right-[8vw] h-[5vh] w-[30vw] top-[64vh] absolute font-semibold text-[#000] green-gradient inline-block rounded-full sm:text-[2vw] sm:left-[3vw] sm:h-[3vw] sm:bottom-[3vw] sm:top-auto'} onClick={()=>{changeActiveItem(activityItem);alert('Job succesfully changed');closePop()}}>change job</button>
            {/*<div className={'dashed-line absolute inline-block w-[17vw] top-[54vh] left-[36vw] h-[1px] border-white'}></div>*/}
            {/*<div className={'dashed-line absolute inline-block w-[5vw] top-[67vh] left-[48vw] h-[1px] border-white'}></div>*/}
            {/*<div className={'dashed-line rotate-90 absolute inline-block w-[30vw] top-[57vh] left-[38vw] h-[1px] border-white'}></div>*/}

        </div>
    );
};

export default ActivityPopup;