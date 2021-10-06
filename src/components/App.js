import './App.css';
import laughimage from '../assets/laugh.png';
import laughinganimals from '../assets/laughing-animals.png';

import JokesGallery from './JokesGallery';

function App() {
    return (
        <main>
            <header>
                <h1 className="question">Need a Laugh?</h1>
                <img src={laughimage} alt="Big laugh" />
                <h2 className="message">Check out the random Joke of the Day!</h2>
                <img className="laughing-image" src={laughinganimals} alt="Cute laughing animals" />
            </header>
            <JokesGallery />
            <footer>
                Created by Sunitha Patel 
                <a href="https://github.com/sunithapatel/jokeshub">
                    <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="Github logo" />
                </a>
            </footer>
        </main> 
    );
}

export default App;