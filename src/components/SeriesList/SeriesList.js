import React from "react";
import './SeriesList.css'

const SeriesList = (props) => { 

    return(
        <div className="SeriesList">
        <ul>
            {props.list.map(series => (
                <li>{series.show.name}</li>
            ))}
        </ul>
        </div>
    )
    }

export default SeriesList