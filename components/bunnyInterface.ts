import {equipment} from "./equipmentItemInterface";
import {workItemInterface} from "./workItemInterface";

import {activeTask} from "./activeTaskInterface";


export interface bunnyInterface{
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
            overhead?:string,
            mouth?:string,
            eyes?:string,
            bg?:string,
            faces?:string,
        },

        equipment:{
            rightHand?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            leftHand?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            hat?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            clothes?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            neck?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
            hears?:{
                image:string,
                name:string,
                str:number,
                dex:number,
                vit:number,
                int:number,
                krm:number,
            },
        },
        isInventoryOpen:boolean,
        currentInventoryTab:string,
        inventory:{
            id:number,
            image:string,
            name:string,
            type:string,
            str:number,
            dex:number,
            vit:number,
            int:number,
            krm:number,
        }[],

        work?:Array<activeTask>,

        activeTask?:activeTask,
    },


}
