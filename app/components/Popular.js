var React = require('react');

class Popular extends React.Component {
    //when using stte always add a constructor
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
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className="languages">
                {languages.map(function(lang){
                //add a key when using map with <li>
                return <li
                    style={lang == this.state.selectedLanguage ? {color: '#d0021b'}: null}
                    onClick = {this.updateLanguage.bind(null, lang)}
                    key={lang}>
                    {lang}
                    </li>
            }, this)}
            </ul>
        )
    }
}

module.exports = Popular;