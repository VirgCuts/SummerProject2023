import {useState, useEffect} from 'react';
import{Link, useMatch, useResolvedPath} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

export function Home() {
    return(
        <div class="pageView">
            <div class="Home">
                <h1>Camp O Delhi</h1>
                <div class="image"> 
                    <img width={"700px"} height={"300px"}></img>
                </div>
                <p>
                    This is the Home.
                </p>
            </div>
        </div>
    );
}
export function BoardMembers() {
    return(
    <div class="pageView">
        <div>
            <p>
                Email the Board
            </p>
        </div>
        <div  class="BoardMembers">
            <div class="column">
                <div class="Member">A</div>
                <div class="Member">B</div>
                <div class="Member">C</div>
            </div>
            <div class="column">
                <div class="Member">D</div>
                <div class="Member">E</div>
                <div class="Member">F</div>
            </div>
            <div class="column">
                <div class="Member">G</div>
                <div class="Member">H</div>
                <div class="Member">I</div>
                
            </div>
        </div>
    </div>
    );
}

export function SocialMedia() {
    return(
        <div class="pageView">
        <div  class="SocialMedia">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

            </ul>
        </div>
        </div>
    );
}

export function TEMP3() {
    return(
        <div class="pageView">
        <div  class="SocialMedia">
            <p>
                This is TEMP3.
            </p>
        </div>    
        </div>
    );
}
function ActiveLink({to, children, ...props}) {
    console.log(6);
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( { path: resolvedPath.pathname, end : true});
  
    return (
      <li className ={isActive ? "active" : ""}>
         <Link to= {to} {...props}>
            {children}
         </Link>
      </li>
    )
  }

export function Navbar() {
    return (
    <header>
        <nav>
        <a>

        <img width={"100px"} height={"100px"}></img>
        </a>
                
            <div>
            <ul class = "nav-list">
                <div class="navItemContainer">
               <ul>
                    <ActiveLink to="/Home" className="nav-link"> Home </ActiveLink>
                </ul>
                </div>
                <div class="navItemContainer">
                <ul>
                    <ActiveLink to="/Board" className="nav-link"> Meet The Board </ActiveLink>
                </ul>
                </div>
                <div class="navItemContainer">
                <ul>
                    <ActiveLink to="/Social" className="nav-link"> Social Media</ActiveLink>
                </ul>
                </div>
                <div class="navItemContainer">
               <ul>
                    <ActiveLink to="/TEMP3" className="nav-link"> TEMP3 </ActiveLink>
                </ul>
                </div>
            </ul>
            <form role="search"></form>
        </div>
    </nav>

        </header>
    );
}

export function Footer() {
    //stacking p makes newlines which works
    return(
        <footer>
        <div class="footer-container">
            
            <p>
                @Trademark Me MotherFucker
            </p>
            <p>
                This is the Footer
            </p>
        </div>
        </footer>
    );
}
export default Navbar;