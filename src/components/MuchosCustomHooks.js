import React from 'react'
import { useCounter } from './hooks/useCounter.js'
import { useFetch } from './hooks/useFetch'
import './estilos.css' 


export const MuchosCustomHooks = () => {

   const {contando, incrementar,decrementar} = useCounter(1)  
  
    
    const state = useFetch(`https://kitsu.io/api/edge/anime/${contando}`)

    
    
    
    const { loading, data } = state    
    
    console.log(data)

    
    return (
        <div className='container'>
            <h1 className='text-center mb-5' >Anime List</h1>
            <hr/>
             {
               loading 
                ?
               (
                <div className="alert alert-success" role="alert">
                Loading....
               </div>
               )
               :
               (

                <div className="container" >

                    <div className="row " >
                        <div className="col col-titulo" >
                            <p className="titulo" >- {data.data.attributes.canonicalTitle} -</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className='mb-2' src={data.data.attributes.posterImage.small} />
                        </div>   
                        <div className="col">
                            <p className="mb-2">{data.data.attributes.description}</p>
                        </div> 
                    </div>
                    <div className="trailer">
                        <div className="trailer-col">
                            <p className="trailer-text">Trailer</p>
                        </div>
                    </div>    
                    <div className="row-trailer">
                        <div className="col-trailer">
                            <iframe  className="video" width="640" height="360"
                                src={`https://www.youtube.com/embed/${data.data.attributes.youtubeVideoId}`}>                    
                            </iframe>
                        </div>
                    </div>  
                </div>
                
               )
             }
             
            <div className="botones">
            <button onClick={decrementar} type="button" className="btn btn-outline-primary mr-2 "> Previous</button>
            <button onClick={incrementar} type="button" className="btn btn-outline-primary ">Next </button>
            </div> 
            <hr/>
            <br/>
            
            

            
        </div>
    )
}