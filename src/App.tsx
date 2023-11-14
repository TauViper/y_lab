import { FC } from 'react';
import './App.css';
import { Header } from './Components/Content/Header/Header';
import { HashRouter } from 'react-router-dom';

import { SingUp } from 'src/Components/Content/SingUP/SingUp';

export const App: FC = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <main>
          <SingUp />
        </main>
      </div>
    </HashRouter>
  );
};
