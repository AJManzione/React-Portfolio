import React from 'react';
import MNFF from '../../assets/movies/MNFF-WT.gif';
import WL from '../../assets/movies/Wish-List-WT.gif';
import TPG from '../../assets/movies/TEAM-PROFILE-WT.gif';
import RG from '../../assets/movies/README-generator-WT.gif'
import githubIcon from '../../assets/icons/GitHub-Mark-120px-plus.png';
import youtubeIcon from '../../assets/icons/youtube-logo-png-2069.png';
import linkIcon from '../../assets/icons/link-icon.png'


export default function Portfolio() {
  return (
    <div className='container'>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className="text-center">Portfolio</h1>
          </div>
        </div>  
      </div>
      <br></br>
      <div className='container w-75'>
        <p class="text-center">Welcome to the work section of the website, here you will find a few of my favorite projects that I've deployed. The website portfolio was built with technologies of HTML and CSS and contain responsive dynamic web design. Below you'll find a few more pieces of work that I have completed over the fall.</p>
      </div>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
{/* Mickey n Friends Finder */}
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-header'>
              <h3 class="text-center">Mickey-n-Friends-Finder</h3>
              </div>
              <div className='card-body'>
                <img className="movies" src={MNFF}></img>
              </div>
              <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                <a href='https://github.com/wseban/Mickey-n-Friends-Finder'>
                  <img width="25px"src={githubIcon}></img>
                </a>
                <a href='https://wseban.github.io/Mickey-n-Friends-Finder/'>
                  <img width='40px' src={linkIcon}></img>
                </a>
              </div>
            </div>
          </div>
{/* Wish List Finder */}
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-header'>
              <h3 class="text-center">Wish List Finder</h3>
              </div>
              <div className='card-body'>
                <img className="movies" src={WL}></img>
              </div>
              <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                <a href='https://github.com/AJManzione/wish-list'>
                  <img width="25px"src={githubIcon}></img>
                </a>
                <a href='https://wish-list-maker.herokuapp.com/'>
                  <img width='40px' src={linkIcon}></img>
                </a>
              </div>
            </div>
          </div>

          <br></br>

          <div className='row mt-5 mb-5 text-center'>
            <hr></hr> 
            <h1> Command Line Apps</h1>
          </div>
{/* Team Profile Generator */}
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-header'>
                <h3 class="text-center">Team Profile Generator</h3>
                </div>
                <div className='card-body'>
                  <img className="movies" src={TPG}></img>
                </div>
                <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                  <a href='https://github.com/AJManzione/Team-Profile-Generator'>
                    <img width="25px"src={githubIcon}></img>
                  </a>
                  <a href='https://www.youtube.com/watch?v=P6LUVCYvg_4&t=20s'>
                    <img width='70px' src={youtubeIcon}></img>
                  </a>
                </div>
              </div>
            </div>
  {/* README.md Generator */}
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-header'>
                <h3 class="text-center">README.md Generator</h3>
                </div>
                <div className='card-body'>
                  <img className="movies" src={RG}></img>
                </div>
                <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                  <a href='https://github.com/AJManzione/generator-README'>
                    <img width="25px"src={githubIcon}></img>
                  </a>
                  <a href='https://www.youtube.com/watch?v=KFUMAhR1H-Q'>
                    <img width='70px' src={youtubeIcon}></img>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
);
}
