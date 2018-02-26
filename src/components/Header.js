import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../images/hamburger.svg';
import './styles.css';

class Header extends Component {
 
 
  constructor(props){
    super(props);
    this.state = {menuOpen: false, hover: false, circleSize:'10vh', circleClass: 'circle transform'};
  }



  render() {
    return(
    <div class={this.state.circleClass} onClick = {this.toggleOpen}  >
    {(() => {
        if(this.state.menuOpen) {
          return this.menuContent()
        }
        else{
        
          return this.hamburgerIcon()
        }
      })()}
    </div>
)}


menuContent = () => {
  

  return(
    <div className='navContent'>
    <nav>
    <ul>
        
      <li><Link to='/'>home</Link></li>
      <li><Link to='/projects'>projects</Link></li>
      <li><Link to='/resume'>resume</Link></li>
      <li><Link to='/contact'>contact</Link></li>
    </ul>
  </nav>
  </div>
  )
}

hamburgerIcon = () => {
  

  let style = {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: this.state.circleSize }
  
  let imageStyle = {height: '60%', width:'auto'};
  return(
    <div style = {style}>
    <img src={hamburger} style={imageStyle}/>
    </div>
  )
}

toggleOpen = (e) => {

if(this.state.menuOpen){
  this.setState({circleClass:'circle transform '});
  this.setState({menuOpen:false});
}
else{
  this.setState({circleClass:'circle transform transform-active'});
  this.setState({menuOpen:true});
}
}

}

export default Header