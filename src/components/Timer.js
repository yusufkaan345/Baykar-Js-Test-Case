import React, { useState, useEffect } from 'react';

const Timer = ({ time, onTimeUp }) => {
    useEffect(() => {
        if (time === 0) {
            onTimeUp();
        }
    }, [time, onTimeUp]);

    return (
        <div id="timer">
            Time : <span id="time-left">{time}</span> seconds
        </div>
    );
};

export default Timer;
