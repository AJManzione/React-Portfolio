import React from 'react';
import MNFF from '../../assets/movies/MNFF-WT.gif';
import WL from '../../assets/movies/Wish-List-WT.gif';
import TPG from '../../assets/movies/TEAM-PROFILE-WT.gif';
import RG from '../../assets/movies/README-generator-WT.gif';
import WD from '../../assets/movies/Weather-Tracker.png';
import WDS from '../../assets/movies/Work-Day-Scheduler.png';
import githubIcon from '../../assets/icons/GitHub-Mark-120px-plus.png';
import githhubIconWhite from '../../assets/icons/GitHub-Mark-Light-120px-plus.png'
import youtubeIcon from '../../assets/icons/youtube-logo-png-2069.png';
import linkIcon from '../../assets/icons/link-icon.png';
import linkIconWhite from '../../assets/icons/link-icon-white.png';


export default function Portfolio() {
  return (
    <div className='container mt-3'>
      <h1 className="text-center">Portfolio</h1>
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
                <img className="movies" src={MNFF} alt=''></img>
              </div>
              <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                <a target='__blank' href='https://github.com/wseban/Mickey-n-Friends-Finder'>
                  <img width="25px"src={githhubIconWhite} alt=''></img>
                </a>
                <a target='__blank' href='https://wseban.github.io/Mickey-n-Friends-Finder/'>
                  <img width='40px' src={linkIconWhite} alt=''></img>
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
                <img className="movies" src={WL} alt=''></img>
              </div>
              <div className='card-footer d-flex flex-row justify-content-around align-items-sm-center'>
                <a target='__blank' href='https://github.com/AJManzione/wish-list'>
                  <img width="25px"src={githhubIconWhite} alt=''></img>
                </a>
                <a target='__blank' href='https://wish-list-maker.herokuapp.com/'>
                  <img width='40px' src={linkIconWhite} alt=''></img>
                </a>
              </div>
            </div>
          </div>

          <br></br>


          {/* -------------------------------------------------------------------------- */
          /*                              COMMAND LINE APPS                             */
          /* -------------------------------------------------------------------------- */}

          <div className='row mt-5 mb-5 text-center'>
            <hr></hr> 
            <h1> Half Stack && CLI App's</h1>
          </div>
{/* Team Profile Generator */}
          <div className='col-lg-4'>
            <h6 className='text-center'>Team Profile Generator</h6>
            <img className="movies-small" src={TPG} alt=''></img>
            <div className='d-flex flex-row justify-content-around align-items-center'>
              <a target='__blank' href='https://github.com/AJManzione/Team-Profile-Generator'>
                <img width="25px"src={githubIcon} alt=''></img>
              </a>
              <a target='__blank' href='https://www.youtube.com/watch?v=P6LUVCYvg_4&t=20s'>
                <img width='70px' src={youtubeIcon} alt=''></img>
              </a>
            </div>
          </div>
{/* README.md Generator */}
          <div className='col-lg-4'>
          <h6 className='text-center'>README.md Generator</h6>
            <img className="movies-small" src={RG} alt=''></img>
            <div className='d-flex flex-row justify-content-around align-items-center'>
              <a target='__blank' href='https://github.com/AJManzione/generator-README'>
                <img width="25px"src={githubIcon} alt=''></img>
              </a>
              <a target='__blank' href='https://www.youtube.com/watch?v=KFUMAhR1H-Q'>
                <img width='70px' src={youtubeIcon} alt=''></img>
              </a>
            </div>
          </div>
{/* Weather Tracker */}
            <div className='col-lg-4'>
              <h6 className='text-center'>Weather Dashboard</h6>
              <img className="movies-small" src={WD} alt=''></img>
                <div className='d-flex flex-row justify-content-around m-2 align-items-center'>
                <a target='__blank' href='https://github.com/AJManzione/Weather-Tracker'>
                  <img width="25px"src={githubIcon} alt=''></img>
                </a>
                <a target='__blank' href='https://ajmanzione.github.io/Weather-Tracker/'>
                  <img width='40px' src={linkIcon} alt=''></img>
                </a>
              </div>
            </div>
{/* Work Day Scheduler */}
          <div className='d-flex justify-content-center mt-3'>
            <div className='col-lg-4'>
              <h6 className='text-center'>Work Day Scheduler</h6>
              <img className="movies-small" src={WDS} alt=''></img>
                <div className='d-flex flex-row justify-content-around m-2 align-items-center'>
                  <a target='__blank' href='https://github.com/AJManzione/Work-Day-Scheduler'>
                    <img width="25px"src={githubIcon} alt=''></img>
                  </a>
                  <a target='__blank' href='https://ajmanzione.github.io/Work-Day-Scheduler/'>
                    <img width='40px' src={linkIcon} alt=''></img>
                  </a>
                </div>
              </div>
          </div>  
        </div>
      </div>
    </div>
);
}
