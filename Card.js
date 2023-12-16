import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Card({poster,title,addToFavrouites}) {
  function addData(){
addToFavrouites({poster,title});
  }
  return (
    <>
    <div className="col-lg-4">
    <div className="card" style={{ width: "18rem" }}>
  <img src={poster} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <button onClick={addData} className='btn btn-outline-primary my-2'>Add to Favrouit</button>
  </div>
</div>
</div>
    </>
  )
}

export default Card