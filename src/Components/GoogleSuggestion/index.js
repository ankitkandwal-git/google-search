import { Component } from "react";

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestion extends Component {
    state = {
        searchInput : ''
    }
    onChangeSearchInput = event =>{
        this.setState({searchInput:event.target.value})
    }
    updateSearchInput = value =>{
        this.setState({searchInput:value})
    }
    render(){
        const {searchInput} = this.state
        const {suggestionList} = this.props
        const searchResult = suggestionList.filter(eachSuggestion=>(
            eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase())
        ))
        return(
            <div className="app-container">
                <div className="google-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png " className="google-logo" alt="google logo"/>
                </div>
                 <div className="search-container">
                    <div className="search-icon-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" className="search-icon" alt="search icon"/>
                        <input type="search" className="search-input" placeholder="Search Google"
                            onChange={this.onChangeSearchInput} value={searchInput}/>
                    </div>
                    <ul className="suggestion-list">
                        {searchResult.map(eachSuggestion=>(
                            <SuggestionItem suggestionDetails={eachSuggestion} key={eachSuggestion.id} 
                                updateSearchInput={this.updateSearchInput}/>
                        ))}
                    </ul>
                 </div>
            </div>
        )
    }
}

export default GoogleSuggestion