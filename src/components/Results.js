import { useState } from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem'

const Results = ({ users, keyString }) => {
    //let results = []
    //setResults(users.filter( (user) => user.login == {keyString}) )
    
    let results = users.filter( (item) => item.type==='User' && item.login.toLowerCase().startsWith(keyString.toLowerCase()))

    if (keyString.length === 0) {
        return (<>Please type some text</>)
    }
    else {
        if (results.length === 0) {
            return (<>No matching item found</>)
        }
        else {
            return (         
                <>  
                    {results.map((result)=> (<ResultItem key={result.id}  login={result.login} avatar_url={result.avatar_url}/>))}
                </>
            )
        }
    }
}

Results.propTypes = {
    users: PropTypes.any,
    keyString: PropTypes.string,
}
export default Results
