import React from 'react';

import './UserOutput.css';

const useroutput = ( props ) => {
    return (
        <div className="UserOutput">
         <div className="row">
                 <div className="p-3 mb-2 bg-info text-white">
                    <p>Soy el usuario con nombre {props.username}</p>
                    <p>{props.children}</p>
                </div>
                </div>
          </div>
    )
};

export default useroutput;
