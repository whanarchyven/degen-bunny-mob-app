import React, {Component, useState} from 'react';
import Home from "./Home";

import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import Inventory from "./Inventory";

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
                    str:1,
                    dex:1,
                    vit:1,
                    int:1,
                    krm:1,
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
                <div className={'w-full h-full bg-[#FF2424]'}>
                    HISTORY
                </div>
            );
        }
        else if(this.props.currentTab=='market'){
            return(
                <div className={'w-full h-full bg-[#FF2424]'}>
                    MARKET
                </div>
            );
        }
        else if(this.props.currentTab=='job'){
            return(
                <div className={'w-full h-full bg-[#FF2424]'}>
                    JOB
                </div>
            );
        }
        else if(this.props.currentTab=='equipment'){
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
    }
}

export default Bunny;