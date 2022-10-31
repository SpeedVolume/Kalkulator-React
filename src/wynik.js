import React, {Component} from 'react';
class Wynik extends Component {


    render() {
        let {wynik} = this.props;
        return (
            <div className="wynik">
               <p>{wynik}</p>
            </div>
    )
        ;
    }
}


export default Wynik;