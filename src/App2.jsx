import ConversationItem from "./ConversationItem";

import ImgProfile from "./img/Profilo.png";
function App() {
  return (
    <div className="App h-full w-full">
      <ConversationItem
        name="Pino Peppino"
        imgProfile={ImgProfile}
        lastMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date={new Date(2021, 1, 1)}
        isRead="0"
      ></ConversationItem>
    </div>
  );
}

export default App;
