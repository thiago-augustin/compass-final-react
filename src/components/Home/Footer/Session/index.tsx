import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionDiv, InfoSession, Seconds, TimerContent, TimerDiv } from './styles'
import jwt_decode from "jwt-decode";

interface IJwt {
    iat: number;
    exp: number;
}


export default function Session() {
    const [timer, setTimer] = useState(calcTime() || 0);
    
    const navigate = useNavigate()
    if (timer <= 0){
        navigate('/')
        localStorage.removeItem('token');
    }
    setTimeout(() => { setTimer(timer - 1) }, 1000)

    function calcTime() {
        const myToken: string = localStorage.getItem('token') || '';
        if(myToken){
            const decoded: IJwt = jwt_decode(myToken);
            const timeExpire = new Date((decoded.exp) * 1000).toLocaleTimeString().split(":");
            const timeNow = new Date().toLocaleTimeString().split(":");
            const secondsExpire = ((parseInt(timeExpire[0]) * 3600) + (parseInt(timeExpire[1]) * 60) + parseInt(timeExpire[2]));
            const secondsNow = ((parseInt(timeNow[0]) * 3600) + (parseInt(timeNow[1]) * 60) + parseInt(timeNow[2]));
            const leftTime = secondsExpire - secondsNow;
            if(leftTime <= 0){
                return 0;
            }else{
                return leftTime;
            }
        }
    }

    return (
        <SessionDiv>
            <InfoSession>
                Application<br />
                refresh in
            </InfoSession>
            <TimerDiv>
                <TimerContent>
                    {timer}
                </TimerContent>
                <Seconds>
                    seconds
                </Seconds>
            </TimerDiv>
        </SessionDiv>
    )
}