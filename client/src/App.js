
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AppWithRouterAccess  from './AppWithRouterAccess'
import ContextProvider from './components/ContextProvider';


// import Header from './components/Header';
// import Home from './components/home/Home';
// import DetailView from './components/posts/DetailView';
// import CreateView from './components/posts/CreateView';
// import UpdateView from './components/posts/UpdateView';


function App() {
  return (
    <>
    <ContextProvider>
    <BrowserRouter>
    <AppWithRouterAccess />
    </BrowserRouter>
    </ContextProvider>
    </>
  );
}

export default App;
