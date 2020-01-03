import React from 'react'
import  '../custom.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <button className="btn btn-success invoice">Generate Invoice</button>
            <p>Main</p>
            <div className="overview">
                <span>
                    <img src="logo192.png" style={{width:'20px'}} alt="img" className="o_image" />
                </span>
                <span className="o_overview">Overview</span>
            </div>
            <div className="payments">
                <p>Payment</p>
                <ul className="side-list">
                    <li><span><img src="wallet2.png" style={{width:'20px'}} alt="img"/></span>
                    All payments</li>
                    <li><span><img src="wallet2.png" style={{width:'20px'}} alt="img"/></span>Reconcilled payments</li>
                    <li><span><img src="wallet2.png" style={{width:'20px'}} alt="img"/></span>UnReconciled payments</li>
                    <li><span><img src="circle.png" style={{width:'20px'}} alt="img"/></span>Manual payments</li>
                </ul>
            </div>
            <div className="orders">
                <p>Order</p>
                <ul className="side-list">
                    <li><span><img src="note.png" style={{width:'20px'}} alt="img"/></span>
                    All Orders</li>
                    <li><span><img src="note.png" style={{width:'20px'}} alt="img"/></span>Pending orders</li>
                    <li><span><img src="note.png" style={{width:'20px'}} alt="img"/></span>Reconciled orders</li>
                    <li><span><img src="user.png" style={{width:'20px'}} alt="img"/></span>Merchant profile</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Sidebar
