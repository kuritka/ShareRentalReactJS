import React from 'react';

export default function (props){
       return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <input type='text' id='name'  placeholder='name'/>
            </div>
            <div>
                <input type='email' id='email'  placeholder='email'/>
            </div>
             <div>
                <input type='phone' id='phone'  placeholder='phone'/>
            </div>
             <div>
                <input type='address' id='address'  placeholder='address'/>
            </div>
        </div>
        );
}
