import React from 'react'

function Header() {
    return (
        <>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
        
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" style={{color:'#257BEF'}}>TransMonitor</a>
          </div>
      
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.."/>
              </div>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Support</a></li>
              <li><a href="#">Faq</a></li>
              <li><a href="#"><img src="notification.png" alt="img" style={{width:'20px'}}/></a></li>
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
