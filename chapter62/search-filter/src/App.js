import React, { useState } from 'react';
import { createApi } from 'unsplash-js'


//api
const api = createApi({
  accessKey: "uUfkVoIs4Zz0Mx1pgJ_w5hBL-NxNqgJD1A3DgrqMMfY"
});

const App = () => {

  //hooks
  const [query, setQuery] = useState("random");
  const [imageSrc, setImageSrc] = useState("");


  //style
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px'
  }

  const imgStyle = {
    width: '50%',
    margin: 'auto',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: '5px'
  }

  //search photos on button click
  const searchPhotos = () => {

    api.search
      .getPhotos({ query: query, orientation: "landscape" })
      .then(result => {

        const { results } = result.response;
        const { urls } = results[0];
        const { full } = urls;

        setImageSrc(full);
	console.log(full);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }





  return (

    <React.Fragment>
      <div style={divStyle}>
        <input type='text' placeholder='search your photos here' onChange={(e) => setQuery(e.target.value)} defaultValue={query} />
        <button onClick={searchPhotos}> search</button>
      </div>
      <img src={imageSrc} style={imgStyle} />
    </React.Fragment>

  );
}

export default App;
