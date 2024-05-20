import React, { Component } from 'react';
import FilmPresentation from './FilmPresentation';
import { ListOfFilms } from './ListOfFilms';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: ListOfFilms
        };
    }
    render() {
        return <FilmPresentation films={this.state.films} />;
    }
}
export default Main