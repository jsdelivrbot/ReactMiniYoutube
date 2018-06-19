import React from 'react';

const VideoListItem = ({video}) => {  // ({video}) = const video = props.video
console.log(video);
  //const video = props.video;

  const imgUrl = video.snippet.thumbnails.default.url;
  return (

    <li className='list-group-item'>

      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;


/*

import React from 'react';

const VideoListItem = (props) => {  // ({video}) = const video = props.video
  //const video = props.video;

  //const imgUrl = videos.snippet.thumbnails.default.url;
  return (

    <li className='list-group-item'>

      <div className='video-list media'>
          {props.videos.length}
        <div className='media-left'>
          <img className='media-object' src={imgUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videos.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
*/
