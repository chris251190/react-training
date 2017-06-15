var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {

        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className="languages">
            {languages.map(function(lang){
                //add a key when using map with <li>
                return <li
                    style={lang == props.selectedLanguage ? {color: '#d0021b'}: null}
                    onClick = {props.onSelect.bind(null, lang)}
                    key={lang}>
                    {lang}
                </li>
            }, this)}
        </ul>
        )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
    //when using state always add a constructor
    //we need a state here to determine which link is active
    constructor (props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        //makes sure that updateLanguage is called with the right context
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
            });
    }

    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                                onSelect={this.updateLanguage}
                />
            </div>
        )
    }
}

module.exports = Popular;