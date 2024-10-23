import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";

import './logo.scss';

function Logo() {
  return (
    <div className="logo">
        <h1>Agenda.ai</h1>
        <FaUserDoctor className='icon-logo' />
    </div>
  )
}

export default Logo