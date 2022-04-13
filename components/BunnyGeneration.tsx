import React from 'react';

import Image from "next/image";

interface bunnyInterface{
    bunny:{
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
            bg:string,
            faces:string,
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

}

const BunnyGeneration = ({bunny}:bunnyInterface) => {
    return (
        <div className={'w-full relative h-full'}>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.base.bg==undefined?<div></div> : <Image src={'/images/bunny_generation/BG/'+bunny.base.bg+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                <Image src={'/images/bunny_generation/Rabbits/'+bunny.base.rabbit+'.png'} layout={'fill'}></Image>
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.base.eyes==undefined?<div></div> : <Image src={'/images/bunny_generation/Eyes/'+bunny.base.eyes+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.base.mouth==undefined?<div></div> : <Image src={'/images/bunny_generation/Mouth/'+bunny.base.mouth+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.base.faces==undefined?<div></div> : <Image src={'/images/bunny_generation/Faces/'+bunny.base.faces+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.base.overhead==undefined?<div></div> : <Image src={'/images/bunny_generation/Over head/'+bunny.base.overhead+'.png'} layout={'fill'}></Image>}
            </div>
        </div>
    );
};

export default BunnyGeneration;