import './App.css';
import { useState } from 'react';

function App (){

const [justify, setJustify] = useState('flex-start');
const [align, setAlign] = useState('flex-start');

const cycle = (value) => {
  if (value === 'flex-start') return 'center';
  if (value === 'center') return 'flex-end';
  return 'flex-start';
}

  return (
    <div className="test-area">

      <div className='opt-and-data'>
        <div className="container-options">
          <button className={`btn ${justify}`} 
          onClick={()=>setJustify(cycle(justify))}>Justify Content</button>

          <button className={`btn ${align}`} 
          onClick={()=>setAlign(cycle(align))}>Align Items</button>
        </div>

        <div className="textdata">
          <p>
            display: <span className='activetext'>flex</span>;
            <br />
            <br />
            justify-content: <span className='activetext'>{justify}</span>;
            <br />
            <br />
            align-items: <span className='activetext'>{align}</span>;
          </p>
        </div>
      </div>

      <div className="container" style={{justifyContent: justify, alignItems: align}}>
        <div className="box"></div>
      </div>   
    </div>
  )
}

export default App