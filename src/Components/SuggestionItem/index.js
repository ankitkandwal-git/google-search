import './index.css'

const SuggestionItem = props =>{
    const {suggestionDetails,updateSearchInput} = props
    const {suggestion} = suggestionDetails
    const onUpdateChange = () =>{
        updateSearchInput(suggestion)
    }
    return(
        <li className="suggestion-item">
           <p className="paragraph">{suggestion}</p>
           <button className="button-access" type="button" onClick={onUpdateChange}>
            <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png " className='arrow-icon' alt="arrow"/>
           </button>
        </li>
    )
}

export default SuggestionItem