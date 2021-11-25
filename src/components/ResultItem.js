const ResultItem = ({ key, login, avatar_url}) => {
    return (
        <div className='item'>  
            <a target="_blank" href={`https://github.com/${login}`}>
           
            <img src={avatar_url} alt={avatar_url}  width="60" height="60" >
            </img>
            <h3>{login}</h3>
            <p>{`https://github.com/${login}`}</p>
            </a>
         </div>
    )
}

export default ResultItem
