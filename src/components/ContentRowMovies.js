import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import SmallCard from './SmallCard';



function ContentRowTop(){
    let [productArray, setProductArray] = useState("Cargando...")
    let [userArray, setUserArray] = useState("Cargando...")
    let [compatibilityArray, setCompatibilityArray] = useState("Cargando...")


    let productInDataBase = {
        color:   "primary",
        titulo: "Total de productos a la venta",
        valor: productArray.meta.count,
        icono: "fa-solid fa-boxes-stacked",
    }
    
    let amount ={
        color:   "success",
        titulo: "Total de  usuarios",
        valor: userArray.meta.count,
        icono: "fas fa-user",
    }
    
    let user = {
        color:   "warning",
        titulo: "Total de categorías",
        valor: compatibilityArray,
        icono: "fa-solid fa-arrow-down-left-and-arrow-up-right-to-center",
    }
    
    let cardProps = [productInDataBase,amount,user];


    
useEffect(() => {
        fetch('/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
        
                setProductArray(products)
            })
            .catch(error => console.log(error))
            fetch('/api/users')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(users => {
        
                setUserArray(users)
            })
            .catch(error => console.log(error))      
           let quantity= Object.keys(productArray.countByCategory).length
            setCompatibilityArray(quantity)
        })

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;