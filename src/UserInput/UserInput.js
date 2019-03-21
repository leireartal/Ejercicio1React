import React from 'react';
import './UserInput.css';

const userinput = ( props ) => {
    return (
        <div className="UserInput">
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}
             <div className="row">
                 <div clasName="col-sm-4"> 
                 </div>
                 <div className="col-sm-4"> 
                     <input id="inputGroup-sizing-sm" type="text" className="form-control,btn btn-outline-secondary" placeholder="Username" onChange={props.changed} value={props.username} />
                  </div>
            </div> 
        </div>
    )
};

export default userinput;

