import "./App.css";
import Post from "./Post.js";
function App() {
  return (
    <div className="App bg-gray-100 dark:bg-kbook-default h-full w-full p-5 flex flex-col items-center">
      <Post />
      <Post />
    </div>
  );
}

export default App;
