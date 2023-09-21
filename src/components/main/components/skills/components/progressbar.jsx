import React from 'react';
import { ProgressBarContainer, ProgressBarConfig } from './styled-skills';


export default function ProgressBar(props) {
  return (
    <>
        <ProgressBarConfig>
            <p>{props.name}</p>
            <p>{props.percentage}%</p>
        </ProgressBarConfig>
        <ProgressBarContainer percentage={props.percentage}/>  
    </>
  );
}
