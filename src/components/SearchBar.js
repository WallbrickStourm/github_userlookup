import Results from "./Results"

import { useState } from 'react'



const SearchBar= () => {
    const [keyString, setKeyString] = useState('');
    const [lookupList, setLookupList]  = useState('');


    function OnChange (targetValue) {
        setKeyString(targetValue)
        if (targetValue.length > 2) {
            try {
                fetch(`https://api.github.com/search/users?q=${targetValue}`,
                { 
                  method: 'get', 
                  headers: new Headers({
                     'Accept': 'application/vnd.github.v3+json',
                    'Authorization': 'Bearer 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', 
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }),
                }).then(response => {
                    if(response.ok) {
                        response.json().then(data => {
                        setLookupList(data.items);
                    });

                    }
                });
              }
              catch (error) {
                  console.log(error);
              }
          
        }

    };


        return (
        <div className='form-control'>
            <label className='form-control-label'>Username</label>
            <input type='text' placeholder='Search username' className='form-control-input' value={keyString}
                 onChange = { (e) => OnChange(e.target.value)}/>

            <Results users={lookupList} keyString={keyString} />
        </div>);
    
}

export default SearchBar
