import React, { useState } from 'react';

const ChecklistItem = (props) => {
    const [state, setState] = useState(false);

    const checkbox = state 
        ? "h-6 w-6 border-2 rounded-lg border-green-500 inline-block mt-1 cursor-pointer bg-green-500"
        : "h-6 w-6 border-2 rounded-lg border-green-500 inline-block mt-1 cursor-pointer"
    
    return(
        <div className="flex">
            <div className="w-1/6 my-4">
                <div className={checkbox}
                    onClick={() => setState(!state)}
                />
            </div>
            <div className=" inline-block relative my-4 la-h3 w-5/6">
                {props.item}
            </div>
        </div>
    )
}
export default ChecklistItem;