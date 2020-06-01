import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

const LongCaseCard = (props) => {

    const history = useHistory();

    const getPossibleActions = () => {
        const pathname = `/Actions/${props.case.id}`
        history.push(pathname);
    }

    return (
        <div className="h-80 w-full p-12 my-2 shadow-lg flex flex-col" style={{ borderRadius: '3rem' }}>
            <div className="w-full">
                <div className="float-right text-green-500 text-lg cursor-pointer hover:font-semibold"
                    onClick={() => getPossibleActions()}>
                    possible actions
                </div>
            </div>
            <div className="flex">
                <div className="w-1/4">
                    <img src={props.case.imageURL} alt="" className="h-48" />
                </div>
                <div className="w-3/4 pl-4">
                    <h2 className="lato text-3xl font-semibold">{props.case.case_name}</h2>
                    <p className="my-4 lato text-lg">{props.case.brief_description}</p>
                </div>
            </div>
        </div>
    )
}
export default LongCaseCard;