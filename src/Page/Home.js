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
                                                <img src="graphI.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
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
                                            <img src="graphI.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
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
                                                <img src="graphI.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
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
                                                <img src="graphI.png" style={{width:'70px',marginTop:'-10px'}} alt="img" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="row">
                                <div className="col-md-8" style={{marginTop:'30px'}}>
                                  <img src="stat.png" className="img-responsive" style={{width:'100%'}} alt="img" />
                                </div>
                                <div className="col-md-4 second-section">
                                    <p>orders</p>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                          aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <p>Pending Order:<span className="text-warning">20</span></p>
                                    <p>Reconciled Order:<span className="text-success">20</span></p>
                                    <p>Total Order:<span className="text-primary">20</span></p>
                                    <hr/>
                                    <p>Payment</p>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                          aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                                            <span class="sr-only">70% Complete</span>
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
                           <table id="example" class="display" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>                                       
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
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
