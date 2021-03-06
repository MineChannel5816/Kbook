import * as Icons from "heroicons-react";
import { DateTime } from "luxon";

import type { Conversation } from "./App2";

function MessageRelativeDay(props: P) {
  let dataJs = props.conversation.date;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toRelative({ style: "narrow" });
  return (
    <p className="text-gray-600 dark:text-gray-500 text-sm">
      {"·"}
      {stringDate}
    </p>
  );
}

function MessageReadIcon(props: P) {
  if (props.conversation.isRead) {
    return <Icons.Bell className="text-blue-600 m-1" />;
  } else {
    return null;
  }
}

function MessageText(props: P) {
  if (!props.conversation.isRead) {
    return (
      <p className="truncate w-44 text-gray-700 dark:text-white">
        {props.conversation.lastMessage}
      </p>
    );
  } else {
    return (
      <p className="truncate w-44 font-bold dark:text-blue-500">
        {props.conversation.lastMessage}
      </p>
    );
  }
}

function MessageOwner(props: P) {
  if (!props.conversation.isRead) {
    return (
      <p className="font-medium dark:text-white">
        {props.conversation.username}
      </p>
    );
  } else {
    return (
      <p className="font-bold dark:text-white">{props.conversation.username}</p>
    );
  }
}

interface P {
  conversation: Conversation;
  onClick: (chat: Conversation) => void;
}

function ConversationItem(props: P) {
  console.log(props.onClick);
  return (
    <div
      className="flex items-center w-full max-w-sm m-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-kbook-default2 rounded-md"
      onClick={() => props.onClick(props.conversation)}
    >
      <img
        src={props.conversation.imgProfile}
        alt="ImgProfile"
        loading="lazy"
        className="h-12 w-12 rounded-full m-2 mr-4"
      />
      <div className="flex flex-grow flex-col flex-shrink">
        <MessageOwner {...props} />
        <div className="flex items-center">
          <MessageText {...props} />
          <MessageRelativeDay {...props} />
        </div>
      </div>
      <div className="w-8 float-right right-0">
        <MessageReadIcon {...props} />
      </div>
    </div>
  );
}

export default ConversationItem;
