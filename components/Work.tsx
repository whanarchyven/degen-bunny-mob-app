import React, {useState} from 'react';
import WorkItem from "./WorkItem";
import WorkPopup from "./WorkPopup";

const Work = () => {
    const [workRadio,setWorkRadio]=useState('work');
    const[workInPop,setWorkInPop]=useState(        {
        id:1,
        chiefName:'SCP-123',
        workName:'seed carrot',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        task:'walk 10km',
        profit:35,
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
    });
    const [openPop,setOpenPop]=useState(false);

    const workItems=[
        {
            id:1,
            chiefName:'SCP-123',
            workName:'seed carrot',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            task:'walk 10km',
            profit:35,
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
        {
            id:2,
            chiefName:'SCP-124',
            workName:'mine coal',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            task:'slava ukraine',
            profit:30,
            requirements: {
                str:2,
                dex:0,
                vit:0,
                int:0,
                krm:0,
                skills:[

                ]
            },
        },
        {
            id:3,
            chiefName:'SCP-125',
            workName:'cut weeds',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            task:'slava ukraine',
            profit:50,
            requirements: {
                str:0,
                dex:0,
                vit:0,
                int:5,
                krm:0,
                skills:[

                ]
            },
        },
        {
            id:4,
            chiefName:'SCP-125',
            workName:'cut weeds',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            task:'slava ukraine',
            profit:50,
            requirements: {
                str:0,
                dex:0,
                vit:0,
                int:5,
                krm:0,
                skills:[

                ]
            },
        }

    ];

    const closePop=()=>{
        setOpenPop(!openPop);
    }

    return (
        <div className={'w-full h-full bg-[url(../public/images/fishbg.png)] bg-cover'}>
            <h2 className={'absolute top-[17vh] left-[13vw] text-white font-soyuz text-[5vh] leading-[100%]'}>Works</h2>
            <div className={'absolute top-[23vh] left-[13vw] w-[31vw] h-[3.5vh] border-2 border-white rounded-full'}>
                {workRadio=='daily'?<div className={'font-josefin inline-block align-top font-bold rounded-l-full h-full text-[2vh] text-center w-[50%] work-active-tab'} onClick={()=>{setWorkRadio('daily')}}>Daily</div>:<div className={'font-josefin inline-block align-top h-full text-[2vh] font-bold rounded-l-full text-center w-[50%]'} onClick={()=>{setWorkRadio('daily')}}>Daily</div>}
                {workRadio=='work'?<div className={'font-josefin inline-block align-top font-bold rounded-r-full h-full text-[2vh] text-center w-[50%] work-active-tab'} onClick={()=>{setWorkRadio('work')}}>Work</div>:<div className={'font-josefin inline-block align-top h-full text-[2vh] font-bold rounded-r-full text-center w-[50%]'} onClick={()=>{setWorkRadio('work')}}>Work</div>}
            </div>
            <div className={'overflow-y-scroll absolute w-[90%] top-[30vh] h-[50vh] mx-[5%]'}>
                {workItems.map(item=>{
                    return(
                        <div key={item.id} className={'w-full my-[3.3vh]'} onClick={()=>{closePop();setWorkInPop(item)}}>
                            <WorkItem workItem={item}></WorkItem>
                        </div>
                    );
                })}
            </div>
            {openPop?<WorkPopup closePop={closePop} workItem={workInPop}></WorkPopup>:<div></div>}
        </div>
    );
};

export default Work;