import React, {useState} from 'react';
import Home from "./Home";

interface containerProps{
    currentTab:string,
}

interface equipment{
    item:{
        image:string,
        name:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
    }
}

import {bunnyInterface} from "./bunnyInterface";


const Container = ({currentTab}:containerProps) => {

    // const suka:bunnyInterface={
    //     bunny:{id:0,
    //         name:'test bunny2',
    //         vitality:3,
    //         crt:2,
    //         stamina:2,
    //         lvl:3,
    //
    //         stats:{
    //             str:1,
    //             dex:1,
    //             vit:1,
    //             int:1,
    //             krm:1,
    //         },
    //
    //         base:{
    //             rabbit:'Blue_bunny40',
    //             overhead:undefined,
    //             mouth:'Happy_m30',
    //             eyes:'Hurts15',
    //             bg:undefined,
    //             faces:undefined,
    //         },
    //
    //         equipment:{
    //             rightHand:{
    //                 image:'Machine_r5',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //             leftHand:{
    //                 image:'Axe_l5',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //             hat:{
    //                 image:'Black_hat20',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //             clothes:{
    //                 image:'Pajama_pink10',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //             neck:{
    //                 image:'ETH_gold_n5',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //             hears:{
    //                 image:'Pink_fur5',
    //                 name:'string',
    //                 str:0,
    //                 dex:0,
    //                 vit:0,
    //                 int:0,
    //                 krm:0,
    //             },
    //         }}
    // }

    // const [bunny, setBunny]=useState(suka);

    // const updateStats= (bunny:bunnyInterface)=>{
    //     let totalStr=bunny.bunny.equipment.hat.str+bunny.bunny.equipment.rightHand.str+bunny.bunny.equipment.leftHand.str+bunny.bunny.equipment.clothes.str+bunny.bunny.equipment.neck.str+bunny.bunny.equipment.hears.str;
    //     let totalDex=bunny.bunny.equipment.hat.dex+bunny.bunny.equipment.rightHand.dex+bunny.bunny.equipment.leftHand.dex+bunny.bunny.equipment.clothes.dex+bunny.bunny.equipment.neck.dex+bunny.bunny.equipment.hears.dex;
    //     let totalVit=bunny.bunny.equipment.hat.vit+bunny.bunny.equipment.rightHand.vit+bunny.bunny.equipment.leftHand.vit+bunny.bunny.equipment.clothes.vit+bunny.bunny.equipment.neck.vit+bunny.bunny.equipment.hears.vit;
    //     let totalInt=bunny.bunny.equipment.hat.int+bunny.bunny.equipment.rightHand.int+bunny.bunny.equipment.leftHand.int+bunny.bunny.equipment.clothes.int+bunny.bunny.equipment.neck.int+bunny.bunny.equipment.hears.int;
    //     let totalKrm=bunny.bunny.equipment.hat.krm+bunny.bunny.equipment.rightHand.krm+bunny.bunny.equipment.leftHand.krm+bunny.bunny.equipment.clothes.krm+bunny.bunny.equipment.neck.krm+bunny.bunny.equipment.hears.krm;
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.stats.str=totalStr;
    //     bunnyCopy.bunny.stats.dex=totalDex;
    //     bunnyCopy.bunny.stats.vit=totalVit;
    //     bunnyCopy.bunny.stats.int=totalInt;
    //     bunnyCopy.bunny.stats.krm=totalKrm;
    //     setBunny(bunnyCopy);
    // }

    // const updateLeftHand = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.leftHand=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }
    // const updateRightHand = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.rightHand=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }
    // const updateClothes = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.clothes=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }
    // const updateNeck = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.neck=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }
    // const updateHears = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.hears=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }
    // const updateHat = ({item}:equipment)=>{
    //     let bunnyCopy=bunny;
    //     bunnyCopy.bunny.equipment.hat=item;
    //     setBunny(bunnyCopy);
    //     updateStats(bunny);
    // }

    if(currentTab=='home'){
        return(
            <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                {/*<Home bunny={bunny.bunny}></Home>*/}
                {/*<button onClick={()=>{updateClothes({item:{image:'Tape_pinck10',*/}
                {/*    name:'string',*/}
                {/*    str:4,*/}
                {/*    dex:4,*/}
                {/*    vit:4,*/}
                {/*    int:4,*/}
                {/*    krm:5,}})}} className={'w-full bg-[#000]'}>*/}
                {/*    TEST*/}
                {/*</button>*/}
            </div>
        );
    }
    else if(currentTab=='history'){
        return(
            <div className={'w-full h-full bg-[#FF2424]'}>
                HISTORY
            </div>
        );
    }
    else if(currentTab=='market'){
        return(
            <div className={'w-full h-full bg-[#FF2424]'}>
                MARKET
            </div>
        );
    }
    else if(currentTab=='job'){
        return(
            <div className={'w-full h-full bg-[#FF2424]'}>
                JOB
            </div>
        );
    }
    else if(currentTab=='equipment'){
        return(
            <div className={'w-full h-full bg-[#FF2424]'}>
                EQUIPMENT
            </div>
        );
    }
    return(
        <div className={'w-full h-full bg-[#000]'}>
            ERROR
        </div>
    );
};

export default Container;