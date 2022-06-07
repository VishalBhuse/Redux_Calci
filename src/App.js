import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add1, sub1 ,add2, div, mult, sub2} from './store/action2';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const  count  = useSelector((state)=> state.count);
  

  const [inputvals, setinputvals] = useState(Number(1))

   console.log(typeof(inputvals))

  return (
    <div className="App">
      <header className="App-header">

        <h2>Mini Calculator</h2>

      <h1>Value : {count}</h1>
      <div className='divs'>

      <button onClick={()=> dispatch (add1()) }>Increment</button>
      <button onClick={()=> dispatch (sub1())}>Decrement</button>
      </div>
      <br />
      <p>Enter Your value</p>
      <input type="number" placeholder='enter your value' onChange={(e)=> setinputvals(+e.target.value)} />

      <br />

      <div className='divs'>
      <button onClick={()=> dispatch (add2(inputvals)) }>Add</button>
      <button onClick={()=> dispatch (sub2(inputvals))}>Sub</button>
      <button onClick={()=> dispatch (mult(inputvals)) }>Mult</button>
      <button onClick={()=> dispatch (div(inputvals))}>Div</button>
      </div>
        
      </header>
    </div>
  );
}

export default App;
