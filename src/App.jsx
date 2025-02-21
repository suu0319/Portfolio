import './App.css';
import { useState } from 'react';
import Card from './Card';

function App() {
    const [currentPage, setCurrentPage] = useState('about');
    const [page, setPage] = useState(1);
    const cardsPerPage = 5;

    const allCards = {
        about: [],
        unity: [
            {
                image: "https://github.com/suu0319/UnitySodukuSolver/assets/59763965/b15ff344-a039-4197-98fd-31a98f1cb779",
                title: "UnitySodukuSolverWebGL",
                description: "The project is built using GitHub and WebGL to be accessible as a web application.\n" +
                    "\n" +
                    "<a href='https://suu0319.github.io/UnitySodukuSolverWebGL/' target='_blank' rel='noopener noreferrer'>WebGL</a>\n" +
                    "<a href='https://github.com/suu0319/UnitySodukuSolverWebGL' target='_blank' rel='noopener noreferrer'>GitHub</a>\n"
            },
            {
                image: "https://user-images.githubusercontent.com/59763965/207563453-26ceeabc-c5a4-4805-975a-9a2c1fd8ce86.png",
                title: "StealthEscape",
                description: "Third-person sneak escape game, avoid enemies and traps to reach the end!\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/StealthEscape' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/1EC5p_LRRR2muFhwhWf_w4FLeW5oEt7u3/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/user-attachments/assets/b22a5b28-4b56-480f-b84a-d2fcecae56fd",
                title: "Inside The School",
                description: "A first-person, two-player horror online puzzle game in which two students meet in the middle of the night to explore a school, but the atmosphere gets weirder and weirder as they go deeper and deeper into their quest...\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/Inside-The-School' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://youtu.be/5y0IVB4NLoI' target='_blank' rel='noopener noreferrer'>Youtube</a>\n" +
                    "<a href='https://drive.google.com/file/d/1Z2OvgnXYSaK7fk5Uvr4yQ03XtLWIhCho/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/suu0319/The-Dimension/assets/59763965/8d78a7de-c210-4a8b-928e-60ebed6786c6",
                title: "The Dimension",
                description: "Third-person sneak escape game, avoid enemies and traps to reach the end!\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/The-Dimension' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://youtu.be/VQ43wC4gwQE' target='_blank' rel='noopener noreferrer'>Youtube</a>\n" +
                    "<a href='https://drive.google.com/file/d/13JhYa-Ha9KKUYCki_bYB0H1V4V92O05u/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            }
        ],
        wpf: [
            {
                image: "https://github.com/user-attachments/assets/3f3b218d-d334-437e-b19c-015b7573c30b",
                title: "FPSCounterWPF",
                description: "Use WPF to simulate an OSD FPS Counter by reading FPS data from RTSS.\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/FPSCounterWPF' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/12ok8IHk1W6jNaFccj4RRMm_Zg6jMeTBG/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/user-attachments/assets/6a89c8d5-d71e-46ac-b14f-2976661b8d6e",
                title: "FanControlWPF",
                description: "Use WPF to create a fan control application by reading data from LibreHardwareMonitor.\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/FanControlWPF' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/1AQG10ceaiQ7PrSSDvl3_xsMlpcvLUjHR/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            }
        ],
        other: [
            {
                image: "https://github.com/suu0319/LineWeatherBot/assets/59763965/1ede85d1-0016-45f6-afd6-72512e07192b",
                title: "Line Weather Bot",
                description: "Interact with the weather bot using commands. The forecast provides weather predictions for the next 36 hours (currently limited to city-level forecasts).\n" +
                    "\n" +
                    "Line ID: @722uomez\n" +
                    "<a href='https://github.com/suu0319/LineWeatherBot' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/12ok8IHk1W6jNaFccj4RRMm_Zg6jMeTBG/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/suu0319/Sudoku/assets/59763965/34a6b19e-0929-4863-abf2-9146770c7770",
                title: "Sudoku Generator/Solver",
                description: "Generate and solve Sudoku using the Backtracking algorithm.\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/Sudoku' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/12urV3VvapXN9vBBuEePJWUU0XKsEp_lx/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/suu0319/Perpetual-Calendar/assets/59763965/81efc973-9eca-4849-8458-9182b6c5021a",
                title: "Perpetual Calendar",
                description: "A 4x3 calendar console application.\n" +
                    "Displays the annual calendar for the input year (requires 1920x1080+ resolution and maximized window).\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/Perpetual-Calendar' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/1iWou1zvO_Ox3TKsWPrbUMdSrYiWLXUKL/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            },
            {
                image: "https://github.com/suu0319/Bulls-Cows/assets/59763965/532e1573-940f-4be8-8ba5-65996b2044bb",
                title: "Bulls Cows",
                description: "Console application.\n" +
                    "The program randomly generates a four-digit answer at the start.\n" +
                    "After entering a number, the program provides feedback in the form of \"X A, Y B\" to guide the user.\n" +
                    "\n" +
                    "Hint:\n" +
                    "A: A digit is in the answer and in the correct position.  \n" +
                    "B: A digit is in the answer but in a different position.  \n" +
                    "\n" +
                    "The program also keeps track of the total number of attempts made by the player.\n" +
                    "\n" +
                    "<a href='https://github.com/suu0319/Bulls-Cows' target='_blank' rel='noopener noreferrer'>GitHub</a>\n" +
                    "<a href='https://drive.google.com/file/d/12ok8IHk1W6jNaFccj4RRMm_Zg6jMeTBG/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Google Drive</a>",
            }
        ]
    };

    const displayedCards = allCards[currentPage];
    const totalPages = Math.ceil(displayedCards.length / cardsPerPage);
    const startIndex = (page - 1) * cardsPerPage;
    const cardsToDisplay = displayedCards.slice(startIndex, startIndex + cardsPerPage);

    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return (
                    <div className="about-container">
                        <h2>Welcome to my personal portfolio website!</h2>
                        <p>Hi! I’m Ryan, with 2 years of work experience in Unity front-end and .NET back-end.</p>
                        <p>Gmail: chino890319@gmail.com</p>
                        <p>
                            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>
                    </div>
                );
            case 'unity':
            case 'wpf':
            case 'other':
                return (
                    <div className="card-container">
                        {cardsToDisplay.map((card, index) => (
                            <Card key={index} image={card.image} title={card.title} description={card.description} />
                        ))}
                        <div className="pagination">
                            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                                Previous
                            </button>
                            <span> Page {page} of {totalPages} </span>
                            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>
                );
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div className="App">
            <header className="top-card">
                <nav>
                    <button onClick={() => setCurrentPage('about')}>ABOUT</button>
                    <button onClick={() => setCurrentPage('unity')}>Unity</button>
                    <button onClick={() => setCurrentPage('wpf')}>WPF</button>
                    <button onClick={() => setCurrentPage('other')}>Other</button>
                </nav>
            </header>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;