import React from 'react'
import { useQuery } from 'react-query';
import axios from "axios";


const dataRecords = async () => {
    return await axios.get("https://fakestoreapi.com/products")
        .then(response => response)
}
const ShoppingApp = () => {
    const { data, isLoading, isError } = useQuery('posts', dataRecords);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>something went wrong...</h2>
    }
    return (
        <>{

            
            <div className="container mt-4"> 
            <div className="row row-cols-3 mt-4 mb-4 ms-4 me-4">
            {
            data?.data?.map((item, key) => {
                

              return( <div className="card ps-5 pe-5" key={item.id}>
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <h5 className="card-title">${item.price}</h5>
                            <button type="button" className='btn btn-primary btn-lg'>Add to cart</button>

                        </div>
                      </div>

                    )
                
                    
                
         })
        }
         </div>
         </div>
 



        }

        </>
    )
}

export default ShoppingApp