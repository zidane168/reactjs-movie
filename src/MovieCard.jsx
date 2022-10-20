import React from 'react'

export const MovieCard = ( { movie, index } ) => {  // ban chat no la cai props, nen phai dung destructuring 
    return (
      <div className="movie" key={index}>
        <p> { movie.Year } </p>
        <p> { movie.Title } </p>
        <p> { movie.Type } </p>
        <img src={ movie.Poster } alt={ movie.title } />
        <p> { movie.Year } </p>
      </div>
    )
}


// export const MovieCard = ( props ) => {      // tuong duong cai tren
//     return (
//       <div className="movie" key={props.index}>
//         <p> { props.movie.Year } </p>
//         <p> { props.movie.Title } </p>
//         <p> { props.movie.Type } </p>
//         <img src={ props.movie.Poster } alt={ props.movie.title } />
//         <p> { props.movie.Year } </p>
//       </div>
//     )
// }
 

function Products( props ) {
    const products = ["Learn React", "Pro", "Beginning"]
    const listProducts = products.map((pro, index) => {
        return (    // thieu return ko chayyyyy
            <li key={ index }> { pro } </li>
        )
       
    })

    return (
        <div>
            <ul> { listProducts } </ul>
        </div>
    ) 
}

export default Products
 

export const Movies = ( props ) => { 
    return (
        props.movies.map( (movie, index ) => {
            return (           // thieu return ko chayyyyy
                <div className="movie" key={index}>
                    <p> { movie.Year } </p>
                    <p> { movie.Title } </p>
                    <p> { movie.Type } </p>
                    <img src={ movie.Poster } alt={ movie.title } />
                    <p> { movie.Year } </p>
                </div> 
            )
        
        })
    )
}
