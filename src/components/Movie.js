import React from 'react';

import MovieList from './MovieList';

function Movie(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>product_name</th>
                                            <th>product_description"</th>
                                            <th>product_compatibilities.device_name</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>product_name</th>
                                            <th>product_description</th>
                                            <th>product_compatibilities.device_name</th>
										</tr>
									</tfoot>
									<tbody>
										<tr>
											{/* Hay que hacer un componente para agregar filas */}
											<td>01</td>
											<td>Reto al destino</td>
											<td>20</td>
                                            <td>15</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;