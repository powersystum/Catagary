import React, { useState } from 'react'
import Catagaries from './Catagaries'


export const Catagary = () => {
  const [state,setState]=useState(Catagaries);
  const filterResult=(catItem)=>{
  const result=Catagaries.filter((cutData)=>{
    return cutData.Catagaroy === catItem;
  })

   setState(result);
  }
  return (
    <> 
    <h1 className='text-center text-info'>Let's shope</h1>
    <div className='container-fluid mx-2'>
      <div className='row mt-5 mx-2'>
        <div className='col-md-4' >
        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('men')}>Man</button>
        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('Women')}>Women</button>
        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('Children')}>children</button>
        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('Black')}>Black</button>
        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('White')}>White</button>
        <button className='btn btn-warning w-100 ' onClick={()=>setState(Catagaries)}>All</button>
        </div>
        <div className='clo-md-9'>

          <div className='row'>
            {state.map((values)=>{
              const {id,title,price,image}=values
              return(
                <>
                <div className='col-md-4 mb-4' key={id}>
 < div className='card' >
      < img src='images\white frock.jpeg' className='img' />
      <div className='card.Body'>
        <div className='card.Title'>{title}</div>
        <p>Price:{price}</p>
        <div className='card.Text'>
          Some quick example text to build 
          bulk of the card's content.
        </div>
      
      </div>
    </div>
    </div>
                </>
              )
            })}
      
             
             
             </div>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default  Catagary    