import * as Icons from "heroicons-react";
import { DateTime } from "luxon";

function MessageRelativeDay(props) {
  let dataJs = props.date;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toRelative({ style: "narrow" });
  return (
    <p className="text-gray-600 text-sm">
      {"·"}
      {stringDate}
    </p>
  );
}

function MessageReadIcon(props) {
  if (props.isRead) {
    return <Icons.Bell className="text-blue-600 m-1" />;
  } else {
    return null;
  }
}

function MessageText(props) {
  if (!props.isRead) {
    return <p className="truncate w-44 text-gray-700">{props.lastMessage}</p>;
  } else {
    return <p className="truncate w-44 font-bold">{props.lastMessage}</p>;
  }
}

function MessageOwner(props) {
  if (!props.isRead) {
    return <p className="font-medium">{props.username}</p>;
  } else {
    return <p className="font-bold">{props.username}</p>;
  }
}

function ConversationItem(props) {
  return (
    <div className="flex items-center max-h-14 w-full m-1 cursor-pointer hover:bg-gray-200 rounded-md">
      <img
        src={props.imgProfile}
        alt="ImgProfile"
        className="h-12 w-12 rounded-full m-2 mr-4"
      />
      <div className="flex flex-grow flex-col flex-shrink">
        <MessageOwner {...props} />
        <div className="flex items-center">
          <MessageText {...props} />
          <MessageRelativeDay date={props.date} />
        </div>
      </div>
      <div className="w-8 float-right right-0">
        <MessageReadIcon {...props} />
      </div>
    </div>
  );
}

export default ConversationItem;
