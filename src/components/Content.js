
import SearchBar from './SearchBar'
import { useState, useEffect } from 'react'

const Content = () => {
    const [users, setUsers] = useState([]);

    useEffect( async () => {
      const response = await fetch("https://api.github.com/users?per_page=100");
      const data= await response.json();
      setUsers(data);
    }, [])

    return (
        <div className='container'>
            <SearchBar users={users} />
        </div>
    )
}

export default Content
