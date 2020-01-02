import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Master(props) {
    return (
        <>
            <Header/>
              {props.children}
            <Footer/>
        </>
    )
}

export default Master
