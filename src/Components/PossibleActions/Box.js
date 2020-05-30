import React from 'react';

const Box = (props) => {
    return(
        <div className="h-20 w-48 rounded-lg bg-gray-100 my-4 shadow-lg p-2 font-semibold">
            {props.children}
        </div>
    )
}

export default Box;