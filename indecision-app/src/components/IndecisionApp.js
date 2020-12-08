import React, { useState } from "react";
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption = (optionToRemove) => {
 
        this.setState((prevState)=>({ 
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }))

    }
    handlePick = () => {
        const randonNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randonNum]
        this.setState(() => ({selectedOption: option}))
    }
    handleAddOption = (option) => {
        if(!option){
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }
        this.setState((prevState)=> ({options: prevState.options.concat([option])}))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined})) 
    }
    componentDidMount(){
        try{
            const data = localStorage.getItem('options')
            const options = data? JSON.parse(data): []          
            this.setState(()=> ({ options }))
        } catch (error){
            // Do nothing ar all 
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            localStorage.setItem('options',JSON.stringify(this.state.options))
        }
        
    }
    render(){
        const title = 'Indecision'
        const subtitle = "Put your life in the hads of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}