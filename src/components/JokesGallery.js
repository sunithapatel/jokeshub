import React from 'react';

import './JokesGallery.css';

class JokesGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          jokes: [],
          comic: null
        };
    }

    componentDidMount() {
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("User-Agent", "My Jokes Hub (https://github.com/sunithapatel/jokeshub)");

        fetch("https://icanhazdadjoke.com/search?limit=5", { method: 'Get', headers: headers })
          .then(response => response.json())
          .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        jokes: result.results
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

    renderJokes() {
        return (
            this.state.jokes.map(joke => (
                <div key={joke.id} className="joke-card">
                    <div>{joke.joke}</div>
                    <div className="joke-card-buttons">
                        <span className="material-icons joke-card-button">grade</span>
                        <span className="material-icons joke-card-button">volume_up</span>                        
                    </div>
                </div>
            ))
        );
    }
    
    render() {
        return (
            <section className="jokes-gallery">
                {this.renderJokes()}
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