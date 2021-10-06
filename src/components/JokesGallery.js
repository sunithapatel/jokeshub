import React from 'react';

import './JokesGallery.css';

import JokeRating from './JokeRating';

class JokesGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          joke: null
        };
    }

    componentDidMount() {
        const headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("User-Agent", "My Jokes Hub (https://github.com/sunithapatel/jokeshub)");

        fetch("https://icanhazdadjoke.com/", { method: 'Get', headers: headers })
          .then(response => response.json())
          .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        joke: result.joke
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    
    render() {
        return (
            <section className="jokes-gallery">
                <div className="joke-card">
                    <div>{this.state.joke}</div>
                    <div className="joke-card-buttons">
                        <span className="material-icons joke-card-button">grade</span>
                        <span className="material-icons joke-card-button">volume_up</span>                        
                    </div>
                    <JokeRating />
                </div>
                <div className="jokes-source">
                    <span>
                        Source:
                        <a href="https://icanhazdadjoke.com">
                            <img className="logo" src="https://icanhazdadjoke.com/static/smile.svg" alt="icanhazdadjoke.com logo" height="24" width="24" />
                            icanhazdadjoke.com
                        </a>
                    </span>
                </div>
            </section>
        );
    }


}

export default JokesGallery;