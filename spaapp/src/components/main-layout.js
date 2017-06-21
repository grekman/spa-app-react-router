import React, {Component} from 'react';
import {Link} from 'react-router';
import {Footer, Navbar} from 'react-materialize';


export default class MainLayout extends Component {

  state = {
		time: 'night'
	}

	handleClick = () => {
		if(this.state.time === 'night') {
			this.setState({time: 'day'});
		} else {
			this.setState({time: 'night'});
		}
	}




  render() {
    console.log(this);
    return (
      <div className="bodytype">
        <header>
          <Navbar brand='5701' right>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/print">Print</Link></li>
            <li><Link to="/web">Web</Link></li>
            <li><Link to="/lostcats">Lost Cats</Link></li>
          </Navbar>
        </header>
        <main>
          {this.props.children}
        </main>
        <Footer copyrights="5701 CrossMedia"
	        moreLinks={
        	   <a className="grey-text text-lighten-4 right" href="#!">
               <Link className="grey-text text-lighten-4" to="/contacts">Contacts</Link>
             </a>
	        }>
        </Footer>
        <div className="Switch" data-time={this.state.time}>
        </div>
        <div onClick={this.handleClick}
          data-time={this.state.time}
          className="Toggle">
          <div className="Button"></div>
        </div>
      </div>
    )
  }
}
