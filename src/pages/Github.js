
import axios from 'axios'
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading'

const style = {
 
    center: {
        textAlign: 'center',
    },
 

    user: {
        border: '1px solid blue',
        boxShadow: '3px 3px grey',
        borderRadius: '5px',
        width: '250px',
        height: '250px', 
        padding: '10px',
        marginTop: '10px',
        marginRight: '10px', 

    },

    listUsers: { 
        display: 'flex',
        padding: '10px',
        width: '1420px',
        alignItems:'center',
        maxWidth: '1420px', 
        flexWrap: 'wrap',
    },

}

function Github() {

    const [ data, setData ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("vi")
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        getData()
    }, [ searchTerm ])

    const getData = async() => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        setData(res.data.items);
        setIsLoading(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        getData();
    }


    return (
        <>
            <input onChange={ (e) => setSearchTerm(e.target.value)} />
            <button type="submit" onSubmit={ (e) => onSubmit(e) }> Search </button> 

            <h3> GitHub Users Results </h3>
            { isLoading && <ReactLoading type="spinningBubbles" color="#444"/> }
 
            <div style={ style.listUsers }>
                { data?.length > 0 ?  
                   
                    data.map(( user ) => {
                        return ( 
                            <div style={ style.user } key={ user.id }> 
                                <p style={ style.center }> { user.id } </p> 

                                <p style={ style.center }>
                                    <a href={ user.html_url }>
                                        <img width={64} height={64} src={ user.avatar_url }  alt="avatar" /> 
                                    </a>
                                </p>
                                <p style={ style.center }>Login: { user.login } </p>
                                <p style={ style.center }>Id: { user.id } </p>
                            </div> 
                        )
                    })
                    : "nothing"
                }
            </div>
        </>
    )

}

export default Github