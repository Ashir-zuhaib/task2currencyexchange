import './App.css';
import { useEffect, useState,  } from 'react';

function App() {
  const [pkr, setpkr] =useState(null)
  const [dollar, setDollar]=useState(null)
  const pkrIndoll = pkr/178
  const dollInPkr = dollar*178
 console.log(dollInPkr,  dollar)


 const dtp = (e) =>{
  setpkr(null)
   let pkrCh = e / 178
  setpkr(pkrCh)
 }
 const ptd = (e) =>{
  setDollar(null)

   let dol = e* 178
  setDollar(dol)
 }
  return (
    <div className="App">
     <form className="form" >
      <label className='label'>Enter Amount In PakRupee</label>
      <br />
      <input
      className='input'
      type='number' 
      value = {dollar}
      placeholder='enter pak rupee'
      onChange={(e)=>dtp(e.target.value)}
/>
<br />
  <label className='result'>Your amount in Dollar <br /> </label>
  <input
      className='input'
      type='number' 
      value = {pkr}
      placeholder='enter pak rupee'
      onChange={(e)=>ptd(e.target.value)}
/>
       </form>
    </div>
  );
}

export default App;
