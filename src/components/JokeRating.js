import React from 'react';

import './JokeRating.css';

class JokeRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodGif: null,
            badGif: null
        }
    }

    componentDidMount() {
        const API_KEY = "<api_key>";

        const options = { 
            method: 'GET', 
            mode:'cors' 
        };

        fetch("https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY + "&tag=good+joke&rating=g", options)
          .then(response => response.json())
          .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        goodGif: result?.data?.image_url
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        
        fetch("https://api.giphy.com/v1/gifs/random?api_key=" + API_KEY + "&tag=thumbs+down&rating=g", options)
            .then(response => response.json())
            .then(
                  (result) => {
                      this.setState({
                          isLoaded: true,
                          badGif: result?.data?.image_url
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
            <div className="rating">
                <div className="rating-option">
                    <h4>Good one!</h4>
                    <img src={this.state.goodGif} alt="Good joke!" />
                </div>
                <div className="rating-option">
                    <h4>Ughhhhh!</h4>
                    <img src={this.state.badGif} alt="Bad joke!" />
                </div>
            </div>
        );
    }
}

export default JokeRating;