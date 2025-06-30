import React from 'react';

const SbBreadcam = ({children}:any) => {
    return (
        <div className='px-[80px] flex items-center gap-[4px] py-[12px] bg-[#F1F5F9]'>
       {children}
        </div>
    );
};

export default SbBreadcam;