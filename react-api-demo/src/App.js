import './App.css';
import GetApi from './API methods/GetApi'
import PostApi from './API methods/PostApi'
import DeleteMethod from './API methods/DeleteMethod'

function App() {
  
  return (
    <div>
      <GetApi />
      <PostApi />
      <DeleteMethod />
    </div>
  );
}

export default App;