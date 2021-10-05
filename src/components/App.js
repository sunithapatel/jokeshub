import './App.css';
import laughimage from '../assets/laugh.png';
import laughinganimals from '../assets/laughing-animals.png';

function App() {
    return (
        <main>
            <header>
                <h1 className="question">Need Some Laughs?</h1>
                <img src={laughimage} alt="Big laugh" />
                <h2 className="message">Scroll through our random supply of jokes to get your fill today!</h2>
                <img className="laughing-image" src={laughinganimals} alt="Cute laughing animals" />
            </header>
            <section className="content">
                <div className="jokes-gallery">
                    <div className="joke-card">
                        What do you call a fake noodle? An impasta.
                    </div>
                    <div className="joke-card">
                        I decided to sell my Hoover… well it was just collecting dust.
                    </div>
                    <div className="joke-card">
                        What did the hat say to the scarf? 
                        <br /> 
                        You can hang around. I'll just go on ahead.
                    </div>
                    <div className="joke-card">
                        I don't trust stairs. They're always up to something.
                    </div>
                    <div className="joke-card">
                        I've just written a song about a tortilla. Well, it is more of a rap really.
                    </div>
                </div>
            </section>
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