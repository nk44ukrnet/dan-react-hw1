import React, {useContext} from "react";
import Roomy from "/public/roomy.svg?react";
import Cheatsheet from "/public/cheatsheet.svg?react";
import {ContextFlexGrow} from "../../context/context.jsx";
import cn from "classnames";
import './FlowSwitcher.scss'

export default function FlowSwitcher() {
    const {flexGrow, handleFlexGrowOn, handleFlexGrowOff} = useContext(ContextFlexGrow);
    return (
        <div className={cn("flow-switcher")}>
            <Roomy className={cn({"highlighted": flexGrow === false})} onClick={handleFlexGrowOff}/>
            <Cheatsheet className={cn({"highlighted": flexGrow === true})} onClick={handleFlexGrowOn}/>
        </div>
    );
};