import React from "react";
import './styles/timeSelector.css';


export default class TimeSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {timeSelected: this.props.time};
        this.changeState = this.changeState.bind(this);
    }

    
    changeState(newTime)
    {
        this.setState({timeSelected: newTime});
        this.props.timeChanger(newTime);
    }

    render ()
    {
        let buttons = [];
        for (let i = 10; i <= 20; i+=2)
            buttons.push(
                <TimeButton
                    time={this.state.timeSelected}
                    value={i}
                    chs={this.changeState}
                    key={i}
                />
            );

        return(<div className="timeSelector">{buttons}</div>);
    }
}


class TimeButton extends React.Component
{
    changeTime ()
    {
        this.props.chs(this.props.value);
    }

    render ()
    {
        return (
            <div
                className={getClassName(this.props.value, this.props.time)}
                onClick={this.changeTime.bind(this)}>
                    {this.props.value + ":00"}
            </div>
        );
    }
}


const getClassName = (val, select) =>
    "timeButton" + ((val === select) ? " timeButtonSelected" : "");
