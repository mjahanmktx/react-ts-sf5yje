import * as React from 'react';
import './style.css';

export default function App() {
  const [gif, setGif] = React.useState('');

  const randomGifURL =
    'https://api.giphy.com/v1/gifs/random?api_key=ELBQq8M1MQpFjVJrS2fF0vShoW7IJAtw&tag=&rating=g';
  const trendingGifURL =
    'https://api.giphy.com/v1/gifs/trending?api_key=ELBQq8M1MQpFjVJrS2fF0vShoW7IJAtw&limit=25&rating=g';

  const getTrending = async () => {
    let response = await fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=ELBQq8M1MQpFjVJrS2fF0vShoW7IJAtw&limit=25&rating=g'
    );
    let json = await response.json();
    console.log({ json });
    setGif(json.data[0].images.fixed_height_small.url);
    console.log('trending gif');
  };

  const getRandom = async () => {
    let response = await fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=ELBQq8M1MQpFjVJrS2fF0vShoW7IJAtw&tag=&rating=g'
    );
    let json = await response.json();
    console.log({ json });
    setGif(json.data.images.fixed_height_small.url);
    console.log('random gif');
  };

  return (
    <div>
      <button onClick={getTrending}> Trending GIF</button>
      <button onClick={getRandom}> Random GIF</button>
      <br />
      <img className="gif" src={gif} />
    </div>
  );
}
