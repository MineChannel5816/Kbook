import Conversation from "./Conversation";
import Messages from "./Messages";

function App() {
  return (
    <div className="App h-full w-full bg-gray-100 dark:bg-kbook-default">
      <Messages />
      <Conversation />
    </div>
  );
}

export default App;
