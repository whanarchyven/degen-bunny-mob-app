import React, {useState} from 'react';
import Image from "next/image";
import {bunnyInterface} from "./bunnyInterface";
import {workItemInterface} from "./workItemInterface";
import {number} from "prop-types";
import styled from "styled-components";
import WorkPopup from "./WorkPopup";
import ActivityPopup from "./ActivityPopup";


const StatbarPositive = styled.div<{width: string,color:string}>`
  width: ${props => props.width};
  display: inline-block;
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  height: 100%;
  background: ${props=> props.color}
`

const StatbarNegative = styled.div<{width: string}>`
  width: ${props => props.width};
  display: inline-block;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  height: 100%;
  background: #404040;
  box-shadow: inset 0px 1.63985px 1.63985px #1B1B1B;
`

const StatIndicator = styled.div<{margin: string,color:string}>`
  left: ${props => props.margin};
  background-color: ${props=> props.color};
`


interface activityItemInterface extends workItemInterface{
    progress:number
}

interface activityInterface extends bunnyInterface{
    changeActiveTask:(item:activityItemInterface)=>void
    increaseActiveTask:(increase:number)=>void
    goToWorkScreen:(item:string)=>void
}

const Activity = ({bunny,changeActiveTask,goToWorkScreen}:activityInterface) => {
    const [openPop,setOpenPop]=useState(false);
    const[activityInPop,setActivityInPop]=useState({
        workItem:{
            id:1,
            chiefName:'SCP-123',
            workName:'seed carrot',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            task:'walk 10km',
            profit:35,
            goal:10,
            color:'#000000',
            requirements: {
                str:0,
                dex:3,
                vit:0,
                int:0,
                krm:0,
                skills:[
                    {
                        name:'butcher',
                        image:'/asddjasf',
                        color:'F97A55'
                    },

                ]
            },
        },
        progress:0,
    });
    if(bunny.activeTask!=undefined){
        return (
            <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                <h2 className={'text-white absolute font-soyuz text-[4.6vh] top-[19vh] left-[14vw]'}>my activity</h2>
                <div className={'w-[28px] h-[28px] right-[16vw] top-[21vh] absolute'}>
                    <Image src={'/images/activity_icon.svg'} layout={'fill'}></Image>
                </div>
                <div className={'absolute left-[12%] w-[72%] top-[29vh] h-[50vh]'}>
                    <div className={'w-full h-[13vh] relative activity-tab rounded-[1vh]'}>
                        <p className={'absolute text-white font-soyuz text-[3vh] left-[3vw] top-[-2.2vh] inline-block'}>{bunny.activeTask.workItem.workName}</p>
                        <div className={'w-[80%] mx-[10%] mt-[6.3vh] items-center relative inline-flex h-[2vw]'}>
                            <StatbarPositive color={bunny.activeTask.workItem.color} width={((bunny.activeTask.progress/bunny.activeTask.workItem.goal)*100)+'%'} ></StatbarPositive>
                            <StatbarNegative width={(100-(bunny.activeTask.progress/bunny.activeTask.workItem.goal)*100)+'%'} ></StatbarNegative>
                            <StatIndicator className={'text-[1.5vh] top-[-3.5vh] absolute block'} margin={(((bunny.activeTask.progress/bunny.activeTask.workItem.goal)*100)-5)+'%'} color={'transparent'}>{bunny.activeTask.progress}km</StatIndicator>
                            <StatIndicator className={'border-4 border-white w-[4.5vw] absolute rounded-full h-[4.5vw]'} margin={(((bunny.activeTask.progress/bunny.activeTask.workItem.goal)*100)-5)+'%'} color={bunny.activeTask.workItem.color}></StatIndicator>
                        </div>
                        <p className={'absolute text-white font-josefin text-[1.9vh] left-[3.3vw] bottom-[0.5vh] inline-block'}><strong>Goal:</strong> {bunny.activeTask.workItem.goal}km</p>
                        <div className={'bg-opacity-50 absolute bottom-[-2vh] w-[22.5%] h-[4vh] bg-[#FF825E] inline-flex items-center rounded-full right-[-1vw]'}>
                            <p className={'absolute left-[5%] text-white font-josefin text-[3vh] uppercase'}>+{bunny.activeTask.workItem.profit}</p>
                            <div className={'absolute w-[4vw] scale-[2] h-[4vw] right-0'}>
                                <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full overflow-y-scroll h-[33.7vh] mt-[3.3vh] relative rounded-[1vh]'}>
                        {bunny.work?.map(item=>{
                            if(item.workItem.id!=bunny.activeTask?.workItem.id){
                                return(
                                    <div className={'w-full h-[13vh] relative mt-[4vh] border-[1px] border-white rounded-[1vh]'} onClick={()=>{}}>
                                        <p className={'backdrop-blur-xl absolute text-white font-soyuz text-[3vh] left-[3vw] top-[-2.7vh] inline-block'}>{item.workItem.workName}</p>
                                        <div className={'w-[80%] mx-[10%] mt-[6.3vh] items-center relative inline-flex h-[2vw]'}>
                                            <StatbarPositive color={item.workItem.color} width={((item.progress/item.workItem.goal)*100)+'%'} ></StatbarPositive>
                                            <StatbarNegative width={(100-(item.progress/item.workItem.goal)*100)+'%'} ></StatbarNegative>
                                            <StatIndicator color={'transparent'} className={'text-[1.5vh] top-[-3.5vh] absolute block'} margin={(((item.progress/item.workItem.goal)*100)-5)+'%'}>{item.progress}km</StatIndicator>
                                            <StatIndicator color={item.workItem.color} className={'border-4 border-white w-[4.5vw] absolute rounded-full h-[4.5vw]'} margin={(((item.progress/item.workItem.goal)*100)-5)+'%'}></StatIndicator>
                                        </div>
                                        <p className={'absolute text-white font-josefin text-[1.9vh] left-[3.3vw] bottom-[0.5vh] inline-block'}><strong>Goal:</strong> {item.workItem.goal}km</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                {openPop?<ActivityPopup activityItem={activityInPop} closePop={()=>{setOpenPop(false)}} changeActiveItem={changeActiveTask} workItem={activityInPop.workItem} progress={activityInPop.progress}></ActivityPopup>:<div></div>}
            </div>
        );
    }
    else{
        return (
            <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                <h2 className={'text-white absolute font-soyuz text-[4.6vh] top-[19vh] left-[2vw] w-[96vw] text-center'}>No active jobs, see the work module</h2>
                <button className={'font-soyuz right-[5vw] text-[5.6vh] leading-[70%] h-[7vh] w-[90vw] top-[64vh] absolute font-semibold text-[#000] green-gradient inline-block rounded-full'} onClick={()=>{goToWorkScreen('job')}}>check jobs</button>
            </div>
        );
    }
};

export default Activity;