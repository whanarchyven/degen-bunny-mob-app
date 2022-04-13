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

interface bunnyInterface{
        id:number,
        name:string,
        vitality:number,
        crt:number,
        stamina:number,
        lvl:number,

        stats:{
            str:number,
            dex:number,
            vit:number,
            int:number,
            krm:number,
        },

        base:{
            rabbit:string,
            overhead:string,
            mouth:string,
            eyes:string,

        },

        equipment:{
            rightHand:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            leftHand:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            hat:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            clothes:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            neck:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            hears:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
        }

}



const Container = ({currentTab}:containerProps) => {
    const [bunny, setBunny]=useState({
        id:0,
        name:'Test Bunny',
        vitality:5,
        crt:0.0,
        stamina:2,
        lvl:1,

        stats:{
            str:1,
            dex:2,
            vit:3,
            int:2,
            krm:0,
        },

        base:{
            rabbit:'Aluminum_bunny20',
            overhead:'ETH_icon_g3',
            mouth:'Rainbow_carrot_m5',
            eyes:'Divorces_b5',

        },

        equipment:{
            rightHand:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
            leftHand:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
            hat:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
            clothes:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
            neck:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
            hears:{
                image:'string',
                name:'string',
                str:1,
                dex:1,
                vit:1,
                int:1,
                krm:1,
            },
        }
    });

    const updateStats= (bunny:bunnyInterface)=>{
        let totalStr=bunny.equipment.hat.str+bunny.equipment.rightHand.str+bunny.equipment.leftHand.str+bunny.equipment.clothes.str+bunny.equipment.neck.str+bunny.equipment.hears.str;
        let totalDex=bunny.equipment.hat.dex+bunny.equipment.rightHand.dex+bunny.equipment.leftHand.dex+bunny.equipment.clothes.dex+bunny.equipment.neck.dex+bunny.equipment.hears.dex;
        let totalVit=bunny.equipment.hat.vit+bunny.equipment.rightHand.vit+bunny.equipment.leftHand.vit+bunny.equipment.clothes.vit+bunny.equipment.neck.vit+bunny.equipment.hears.vit;
        let totalInt=bunny.equipment.hat.int+bunny.equipment.rightHand.int+bunny.equipment.leftHand.int+bunny.equipment.clothes.int+bunny.equipment.neck.int+bunny.equipment.hears.int;
        let totalKrm=bunny.equipment.hat.krm+bunny.equipment.rightHand.krm+bunny.equipment.leftHand.krm+bunny.equipment.clothes.krm+bunny.equipment.neck.krm+bunny.equipment.hears.krm;
        let bunnyCopy=bunny;
        bunnyCopy.stats.str=totalStr;
        bunnyCopy.stats.dex=totalDex;
        bunnyCopy.stats.vit=totalVit;
        bunnyCopy.stats.int=totalInt;
        bunnyCopy.stats.krm=totalKrm;
        setBunny(bunnyCopy);
    }

    const updateLeftHand = ({item}:equipment)=>{
        let bunnyCopy=bunny;
        bunnyCopy.equipment.leftHand=item;
        setBunny(bunnyCopy);
        updateStats(bunny);
    }

    if(currentTab=='home'){
        return(
            <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                <Home bunny={bunny}></Home>
                <button onClick={()=>{updateLeftHand({item:{image:'string',
                    name:'string',
                    str:4,
                    dex:4,
                    vit:4,
                    int:4,
                    krm:5,}})}} className={'w-full bg-[#000]'}>
                    TEST
                </button>
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