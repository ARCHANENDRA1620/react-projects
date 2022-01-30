import React, { useState } from 'react';
import ElectricityBill from './components/ElectricityBills';
import Expenses from './components/Expenses';
import TaxFill from './components/TaxFill';
import Investments from './components/Investments';
import data from './data';
import List from './List';
import { Routes,Route,Link } from 'react-router-dom';

const App=()=>{
  return (
    <div>
      <Routes>
        <Route exact path='/' element={App}/>
        <Route exact path='/investments'  element={<Investments/>} />
        <Route exact path='/electricitybill' element={ElectricityBill} />
        <Route exact path='/expenses' element={Expenses}/>
        <Route exact path='/taxfill' element={TaxFill}/>
      </Routes>
      <ul style={{display:'flex',margin:'10px',padding:'10px'}}>
        <li style={{margin:'0px 10px'}}><Link to='/investments'>Investments</Link></li>
        <li style={{margin:'0px 10px'}}><Link to="/electricitybill">Electricity Bill</Link></li>
        <li style={{margin:'0px 10px'}}><Link to="/expenses">Expenses</Link></li>
        <li style={{margin:'0px 10px'}}><Link to="/taxfill">Taxes</Link></li>
      </ul>
    </div>
  )
}

export default App;
