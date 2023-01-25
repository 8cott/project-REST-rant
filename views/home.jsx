const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
            <div className='container text-center'>
                <h1>REST-Rant</h1>
                <div>
                    <img src='/images/sushis.jpg' alt='sushis' id='sushi-pic' />
                </div>
                <div>
                    Photo by Scott Rubin
                </div>
                    <a href="/places">
                        <button className="btn btn-primary">Places Page</button>
                    </a>
            </div>                 
            </main>
        </Def>
    )
}

module.exports = home