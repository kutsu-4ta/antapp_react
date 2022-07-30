/**
 * [説明] アニメーション
 *
 */
import { useEffect, useState } from "react";
import {CSSTransition} from 'react-transition-group';

const useDelay = (msec: number) => {
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        setTimeout(() => setWaiting(false), msec)
    }, []);

    return waiting;
}

interface Props{
    children: JSX.Element;
    classNames: string;
    timeoutEnter: number | undefined;
    timeoutExit: number | undefined;
}
export const CSSAnimation = (props: Props) => {
    const{children, classNames, timeoutEnter, timeoutExit} = props;

    const Enter:number = timeoutEnter ? timeoutEnter : 1000;
    const Exit:number = timeoutExit ? timeoutExit : 1000;

    return (
        <CSSTransition
            in={!useDelay(500)}
            mountOnEnter={true}
            timeout={{enter:Enter, exit: Exit}}
            classNames={classNames}
        >
            {children}
        </CSSTransition>
    );
}