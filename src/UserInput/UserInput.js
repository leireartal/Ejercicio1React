import React from 'react';
import './UserInput.css';

const userinput = ( props ) => {
    return (
        <div className="UserInput">
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}
             <div class="row">
                 <div class="col-sm-4"> 
                 </div>
                 <div class="col-sm-4"> 
                     <input id="inputGroup-sizing-sm" type="text" class="form-control,btn btn-outline-secondary" placeholder="Username" onChange={props.changed} value={props.username} />
                  </div>
            </div> 
        </div>
    )
};

export default userinput;

