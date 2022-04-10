import React from 'react';

interface containerProps{
    currentTab:string,
}

const Container = ({currentTab}:containerProps) => {
    if(currentTab=='home'){
        return(
            <div className={'w-full h-full bg-[#FF2424]'}>
                HOME
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