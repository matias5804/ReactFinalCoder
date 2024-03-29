
//aca va a ir la card del producto
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';




//le hacemos llegar solo item
const Item = ({id,name, category, image, price}) => {


    return( 
   
        <>
            <div className={`gridTienda ${category}-category`}>

                <div className='card'>
                    <Link to={(`/product/${id}`)}>  
            
                        <div className='divImgCard'>

                            <img src={image} alt={name} className='imgCard'></img>

                        </div>
                    
                    </Link> 
                  
                    <h3 className="tituloCard">{name}</h3>
                    {/*<span>Cat {category} </span>- por ahora la voy a sacar*/}
                    
                    <p className="precioCard">$ <span>{price}</span></p>
                    <button className="btnComprarCard">
                                Agregar al Carrito
                    </button>
                    
                </div>
            
            </div>
        
        </>
        
    );
}

export default Item