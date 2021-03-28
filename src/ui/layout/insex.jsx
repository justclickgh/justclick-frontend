import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar/index'
class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                    { this.props.children }
                <Footer/>
            </React.Fragment>
        )

    }
}

export default Layout