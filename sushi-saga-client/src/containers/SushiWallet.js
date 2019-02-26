import React, { Component } from 'react'




export default class SushiWallet extends Component{

    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }

    handleAmountInput = (e) =>{this.setState({amount: e.target.value})}

    submitAmountAdded = (e) =>{
        e.preventDefault()
        console.log(this.state.amount)
        this.props.addMoney(this.state.amount)
    }
    render(){
        return( 
            <form onSubmit={this.submitAmountAdded}>
                <label>
                    Add to wallet
                <input type="text" name="wallet" value={this.state.amount}  onChange={this.handleAmountInput}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}