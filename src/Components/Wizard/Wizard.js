import React from 'react'
import { Link } from 'react-router-dom'

class Wizard extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    handleInputName = (val) => {this.setState({name: val})}
    handleInputAddress = (text) => {this.setState({address: text})}
    handleInputCity = (text) => {this.setState({city: text})}
    handleInputState = (text) => {this.setState({state: text})}
    handleInputZip = (num) => {this.setState({zip: num})}
    render() {
        console.log(this.state.zip)
        return (
            <div className="Wizard">
                <div className="sidebars"></div>
                <div className="wizardInfo">
                    <div className="wizardHeader">
                        <div className="wizardTitle">Add New Listing</div>
                        <Link to='/'><button className='wizardCancel'>Cancel</button></Link>
                    </div>
                    <h4>Property Name</h4>
                    <input type='text'
                        onChange={e => this.handleInputName(e.target.value)}/>
                    <h4>Address</h4>
                    <input type="text"
                        onChange={e => this.handleInputAddress(e.target.value)}/>
                    <h4>City</h4>
                    <input type="text" 
                    onChange={e => this.handleInputCity(e.target.value)}/>
                    <h4>State</h4>
                    <input type="text" 
                    onChange={e => this.handleInputState(e.target.value)}/>
                    <h4>Zip</h4>
                    <input type="number" 
                    onChange={e => this.handleInputZip(e.target.value)}/>
                    <button className='completeBtn'>Complete</button>
                </div>
                <div className="sidebars"></div>
            </div>
        )
    }
}
export default Wizard;