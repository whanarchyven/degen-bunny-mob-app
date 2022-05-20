import React, {useState} from 'react';
import Image from "next/image";
import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import InventoryCards from "./InventoryCards";
import MarketplaceCards from "./MarketplaceCards";
interface inventoryTabInterface extends bunnyInterface{
    pushToInventory:(item:equipment)=>void;
    balance:number,
    changeBalance:(item:number)=>void;
}

const Marketplace = ({bunny,pushToInventory,balance,changeBalance}:inventoryTabInterface) => {
    const [marketplaceTab,setMarketplaceTab]=useState('looks');
    const [buyingTab,setBuyingTab]=useState('buy');


    return (
        <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")] relative'}>
            <p className={'font-soyuz text-white text-3xl absolute left-[10vw] top-[10vh] sm:top-[2vw] sm:left-[4vw] sm:text-[3vw]'}>marketplace</p>
            {/*<button onClick={()=>{updateHat({image:'Crown_g10',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Hat</button>*/}
            {/*<button onClick={()=>{updateEars({image:'Pink_fur5',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Ears</button>*/}
            {/*<button onClick={()=>{updateHat({image:'Crown_g10',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Hat</button>*/}

            <div className={'flex-wrap w-[84%] absolute inline-flex h-[58vh] left-[8%] bottom-[5vh] sm:bottom-auto sm:top-[6vw]'}>
                <div className={'w-[100%] relative block h-[5vh] sm:w-[80%] sm:ml-[2%]'}>
                    <div className={'rounded-l-full w-[33%] cursor-pointer align-top h-full border-[1px] sm:border-[2px] inline-block border-white border-dashed '} onClick={()=>{setMarketplaceTab('looks')}}>
                        {marketplaceTab=='looks'?<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm sm:text-[1vw]'}>Looks</div>:<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz text-white text-sm sm:text-[1vw]'}>Looks</div>}
                    </div>
                    <div className={'w-[33%] cursor-pointer align-top h-full border-[1px] sm:border-[2px] inline-block border-white border-dashed'} onClick={()=>{setMarketplaceTab('instruments')}}>
                        {marketplaceTab=='instruments'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm sm:text-[1vw]'}>Instruments</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-sm sm:text-[1vw]'}>Instruments</div>}
                    </div>
                    <div className={'w-[33%] cursor-pointer align-top h-full border-[1px] sm:border-[2px] inline-block border-white border-dashed'} onClick={()=>{setMarketplaceTab('houses')}}>
                        {marketplaceTab=='houses'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm sm:text-[1vw]'}>Houses</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm sm:text-[1vw]'}>Houses</div>}
                    </div>
                </div>
                <div className={'w-[80%] mt-[2.5vh] mx-[10%] relative h-[4vh] inline-flex justify-between sm:h-[3vw] sm:ml-[2%] sm:hidden'}>
                    {/*<div className={'border-[1px] sm:border-[2px] inventory-active-tab text-center border-white w-[45%] h-full rounded-full'}>*/}
                    {/*    <select className={'w-full h-fulltext-center  font-josefin bg-[transparent]'}>*/}
                    {/*        <option disabled={true} defaultChecked={true} className={'text-center bg-[#000]'}>sort by</option>*/}
                    {/*        <option className={'text-center bg-[#000]'} value={'price'}>price</option>*/}
                    {/*        <option className={'text-center bg-[#000]'} value={'name'}>name</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className={'border-[1px] border-white w-[45%] h-full rounded-full sm:border-[2px]'}>
                        {buyingTab=='buy'?<div className={'font-josefin cursor-pointer inline-block align-top font-medium rounded-l-full h-full text-[2vh] sm:text-[1.5vw] text-center w-[50%] inventory-active-tab'} onClick={()=>{setBuyingTab('buy')}}>Buy</div>:<div className={'font-josefin cursor-pointer inline-block align-top h-full text-[2vh] sm:text-[1.5vw] font-medium rounded-l-full text-center w-[50%]'} onClick={()=>{setBuyingTab('buy')}}>Buy</div>}
                        {buyingTab=='rent'?<div className={'font-josefin cursor-pointer inline-block align-top font-medium rounded-r-full h-full text-[2vh] sm:text-[1.5vw] text-center w-[50%] inventory-active-tab'} onClick={()=>{setBuyingTab('rent')}}>Rent</div>:<div className={'font-josefin cursor-pointer inline-block align-top h-full text-[2vh] sm:text-[1.5vw] font-medium rounded-r-full text-center w-[50%]'} onClick={()=>{setBuyingTab('rent')}}>Rent</div>}
                    </div>
                </div>
                    <div className={'w-[100%] relative block mt-[5vw] h-[47vh] sm:mt-[2.6vw] sm:h-[33vw]'}>
                    <MarketplaceCards changeBalance={changeBalance} balance={balance} pushToInventory={pushToInventory} currentBuyingTab={buyingTab} currentMarketplace={marketplaceTab} inventory={bunny.inventory} bunny={bunny}></MarketplaceCards>
                </div>
            </div>


        </div>
    );
};

export default Marketplace;