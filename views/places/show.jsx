const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <div className='card' style={{width: '18rem'}}>
            <img src={data.place.pic} alt={data.place.name} />
              <div className='card-body'>
                <h5 className='card-title'>{ data.place.name }</h5>
              </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>{ data.place.city }</li>
                  <li className='list-group-item'>{ data.place.state }</li>
                  <li className='list-group-item'>{ data.place.cuisines }</li>  
                  <li className='list-group-item'>{ data.place.showEstablished() }</li>    
                </ul>
            </div>
            <br />
          <div>
            <h2>Ratings</h2>
          </div>
          <br />
          <div>
            <h2>Comments</h2>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
          </a>     
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form> 
          </main>
        </Def>
    )
}

module.exports = show