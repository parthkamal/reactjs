import React from 'react';
import MovieList from '../data/MovieData';
import Card from './Card';


const ListItems = MovieList.map((element) => {
  return <Card key={element.id} name={element.name} src={element.src} img={element.img}/>
})


const List = () => {
  return (
    <ol>{ListItems}</ol>
  );
}

export default List;
