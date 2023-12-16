import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Favouraite({favour,changeFavour}) {
  function deleteData(index){
    let deletVal=[...favour]
    deletVal.splice(index,1);
    changeFavour(deletVal);
  }
  return (
    <>
    <div className='container'>
      <div className='row'>  {
      favour.length>1? (
      favour.map((a ,i)=>{
          return(
            <>
            <div className="col-lg-4">
    <div className="card" style={{ width: "18rem" }}>
  <img src={a.poster} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <button className='btn btn-outline-primary my-2' onClick={()=>{deleteData(i)}}>Remove</button>
  </div>
</div>
</div>
 </>
          )
        })
        ):(
        <p>No movie found</p>
        )
    }
</div>
</div>
    </>
  )
}

export default Favouraite;