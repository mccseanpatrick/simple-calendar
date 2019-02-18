import React from 'react'
import "../styles/calendar.css"
import Schedule from './schedule';

class Calendar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            date: new Date()
        }
    }

    handleNextDay(){
        let nextDay = new Date(this.state.date)
        nextDay.setDate(nextDay.getDate()+1)
        this.setState({
            date: nextDay
        })
    }

    handlePreviousDay(){
        let previousDay = new Date(this.state.date)
        previousDay.setDate(previousDay.getDate()-1)
        this.setState({
            date: previousDay
        })
    }

    render(){
        let options = {year: 'numeric', month: 'long', day: 'numeric' };
        const calendarItems = []
        for(let i = -3; i < 4;i++){
            let day = new Date(this.state.date)
            day.setDate(day.getDate()+i)
            if(i === 0){
                calendarItems.push(<CalendarItem key={i} date={day} selected={true}></CalendarItem>)
            }
            else{
                calendarItems.push(<CalendarItem key={i} date={day}></CalendarItem>)
            }

        }
        return(
            <div>
                <h1>{this.state.date.toLocaleString('en-us', options)}</h1>
                <div className="calendar-container">
                    <div className="calendar">
                        <button onClick={() => {this.handlePreviousDay()}}>&lt;</button>
                        <div className="calendar-items">
                            {calendarItems}
                        </div>
                        <button onClick={() => {this.handleNextDay()}}>&gt;</button>
                    </div>
                </div>
            </div>
        )
    }
}

const CalendarItem = (props) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    if(props.selected){
        return (
            <div className="calendar-item" style={{backgroundColor:"#00ff00"}}>
                <h1>{props.date.toLocaleString('en-us', options)}</h1>
                <Schedule/>
            </div>
        )
    }
    return (
        <div className="calendar-item">
            <h1>{props.date.toLocaleString('en-us', options)}</h1>
            <Schedule/>
        </div>
    )
}

export default Calendar