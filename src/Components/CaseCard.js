import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HoverWord from './HoverWord';

const CaseCard = (props) => {

    const [learnMore, setLearnMore] = useState(false);
    const history = useHistory();

    const toggleLearnMore = () => {
        setLearnMore(!learnMore);
    }

    const getPossibleActions = () => {
        let path = `/Actions/${props.case.id}`;
        history.push(path);
        window.location.reload(false);
    }


    const learnMoreComponent = () => {
        const styling = learnMore 
                        ? "w-full h-screen flex flex-row justify-center items-center visible z-10 fixed top-0 left-0" 
                        : "hidden"
        return(
            <div className={styling} style={{backgroundColor: 'rgb(256,256,256,0.9)'}}>
                <div className="w-2/3 h-2/3 bg-white z-20 rounded-lg border-4 border-green-500 p-8">
                    <h2 className="text-5xl font-bold text-center uppercase karla">{props.case.case_name}</h2>
                    <div className="flex justify-center items-center">
                        <img src={props.case.imageURL} alt="" className="inline h-1/2 w-1/4 object-contain"/>
                        <p className="inline ml-6 whitespace-pre-wrap">{props.case.brief_description}</p>
                    </div>
                    <button className="text-green-600 float-right" onClick={() => toggleLearnMore()}>close</button>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div className="m-4 p-4 h-80 w-64 border-2 rounded-lg bg-gray-100 z-0">
                <button className="float-right text-green-500 px-1 ml-24 font-semibold border-2 
                        rounded-lg border-transparent hover:border-green-500 z-20" 
                        onClick={() => toggleLearnMore()}>learn more</button>
                <div className="cursor-pointer w-full z-0" onClick={() => getPossibleActions()}>
                    <HoverWord definition={props.case.definition}>
                        <h2 className="uppercase font-bold text-2xl karla leading-tight">{props.case.case_name}</h2>
                    </HoverWord>
                    <img src={props.case.imageURL} alt="" className="inline h-40 w-56 object-contain mt-2"/> 
                </div> 
            </div>
            {learnMoreComponent()}
        </div>
    )
}
export default CaseCard;