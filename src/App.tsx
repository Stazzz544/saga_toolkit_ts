import { Counter } from './components/Cats/Cats';
import s from './styles/App.module.css';

function App() {
  return (
    <div className={s.App}>
		 <h1 className={s.title}>Get mme cats App</h1>
		 <Counter/>
    </div>
  );
}

export default App;
