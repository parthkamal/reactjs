import React from 'react';
import List from '../data/List';


const Card = ({ elem }) => {

    const { id, heading, description, imgSrc, btnLink } = elem
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text"> {description} </p>
                <a href={btnLink} className="btn btn-primary">click here</a>
            </div>
        </div>
    );
}


const divStyle = {
    marginTop: '45px',
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: 'auto',
    rowGap: '10px'
}

const Services = () => {
    return (
        <React.Fragment>
            
                <h1 style={{marginTop : "10px" , textAlign : 'center'}}> our services </h1>     
            <div style={divStyle}>
                {
                    List.map((elem) => <Card elem={elem} />)
                }
            </div>
        </React.Fragment>

    );
}

export default Services;
