import { format } from 'date-fns';
import { useState } from 'react';
import { ClockDiv, DateDiv, TimeDiv } from './styles';
import calendar from './calendar.json'

export default function Clock(){
    const [date, setDate] = useState(new Date())
    setInterval(()=> {
        setDate(new Date())
    }, 30000)
    return(
        <ClockDiv>
            <TimeDiv>
                <span>{format(date, 'HH')}</span>
                <span>:</span>
                <span>{format(date, 'mm')}</span>
            </TimeDiv>
            <DateDiv>
                <span>{calendar.weekDay[date.getDay()]}, {date.getDate()} de {calendar.month[date.getMonth()]} de {date.getFullYear()}</span>
            </DateDiv>
        </ClockDiv>
    )
}