import React, { Component } from 'react';
import SmallCard from './SmallCard';

class ContentRowMovies extends Component {
    constructor() {
        super()
        this.state = {
            cajas: []
        }
    }

    componentDidMount() { 
        Promise.all([
            fetch('/api/products')
            .then(res => res.json()),

            fetch('/api/users')
            .then(res => res.json())])
            
            .then((apiData) => { 
                let cajaProductos = { 
                    color: "success",
                    titulo: "Productos en Base de Datos", 
                    valor: apiData[0].meta.count,
                    icono: "fas fa-box", 
                }; 
                let cajaUsuarios = { 
                    color: "success", 
                    titulo: "usuarios registrados", 
                    valor: apiData[1].meta.count, 
                    icono: "fas fa-user",
                }; 
                let cajaCompatibilidad = {
                    color: "success",
                    titulo: "compatibilidades totales",
                    valor: Object.keys(apiData[0].countByCategory).length,
                    icono: "fa-solid fa-arrow-down",
                }; 
            this.setState({ 
                cajas: [cajaProductos, cajaUsuarios, cajaCompatibilidad] 
            }); 
        })}
        render(){
            return (
                <React.Fragment>
                {/*<!-- Content Row -->*/}
                    <div className="row">
                {
                    this.state.cajas.map((caja,index)=>{
                        return <SmallCard  {...caja}  key= {index}/>
                    })
                }      
            </div>
                </React.Fragment>
        )}
}
export default ContentRowMovies;