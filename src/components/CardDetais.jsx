import React, { useState } from 'react'
import MoreDetails from './MoreDetails'

function CardDetais(props) {
// console.log('CardDetails',props.personData);
    const [personData,setPersonData] = useState(props.personData)
    const [wantMore,setWantMore] = useState(false)
    const [selectedData, setSelectedData] = useState()

    const more=(want,index)=>{
        setWantMore(want)
        setSelectedData(index)
    }
    return (
        <div className='cards'>
            <div >
                {personData.map((data,index) => {
                    // console.log(data,index);
                                return <div key ={index} className='card' onClick={()=>{more(true,index)}} >
                                            <p >Name :{data.name}</p>
                                            {/* <p >index :{index}</p> */}
                                    </div>})}
            <div className='more'>
                {wantMore ? <MoreDetails personData={personData} index={selectedData}/> : null}
            </div>
            </div>
    </div>
        
    )
}

export default CardDetais
