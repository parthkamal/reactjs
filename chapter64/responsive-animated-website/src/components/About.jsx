import React from 'react';

const imgStyle = {
    width: '50%',
    float : 'right', 
    borderRadius : '10px', 
    marginTop : '10px', 
    textAlign : 'center'
}

const text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

const About = () => {
    return (
        <div style={{display : "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div>
            {text}
            </div>
            <img style={imgStyle} src='https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDc2NTd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGljb25zfGVufDB8MHx8fDE2ODM5MDQyNjR8MA&ixlib=rb-4.0.3&q=85'/>
        </div>
    );
}

export default About;
