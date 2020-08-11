import React, { ReactElement } from 'react';
import classes from './Spinner.module.css';

const Spinner = (): ReactElement => (
  <div className={classes.wrapper}>
    <div className={classes.ldscircle}>
      <div />
    </div>
  </div>
);

export default Spinner;
