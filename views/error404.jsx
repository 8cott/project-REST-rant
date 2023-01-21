const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='http://placekitten.com/200/300' alt='kitten 404 pic' />
                </div>
                <div>
                    Photo credit <a href='https://placekitten.com'>placekitten.com</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404 