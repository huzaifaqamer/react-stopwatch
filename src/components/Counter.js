import React from 'react';
import Button from './Button';
import '../css/Counter.css';

class Counter extends React.Component {
    state = {
        seconds: 0,
        milliseconds: 0,
        started: false
    }

    componentDidMount() {
        setInterval(() => {
            this.updateTimer();
        }, 10);
    }

    updateTimer() {
        var ms = this.state.milliseconds;
        var sec = this.state.seconds;

        if (this.state.started) {
            ms += 1;
            if (ms === 100) {
                ms = 0;
                sec += 1;
            }
            if (sec === 60) {
                sec = 0;
            }

            this.setState({
                seconds: sec,
                milliseconds: ms
            })
        }
    }

    startButtonClicked = () => {
        this.setState({
            started: !this.state.started
        })
    }

    resetButtonClicked = () => {
        this.setState({
            seconds: 0,
            milliseconds: 0,
            started: false
        })
    }

    doubleDigits(number) {
        return (number).toLocaleString(undefined, {minimumIntegerDigits: 2});
    }

    render() {
        const startButtonLabel = this.state.started ? 'Stop' : 'Start';
        return (
        <div className="counter">
            <h1>
                {this.doubleDigits(this.state.seconds)}:{this.doubleDigits(this.state.milliseconds)}
            </h1>
            <div className="adjacent">
                <Button 
                    onButtonClicked={this.startButtonClicked}
                    label={startButtonLabel}
                />
                <Button 
                    onButtonClicked={this.resetButtonClicked}
                    label='Reset'
                />
            </div>
        </div>
    );
    }
}

export default Counter;