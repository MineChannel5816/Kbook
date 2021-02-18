import React, { useState } from "react";

import * as Icons from "heroicons-react";

function SetMessage(props) {
  const [isShown, setIsShown] = useState(false);
  if (props.direction === "received") {
    return (
      <>
        <div
          className={`flex flex-col rounded-2xl p-2 px-3 leading-tight flex-shrink-2 ${
            props.direction === "received"
              ? "bg-gray-400 bg-opacity-90 text-black"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => setIsShown(!isShown)}
        >
          {props.body}
        </div>
        <div className="flex w-40">
          {isShown && (
            <>
              <Icons.EmojiHappyOutline className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20 ml-3" />
              <Icons.Reply className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20" />
              <Icons.DotsVerticalOutline className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20" />
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex w-40">
          {isShown && (
            <>
              <Icons.DotsVerticalOutline className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20" />
              <Icons.Reply className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20" />
              <Icons.EmojiHappyOutline className="rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20 mr-3" />
            </>
          )}
        </div>
        <div
          className={`flex flex-col rounded-2xl p-2 px-3 leading-tight flex-shrink-2 ${
            props.direction === "received"
              ? "bg-gray-400 bg-opacity-90 text-black"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => setIsShown(!isShown)}
        >
          {props.body}
        </div>
      </>
    );
  }
}

function MessageItem(props) {
  return (
    <div className="flex flex-col items-center m-2 mt-0 mb-8 max-w-2xl">
      <div className="flex items-center">
        <SetMessage {...props} />
      </div>
    </div>
  );
}

export default MessageItem;
