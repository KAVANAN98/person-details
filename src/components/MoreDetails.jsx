import React, { useState } from 'react'

function MoreDetails(props) {
// console.log('MoreDetails',props.personData);
console.log('MoreDetails index',props.index);
console.log('vvv',props.personData[props.index]);

    // var [data,setit]=useState(props.personData[props.index])
    // const [personData,setPersonData]=useState(props.personData[props.index])
    // setPersonData(props.personData[props.index])

    const {name,age,image}={...props.personData[props.index]}
    return (
        <div>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p className='image'>{image}</p>
        </div>
    )
}

export default MoreDetails
