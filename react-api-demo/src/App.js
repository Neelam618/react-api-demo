import './App.css';
import GetApi from './API methods/GetMethod'
import PostApi from './API methods/PostMethod'
import DeleteMethod from './API methods/DeleteMethod'
import PutMethod from './API methods/PutMethod'


function App() {
  
  return (
    <div>
      <GetApi />
      <PostApi />
      <DeleteMethod />
      <PutMethod />
    </div>
  );
}

export default App;