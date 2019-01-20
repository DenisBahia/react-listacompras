import React from "react"
import PropTypes from "prop-types"

import "./customCard.css"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom"

const CustomCard = (props) => {
    return (
        <div className={props.containerClass}>
            <Link to={props.link}>
                <Card className={`card ${props.cardClass ? props.cardClass : ""}`}>
                    <CardActionArea className="card-action-area" onClick={props.action}>
                        {props.image &&
                            <CardMedia component="img"
                            className="card-image"
                            heigth="100"
                            image={props.image}
                            title="image"></CardMedia>
                        }
                        <CardContent className="card-content">
                            {props.children}
                        </CardContent>
                    </CardActionArea>
                    {props.footer && (
                        <div>
                            <Divider />
                            <CardActions className="card-footer">
                                {props.footer}
                            </CardActions>
                        </div>
                    )}
                </Card>
            </Link>
        </div> 
    )
}

CustomCard.propTypes = {
    containerClass: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    footer: PropTypes.element,
    link: PropTypes.string.isRequired,
    image: PropTypes.string
}

export default CustomCard