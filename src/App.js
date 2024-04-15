import './App.css';
import {useSelector} from 'react-redux';
import PostList from './components/postList';
import PostForm from './components/postForm';
import './styles/app.css';

function App() {


  return (
    <div className="App">
      <h1>Challenge</h1>

      <div className='contenedor-post'>

        <PostList/>
        <PostForm/>

      </div>
      

    </div>
  );
}

export default App;
