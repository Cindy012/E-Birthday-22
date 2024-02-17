import { useEffect, useState } from 'react';

// Assets
import './assets/css/App.css';

// Pages
import StartPage from './pages/startPage.tsx';
import BirthdayPage from './pages/birthdayPage.tsx';
import QuizPage from './pages/quizPage.tsx';

function App() {
  const [appState, setAppState] = useState<number>(0); // 0: begin of the app, 1: quiz, 2: birthday wish page
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<></>);

  useEffect(() => {
    function startQuiz(): void {
      setAppState(1);
    }

    function endQuiz(): void {
      setAppState(2);
    }

    function renderPage(): JSX.Element {
      switch (appState) {
        case 0:
          return (
            <StartPage startQuiz={startQuiz} />
          );
        case 1:
          return (
            <QuizPage endQuiz={endQuiz}/>
          );
        case 2:
          return (
            <BirthdayPage />
          );
        default:
          return <></>;
      }
    }

    setCurrentPage(renderPage());
  }, [appState]);

  return (
    <>
    {currentPage}
    </>
  );
}

export default App;