import React from 'react';
import {render, screen, wait} from "@testing-library/react";
import App from './App';
import userEvent from '@testing-library/user-event';




test('renders without errors', ()=>{
    render(<App/>);
});
