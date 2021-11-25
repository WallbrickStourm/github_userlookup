import Results from "./Results"
import { useState } from 'react'



const SearchBar= ({users}) => {
    const [keyString, setKeyString] = useState('')

    return (
        <div className='form-control'>
            <label className='form-control-label'>Username</label>
            <input type='text' placeholder='Search username' className='form-control-input' value={keyString}
                 onChange = { (e) => setKeyString(e.target.value)}/>

            <Results users={users} keyString={keyString} />
            
        </div>
    )
}

export default SearchBar
