import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import edf from './chart/edf';
import rms from './chart/rms';
import lst from './chart/lst';

const resultMapper = {
    edf: edf,
    rms: rms,
    lst: lst

}
const Result = ({payload, algorithm}) => {
    const ResultPanel = resultMapper[algorithm];
    if(!ResultPanel) {
        return null;
    }
    return (
        <ResultPanel payload={payload} />
    );
  }
  
  export default Result
  