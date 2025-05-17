import { createRoot } from 'react-dom/client';
import { App } from './App'


// O primeiro é o que eu quero renderizar e o segundo é onde que eu quero renderizar
const root = createRoot(document.getElementById('root'));
root.render(<App />);