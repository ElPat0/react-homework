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

}