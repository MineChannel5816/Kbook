import Post from "./Post";
function App() {
  //let Npost = new Array(3).fill({});
  return (
    <div className="App bg-gray-100 dark:bg-kbook-default h-full w-full p-5 flex flex-col items-center">
      {/* {Npost.map((post, i) => {
        return <Post key={i} />;
      })} */}
      <Post />
    </div>
  );
}

export default App;
