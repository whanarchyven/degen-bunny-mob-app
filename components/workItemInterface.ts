export interface workItemInterface{
    workItem:{
        id:number,
        chiefName:string,
        workName:string,
        description:string,
        task:string,
        profit:number,
        goal:number,
        color:string,
        requirements: {
            str:number,
            dex:number,
            vit:number,
            int:number,
            krm:number,
            skills?:Array<{name:string, image:string,color:string}>,
        },
    }
}