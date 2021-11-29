import { useState } from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem'


const Results = ({ users, keyString }) => {

    if (users!==null && users.length > 0 ) { 
        let results = users.filter( (item) => item.type==='User' && item.login.toLowerCase().startsWith(keyString.toLowerCase()))
        // NOTE: results are further filtered since looking for 'wer' will return 'tower' also
        //       and not just 'wer*' which is how typeahead is intended to behave. 
        //       Only user accounts are shown.
        if (keyString.length < 3) {
            return (<p>Please type some text</p>)
        }
        else {
            if (results.length > 0)
            return (         
                <>  
                    {results.map((result)=> (<ResultItem key={result.id}  login={result.login} avatar_url={result.avatar_url}/>))}
                </>
            )
            else 
            return (<p>No match found</p>)
        }
    }
    return (<></>)
}

Results.propTypes = {
    users: PropTypes.any,
    keyString: PropTypes.string,
}
export default Results
