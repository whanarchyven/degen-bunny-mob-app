import React, {Component, useState} from 'react';
import Home from "./Home";

import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import {workItemInterface} from "./workItemInterface";
import Inventory from "./Inventory";
import Equipment from "./Equipment";
import Marketplace from "./Marketplace";
import Work from "./Work";
import {number} from "prop-types";
import Activity from "./Activity";

interface activityItemInterface extends workItemInterface{
    progress:number
}

class Bunny extends Component <any,bunnyInterface> {
    // private Init: () => void;
    // private togglePopup: () => void;
    // private choseArmorSlot: () => void;
    // private choseLeftHandSlot: () => void;
    // private choseRightHandSlot: () => void;
    // private changeClothes: () => void;

    private changeClothes: (item:equipment)=>void;
    private changeLeftHand: (item:equipment)=>void;
    private changeRightHand: (item:equipment)=>void;
    private changeEars: (item:equipment)=>void;
    private changeNeck: (item:equipment)=>void;
    private changeHat: (item:equipment)=>void;
    private changeInventoryTab:(item:string)=>void;
    private inventoryPush:(item:equipment)=>void;
    private workPush:(item:workItemInterface)=>void;
    private increaseActiveTask:(increase:number)=>void;
    private changeActiveTask:(item:activityItemInterface)=>void;



    openInventory=()=>{
        this.setState(prevState => ({
            bunny:{
                ...prevState.bunny,
                isInventoryOpen: !(prevState.bunny.isInventoryOpen),
            }
        }))

    }


    constructor(props:any) {
        super(props);

        this.openInventory=this.openInventory.bind(this);

        // this.selectLeftHand = this.selectLeftHand.bind(this);
        this.state={
            bunny:{
                id:0,
                name:'test bunny2',
                vitality:3,
                crt:2,
                stamina:2,
                lvl:3,

                stats:{
                    str:10,
                    dex:10,
                    vit:10,
                    int:10,
                    krm:10,
                },

                base:{
                    rabbit:'Blue_bunny40',
                    overhead:undefined,
                    mouth:'Happy_m30',
                    eyes:'Hurts15',
                    bg:undefined,
                    faces:undefined,
                },

                equipment: {
                    // rightHand:{
                    //     image:'Machine_r5',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },
                    // leftHand:{
                    //     image:'Axe_l5',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },
                    // hat:{
                    //     image:'Black_hat20',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },
                    // clothes:{
                    //     image:'Pajama_pink10',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },
                    // neck:{
                    //     image:'ETH_gold_n5',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },
                    // hears:{
                    //     image:'Pink_fur5',
                    //     name:'string',
                    //     str:0,
                    //     dex:0,
                    //     vit:0,
                    //     int:0,
                    //     krm:0,
                    // },

                },
                isInventoryOpen:false,
                currentInventoryTab:'hat',
                inventory:[
                    {
                        id:34,
                        image:'Tape_pinck10',
                        name:'Tape_pinck10',
                        type:'clothes',
                        str:4,
                        dex:4,
                        vit:4,
                        int:4,
                        krm:5,
                    },
                    {
                        id:31,
                        image:'Hoody10',
                        name:'Hoody10',
                        type:'clothes',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:12,
                        image:'Police10',
                        name:'Police10',
                        type:'clothes',
                        str:3,
                        dex:2,
                        vit:4,
                        int:4,
                        krm:1,
                    },
                    {
                        id:11,
                        image:'Rainbow_fur3',
                        name:'Rainbow_fur3',
                        type:'ears',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:72,
                        image:'Gold_fur5',
                        name:'Gold_fur5',
                        type:'ears',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:21,
                        image:'Axe_l5',
                        name:'Axe_l5',
                        type:'left hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:22,
                        image:'Bit_l5',
                        name:'Bit_l5',
                        type:'left hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:41,
                        image:'Machine_r5',
                        name:'Machine_r5',
                        type:'right hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:43,
                        image:'Health_bracelet_r5',
                        name:'Health_bracelet_r5',
                        type:'right hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:51,
                        image:'Carrot_gold_n5',
                        name:'Carrot_gold_n5',
                        type:'neck',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:54,
                        image:'Carrot_silver_n5',
                        name:'Carrot_silver_n5',
                        type:'neck',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:61,
                        image:'Mask_b3',
                        name:'Mask_b3',
                        type:'hat',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:1,
                        image:'Mask_g3',
                        name:'Mask_g3',
                        type:'hat',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:340,
                        image:'Business_suit10',
                        name:'Business_suit10',
                        type:'clothes',
                        str:4,
                        dex:4,
                        vit:4,
                        int:4,
                        krm:5,
                    },
                    {
                        id:310,
                        image:'Pajama_green10',
                        name:'Pajama_green10',
                        type:'clothes',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:120,
                        image:'Batman3',
                        name:'Batman3',
                        type:'clothes',
                        str:3,
                        dex:2,
                        vit:4,
                        int:4,
                        krm:1,
                    },
                    {
                        id:110,
                        image:'Right_ring_g10',
                        name:'Right_ring_g10',
                        type:'ears',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:720,
                        image:'Right_ring_s10',
                        name:'Right_ring_s10',
                        type:'ears',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:210,
                        image:'Hummer_l5',
                        name:'Hummer_l5',
                        type:'left hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:220,
                        image:'Ice_cream_l5',
                        name:'Ice_cream_l5',
                        type:'left hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:410,
                        image:'Chain_g_r10',
                        name:'Chain_g_r10',
                        type:'right hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:430,
                        image:'Whatch_r10',
                        name:'Whatch_r10',
                        type:'right hand',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:510,
                        image:'ETH_gold_n5',
                        name:'ETH_gold_n5',
                        type:'neck',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:540,
                        image:'Playboy_gold10',
                        name:'Playboy_gold10',
                        type:'neck',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:610,
                        image:'Crown_g10',
                        name:'Crown_g10',
                        type:'hat',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },
                    {
                        id:10,
                        image:'White_hat_carrot10',
                        name:'White_hat_carrot10',
                        type:'hat',
                        str:2,
                        dex:1,
                        vit:5,
                        int:4,
                        krm:5,
                    },


                ],

                work:[

                ],
            },

        };
        // this.connectWallet = ()=>{
        //     this.setState({})
        // }
        this.changeClothes=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        clothes:item
                    }
                }
            }))
        }


        this.changeInventoryTab=(item:string)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    currentInventoryTab:item,
                }
            }))
        }



        this.changeHat=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        hat:item
                    }
                }
            }))
        }
        this.changeLeftHand=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        leftHand:item
                    }
                }
            }))
        }
        this.changeRightHand=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        rightHand:item
                    }
                }
            }))
        }
        this.changeEars=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        hears:item
                    }
                }
            }))
        }
        this.changeNeck=(item)=>{
            this.setState(prevState => ({
                bunny:{
                    ...prevState.bunny,
                    equipment:{
                        ...prevState.bunny.equipment,
                        neck:item
                    }
                }
            }))
        }

        this.inventoryPush=(item:equipment)=>{
            this.state.bunny.inventory.push(item);
        }

        this.workPush=(item:workItemInterface)=>{

            if(this.state.bunny.stats.str<item.workItem.requirements.str){
                alert('It seems that you have no much STR to take this job! Try to take another, or increase stats.');
                return 0;
            }

            else if(this.state.bunny.stats.dex<item.workItem.requirements.dex){
                alert('It seems that you have no much DEX to take this job! Try to take another, or increase stats.');
                return 0;
            }
            else if(this.state.bunny.stats.vit<item.workItem.requirements.vit){
                alert('It seems that you have no much VIT to take this job! Try to take another, or increase stats.');
                return 0;
            }
            else if(this.state.bunny.stats.krm<item.workItem.requirements.krm){
                alert('It seems that you have no much KRM to take this job! Try to take another, or increase stats.');
                return 0;
            }
            else if(this.state.bunny.stats.int<item.workItem.requirements.int){
                alert('It seems that you have no much INT to take this job! Try to take another, or increase stats.');
                return 0;
            }


            let temp={
                workItem:item.workItem,
                progress:0,
            }
            this.state.bunny.work?.push(temp);
            this.changeActiveTask(temp);
        }

        this.increaseActiveTask=(increase)=>{
            if(this.state.bunny.activeTask?.progress){
                this.state.bunny.activeTask.progress+=increase;
            }
        }

        this.changeActiveTask=(item:activityItemInterface)=>{
            // console.log('SUKA1');
            if((this.state.bunny.work?.find(some=>some.workItem.id==this.state.bunny.activeTask?.workItem.id))){
                if(this.state.bunny.activeTask?.progress!=undefined){
                    let ind=this.state.bunny.work?.findIndex(some=>some.workItem.id==this.state.bunny.activeTask?.workItem.id);
                    // console.log(this.state.bunny.work[ind].progress);
                    // console.log(this.state.bunny.activeTask.progress);
                    this.state.bunny.work[ind].progress=this.state.bunny.activeTask?.progress;

                }
            }
            this.state.bunny.activeTask=item;
            // let ind=this.state.bunny.work?.findIndex(some=>some.workItem.id==this.state.bunny.activeTask?.workItem.id)
            // if(ind){
            //     this.state.bunny.work?.splice(ind,1);
            // }
        }

        // this.openInventory=()=>{
        //     this.setState(prevState => ({
        //         bunny:{
        //             ...prevState.bunny,
        //             isInventoryOpen: !(prevState.bunny.isInventoryOpen),
        //         }
        //     }))
        //
        // }

        this.changeClothes=this.changeClothes.bind(this);
        this.changeLeftHand=this.changeLeftHand.bind(this);
        this.changeRightHand=this.changeRightHand.bind(this);
        this.changeEars=this.changeEars.bind(this);
        this.changeNeck=this.changeNeck.bind(this);
        this.changeHat=this.changeHat.bind(this);
        this.inventoryPush=this.inventoryPush.bind(this);
        this.workPush=this.workPush.bind(this);
        this.changeActiveTask=this.changeActiveTask.bind(this);
        this.increaseActiveTask=this.increaseActiveTask.bind(this);

    };

    render() {
        if(this.props.currentTab=='home'){
            return(
                <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                    {this.state.bunny.isInventoryOpen? <Inventory updateInventoryTab={this.changeInventoryTab} closeInventory={this.openInventory} inventoryTab={this.state.bunny.currentInventoryTab} updateClothes={this.changeClothes} updateHat={this.changeHat} updateNeck={this.changeNeck} updateEars={this.changeEars} updateRightHand={this.changeRightHand} updateLeftHand={this.changeLeftHand} bunny={this.state.bunny}></Inventory>:<Home bunny={this.state.bunny} openInventory={this.openInventory}></Home>}
                    {/*<button onClick={()=>{this.changeClothes({*/}
                    {/*    id:34,*/}
                    {/*    image:'Tape_pinck10',*/}
                    {/*    name:'string',*/}
                    {/*    type:'clothes',*/}
                    {/*    str:4,*/}
                    {/*    dex:4,*/}
                    {/*    vit:4,*/}
                    {/*    int:4,*/}
                    {/*    krm:5,})}} className={'w-full bg-[#000]'}>*/}
                    {/*    TEST*/}
                    {/*</button>*/}
                </div>
            );
        }

        else if(this.props.currentTab=='history'){
            return(
                <div className={'w-full h-full'}>
                    <Activity goToWorkScreen={this.props.changeTab} increaseActiveTask={this.increaseActiveTask} bunny={this.state.bunny} changeActiveTask={this.changeActiveTask}></Activity>
                </div>
            );
        }
        else if(this.props.currentTab=='market'){
            return(
                <div className={'w-full h-full bg-[#FF2424]'}>
                    <Marketplace balance={this.props.balance} changeBalance={this.props.changeBalance} pushToInventory={this.inventoryPush} bunny={this.state.bunny}></Marketplace>
                </div>
            );
        }
        else if(this.props.currentTab=='job'){
            return(
                <div className={'w-full h-full'}>
                    <Work bunny={this.state.bunny} pushToWork={this.workPush}></Work>
                </div>
            );
        }
        else if(this.props.currentTab=='equipment'){
            return(
                <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
                    <Equipment  updateClothes={this.changeClothes} updateHat={this.changeHat} updateNeck={this.changeNeck} updateEars={this.changeEars} updateRightHand={this.changeRightHand} updateLeftHand={this.changeLeftHand} bunny={this.state.bunny}></Equipment>
                </div>
            );
        }
        return(
            <div className={'w-full h-full bg-[#000]'}>
                ERROR
            </div>
        );
    }
}

export default Bunny;