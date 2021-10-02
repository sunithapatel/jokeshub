import './App.css';
import laughimage from '../assets/laugh.png';
import laughinganimals from '../assets/laughing-animals.png';

function App() {
    return (
        <main>
            <header>
                <h1 class="question">Need Some Laughs?</h1>
                <img src={laughimage} alt="Big laugh" />
                <h2 class="message">Scroll through our random supply of jokes to get your fill today!</h2>
                <img class="laughing-image" src={laughinganimals} alt="Cute laughing animals" />
            </header>
            <section class="content">
                <div class="jokes-gallery">
                    <div class="joke-card">
                        What do you call a fake noodle? An impasta.
                    </div>
                    <div class="joke-card">
                        I decided to sell my Hoover… well it was just collecting dust.
                    </div>
                    <div class="joke-card">
                        What did the hat say to the scarf? 
                        <br /> 
                        You can hang around. I'll just go on ahead.
                    </div>
                    <div class="joke-card">
                        I don't trust stairs. They're always up to something.
                    </div>
                    <div class="joke-card">
                        I've just written a song about a tortilla. Well, it is more of a rap really.
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </main> 
    );
}

export default App;