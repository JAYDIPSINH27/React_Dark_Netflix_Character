import React from 'react';
import nullimg from '../../img/nullimg.png'

const CharacterItem = ({item}) => {
    // console.log(item)
    var image;
    if(item.profile_path===null){
         image=nullimg
    }
    else{

        image=`https://www.themoviedb.org/t/p/w150_and_h150_face/${item.profile_path}`
    }
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={image} alt={item.roles[0].character} />
          </div>
          <div className='card-back'>
            <h1>{item.roles[0].character}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.name}
              </li>
              <li>
                <strong>Total Episode Count:</strong> {item.total_episode_count}
              </li>
              <li>
                <strong>Popularity:</strong> {item.popularity}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem;
