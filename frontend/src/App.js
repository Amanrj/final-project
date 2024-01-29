import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Changed to BrowserRouter
import AppRouter from './components/routes/AppRouter'; // Adjusted the import path

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <AppRouter />
      
    </div>
  );
}

export default App;
