import React from 'react'

function Header() {
    return (
        <>
        <nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
        
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo nav-ul" href="#" style={{color:'#257BEF',fontSize:'24px',}}>TransMonitor</a>
          </div>
      
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">
               <div className="form-group nav-ul" style={{display:'flex'}}>
                 <div className="search"><img src="searchicon.png" alt="img" style={{width:'15px',marginTop:'12px'}}/></div>
                 <input type="text" className="form-control search-box" placeholder="Search....."/>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right" >
              <li className="nav-ul"><a href="#">Support</a></li>
              <li className="nav-ul"><a href="#">Faq</a></li>
              <li className="nav-ul"><a href="#"><img src="notification.png" alt="img" style={{width:'20px'}}/></a></li>
              <li>
                  <a href="#">
                      <div className="text-right" style={{fontSize:'12px'}}>Hello</div>
                      <div>Oluwaleke Ojo</div> 
                    </a>
                </li>
                <li>
                    <img src="logo192.png" style={{width:'50px',marginTop:'10px'}} alt="img" />
                </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
}

export default Header
