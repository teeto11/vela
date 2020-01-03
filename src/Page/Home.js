import React from 'react'
import Master from '../Components/Master'
import Sidebar from '../Components/Sidebar'
function Home() {
    return (
        <Master>
            <>
           <div className="container-fluid header-stat">
               <div className="row">
                   <div className="col-md-3">
                    <Sidebar/>
                   </div>
                 
                   <div className="col-md-8">
                        <div className="col-xs-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="col-xs-12 box">
                                            <div>
                                                <div>Daily Transaction Volume</div>
                                                <div>2000</div>
                                            </div>
                                            <div>
                                                <img src="line.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="col-xs-12 box"> 
                                        <div>
                                                <div>Daily Transaction Value</div>
                                                <div>2000</div>
                                        </div>
                                        <div>
                                            <img src="line.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="col-xs-12 box">
                                            <div>
                                                <div className="transact">Daily Transaction Value</div>
                                                <div>2000</div>
                                            </div>
                                            <div>
                                                <img src="line.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
                                            </div> 
                                    </div>
                                </div>
                                <div className="col-md-3"> 
                                    <div className="col-xs-12 box">   
                                            <div>
                                                <div>Daily Transaction Value</div>
                                                <div>2000</div>
                                            </div>
                                            <div>
                                                <img src="line.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="row">
                                <div className="col-md-8" style={{marginTop:'30px'}}>
                                  <img src="stat1.png" className="img-responsive" style={{width:'100%'}} alt="img" />
                                </div>
                                <div className="col-md-4 second-section">
                                    <p>Orders</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                          aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                                            <span className="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <p>Pending Order:<span className="text-warning">20</span></p>
                                    <p>Reconciled Order:<span className="text-success">20</span></p>
                                    <p>Total Order:<span className="text-primary">20</span></p>
                                    <hr/>
                                    <p>Payment</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                          aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                                            <span className="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <p>Pending Order:<span className="text-warning">20</span></p>
                                    <p>Reconciled Order:<span className="text-success">20</span></p>
                                    <p>Total Order:<span className="text-primary">20</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="payment-section">
                              <p>Payments</p>
                            </div>
                           <table id="example" className="display" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th>Item Type</th>
                                            <th>Price</th>
                                            <th>Transaction No</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Macbook</td>
                                            <td>4000</td>
                                            <td>123456789</td>
                                            <td>12:30</td>
                                            <td><button className="btn btn-success">Reconciled</button></td>           
                                        </tr>
                                        <tr>
                                        <td>Apple Macbook</td>
                                            <td>4000</td>
                                            <td>123456789</td>
                                            <td>12:30</td>
                                            <td><button className="btn btn-warning">Pending</button></td>
                                        </tr>                                       
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <th>Item Type</th>
                                            <th>Price</th>
                                            <th>Transaction No</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                        </tr>
                                    </tfoot>
                                </table>
                        </div>
                   </div>
               </div>
               
           </div>
          
           </>
        </Master>
    )
}

export default Home
