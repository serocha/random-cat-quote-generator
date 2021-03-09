import './App.css';
import React, {Component} from 'react';
import Post from './components/InitialPost';
import Map from './components/Map';
import Modal from './components/Modal';

class App extends Component {
    state = {
        active: null,
        showPopup: false
    };

    onMapClick = (region) => {
        this.setState( {active: region, showPopup: true} )
        console.log(region + ' is active.')
    };

    closePopup = () => {
        const popupVal = this.state.showPopup;
        this.setState( {showPopup: !popupVal} )
    };

    render() {
        return (
            <div className="App">
                <div>{this.state.active}</div>
                <Post/>
                <Map active={this.state.active} clicked={ ()=>this.onMapClick() } />
                <Modal show={this.state.showPopup} clicked={ ()=>this.closePopup() } />
            </div>
        );
    }
}

export default App;
