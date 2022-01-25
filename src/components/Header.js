import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
   <Logo src="/images/logo.svg" />
    <NavMenu>
       <a>
         <img src="/images/home-icon.svg" />
         <span>HOME</span>


       </a>
       <a>
         <img src="/images/search-icon.svg" />
         <span>SEARCH</span>


       </a>
       <a>
         <img src="/images/watchlist-icon.svg" />
         <span>WATCHLIST</span>
      </a>
      <a>
         <img src="/images/original-icon.svg" />
         <span>ORIGINAL</span>
      </a>
      <a>
         <img src="/images/movie-icon.svg" />
         <span>MOVIES</span>
      </a>
      <a>
         <img src="/images/series-icon.svg" />
         <span>SERIES</span>
      </a>
     </NavMenu>
     <UserImg src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicjumbo.com%2Ffree-photos%2Floner%2F&psig=AOvVaw15G8fIf-0H-aZvzZAyhwnz&ust=1643203095996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj2stj-zPUCFQAAAAAdAAAAABAD"/>
  
  </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items:center
    padding: 0 36px;
`

const Logo = styled.img`
     width: 80px;`


     const NavMenu = styled.div`
     display: flex;
     flex: 1;
     margin-left: 25px;
     align-item: center;
     a {
       display: flex;
       align-items: center;
       padding: 0 12px;
       cursor: pointer;

       img {
          height: 20px;
         }

         span { 
           font-size: 13px;
           letter-spacing: 1.42px;
           position: relative;

           &:after {
             content:"";
             height: 2px;
             background: white;
             position: absolute;  
             left: 0;
             right: 0;                  
             bottom: -6px;
             opacity: 0;
             transform-origin: left center;
             transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
             transform: scale(0);

          }
        }
        &:hover {
          span:after {
           transform: scale(1);
           opacity: 1;
          }           
        }
    }
     `
  const UserImg = styled.img`
  width: 48px;
  height: 48px;
  boarder-radius: 50%;
  cursor: pointer;
  `

