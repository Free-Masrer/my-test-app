

import '@radix-ui/themes/styles.css';
import './App.css'
import { Theme } from '@radix-ui/themes';
import { Header, MyApp } from './copmponents';

function App() {

  return (
    <Theme accentColor="indigo">
      <Header />
      <MyApp />
    </Theme>
  )
}

export default App
