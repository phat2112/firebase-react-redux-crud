import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './Signin'
import SignedOutLink from './Signout'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props
    console.log('auth', auth)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLink/>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Mario Plan</Link>
                {links}
            </div>
        </nav>   
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)