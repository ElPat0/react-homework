import React, {Component} from 'react';
import Cardholder from './components/Cardholder';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import images from './images.json';



makeRow = () => {
    images.sort(() => {
        return 0.5 - Math.random();
    });
    let row1set = [];
    let row2set = [];
    let row3set = [];

    for (let i = 0; i < 4; i++) {
        row1set.push(images[i]);
    };

    for (let i = 4; i < 8; i++) {
        row2set.push(images[i]);
    };

    for (let i = 8; i < 12; i++) {
        row3set.push(images[i]);
    };
    this.setState({ row1: row1set, row2: row2set, row3: row3set })
};

class Main extends Component {
    state = {
        row1: [],
        row2: [],
        row3: [],
        clicked: [],
        name: '',
        score: '',
        correct: ''

    };
    componentDidMount() {
        this.makeRow()
    };

    reset = () => {
        this.setState ({
        name: '',
        score: '',
        clicked: []
        });
        this.makeRow();
    };

};

handleInputChange = event => {
    
    const { name } = event.target;
    let check = false
    let newScore = this.state.score;

    const alreadyClicked = this.state.clicked;
    
    if (!alreadyClicked) {
        check = false;
    }
    else {
        for (let i = 0; i < alreadyClicked.length; i++) {
            
            if (alreadyClicked[i] == name) {
                check = true;
                
            }

        }
    };
    

    if (check === true) {
        
        this.setState({ guess: "true" });
    
        this.reset();
    }
    else {
        this.state.clicked.push(name);
        newScore++;
        this.setState({ score: newScore, guess: "false" });
        this.makeRow();
        
    }

};

render() ;{
    return (
        <div>
            <Scoreboard guess={this.state.guess} score={this.state.score}/>
            <Scoreboard />
            <Cardholder>
                
                    {this.state.row1.map((images, val) =>
                        <Card onClick={this.handleInputChange} image={images.imageURL} name={images.name} key={character.name} />)}
                </Cardholder>
                <Cardholder>
                    {this.state.rowTwo.map((character, val) =>
                        <Card onClick={this.handleInputChange} image={images.imageURL} name={images.name} key={images.name} />)}
                </Cardholder>
                <Cardholder>
                    {this.state.row3.map((images, val) =>
                        <Card onClick={this.handleInputChange} image={images.imageURL} name={images.name} key={images.name} />)}
                </Cardholder>
        
        </div>
    );
}



export default Main;