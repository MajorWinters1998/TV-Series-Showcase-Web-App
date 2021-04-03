import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from "./Heading";
import Card from './Cards';
import Sdata from './Sdata';
 

ReactDOM.render( 
<>
  <h1 className='heading_style'>List of top 3 series of all time</h1>
  <div class="row">
  <div class="column">
  
  <Card imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
  />
  </div>
  <div class="column">
  <Card imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
  />
  </div>
  <div class="column">
  <Card imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}

  />
  </div>

  </div>
</>
,
  document.getElementById('root')
);


newFunction();
function newFunction() {
  reportWebVitals();
}

