import React, { useState } from 'react';

const HoverWord = (props) => {

    const [state, setState] = useState(false);
    const style = state ? 'visible' : 'hidden'

    return (
        <div className="w-full pt-8 pb-10 z-0">
            <div className={`text-sm w-56 absolute -mt-24 h-24 flex ${style}`}>
                <div className="self-end leading-tight bg-gray-900 
                    rounded-lg p-2 text-white">
                    {props.definition}
                </div>
            </div>
            <span className="absolute" style={{ maxWidth: '160px'}} onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                {props.children}
            </span>
        </div>
    )
}
export default HoverWord;