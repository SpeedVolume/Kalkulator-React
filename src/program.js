import React, { Component } from 'react';
import './program.css';
import Wynik from './wynik';
import Klawiatura from "./przyciski";

class App extends Component {
    constructor(){
        super();

        this.state = {
            wynik: "",
            text: "Make a calculation: ",
        };
    }
    
    onClick = button => {

        if(button === "C"){
            this.resetowanie()
        }

        else if(button === "="){
            this.licz()
            this.ciekawostka()
        }
        else if(button === "CE"){
            this.cofnięcie()
        }
        else if(button === "=" && this.state.wynik !=null){
            this.resetowanie()
        }

        else {
            this.setState({
                wynik:
             this.state.wynik + button
            })
        }
    };
    
    resetowanie = () => {
        this.setState({
            wynik: ""
        })
    };


    licz = () => {
        try {
            this.setState({
                wynik:
             (eval(this.state.wynik) || "" ) + "",
            })
        } 
        catch (e) {
            this.setState({
                wynik:
             "Błąd!"
            })

        }
    };
    
    cofnięcie = () => {
        this.setState({
            wynik:
         this.state.wynik.slice(0, -1)
        })
    };
    
    ciekawostka = () => {
        console.log(this.state.wynik);
        fetch(`http://numbersapi.com/${eval(this.state.wynik)}/year?json`)
        .then(res => {
         if(res.ok) {
             return res
         }
         throw Error(res.status)
         })
     .then(res =>  res.json())
     .then(data => this.setState({
         text: "In this year: " + data.text
     }))
     .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="kalkulator_css">
                    <h1>Kalkulator: Alan Wiśniewski</h1>
                    <Wynik wynik={this.state.wynik}/>
                    <Klawiatura onClick={this.onClick}/>
                </div>
                <h2> History Trivia: </h2>
                <div className="ciekawostki">
                  <p>{this.state.text}</p>
                  </div>
            </div>
            
        );
        
    }
    
}

export default App;