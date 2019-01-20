import React from "react"
import AppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom"

const Header = () =>  {
    return (
        <AppBar position="static" color="primary">
          <div className="header">
            <Link to="/">
              <p className="title text-left">Lista de Compra</p>
            </Link>
          </div>
        </AppBar>
    )
}

export default Header