import React from 'react';

import Image from "next/image";

import {bunnyInterface} from "./bunnyInterface";

const BunnyGeneration = (bunny:bunnyInterface) => {
    return (
        <div className={'w-full relative h-full'}>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.base.bg==undefined?<div></div> : <Image src={'/images/bunny_generation/BG/'+bunny.bunny.base.bg+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                <Image src={'/images/bunny_generation/Rabbits/'+bunny.bunny.base.rabbit+'.png'} layout={'fill'}></Image>
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.base.eyes==undefined?<div></div> : <Image src={'/images/bunny_generation/Eyes/'+bunny.bunny.base.eyes+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.base.mouth==undefined?<div></div> : <Image src={'/images/bunny_generation/Mouth/'+bunny.bunny.base.mouth+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.base.faces==undefined?<div></div> : <Image src={'/images/bunny_generation/Faces/'+bunny.bunny.base.faces+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.base.overhead==undefined?<div></div> : <Image src={'/images/bunny_generation/Over head/'+bunny.bunny.base.overhead+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.hat==undefined?<div></div> : <Image src={'/images/bunny_generation/Hats/'+bunny.bunny.equipment.hat.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.clothes==undefined?<div></div> : <Image src={'/images/bunny_generation/Clothes/'+bunny.bunny.equipment.clothes.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.leftHand==undefined?<div></div> : <Image src={'/images/bunny_generation/Left hand/'+bunny.bunny.equipment.leftHand.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.rightHand==undefined?<div></div> : <Image src={'/images/bunny_generation/Right hand/'+bunny.bunny.equipment.rightHand.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.hears==undefined?<div></div> : <Image src={'/images/bunny_generation/Ears/'+bunny.bunny.equipment.hears.name+'.png'} layout={'fill'}></Image>}
            </div>
            <div className={'w-full absolute top-0 left-0 h-full'}>
                {bunny.bunny.equipment.neck==undefined?<div></div> : <Image src={'/images/bunny_generation/Necklace/'+bunny.bunny.equipment.neck.name+'.png'} layout={'fill'}></Image>}
            </div>
        </div>
    );
};

export default BunnyGeneration;