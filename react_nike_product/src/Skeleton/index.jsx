import React from 'react'

const Skeleton = () => {
  return (
        <>{Array().fill().map((_,index)=>{
            <div
            key={`Loading Data-${index}`} 
            className="card"
            aria-hidden="true"
            >
                <div className="card-body">
                <h5 className="card-title placeholder-glow">
                <span className="placeholder col-4"></span> <br />
                <span className="placeholder col-4"></span> <br />
                <span className="placeholder col-4"></span> <br />
                </h5>
                <a className="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
            </div>
            </div>
        })}
        </>
  )
}

export default Skeleton