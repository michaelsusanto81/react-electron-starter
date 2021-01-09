import React from 'react';
import { SampleContainer } from './style';
import { Link } from "react-router-dom";

export const Sample = () => {
    return (
        <SampleContainer>
            <h1>React Electron Starter</h1>            
            <Link to="/sampleTwo">Sample Two</Link>
        </SampleContainer>
    )
}

export const SampleTwo = () => {
    return (
        <SampleContainer>
            <h1>React Electron Starter page Two</h1>
            <Link to="/">Back</Link>
        </SampleContainer>
    )
}