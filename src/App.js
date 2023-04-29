import Welcome from './components/05_pages/Welcome';
import QuestionTemplate from './components/04_templates/QuestionTemplate';

import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.app}>
      <QuestionTemplate />
    </main>
  );
}

export default App;
