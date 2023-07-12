import React from 'react'
import porfileimage from "../images/IMG_4872.JPG"

function HomePage() {
  return (
    <div className='container text-center'>
      <h2>youcode</h2>

      <img src={porfileimage} className="profileimage"/>

      <p>
        ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。
        主にHTML/CSS/Javascript/Reactメインに取り扱っています。
        趣味は個人でプログラミングの撮影を行うことです。 
        ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。
        主にHTML/CSS/Javascript/Reactメインに取り扱っています。
        趣味は個人でプログラミングの撮影を行うことです。
      </p>
    </div>
  );
};

export default HomePage