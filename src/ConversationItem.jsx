import * as Icons from "heroicons-react";
import { DateTime } from "luxon";

function returnRelative(date) {
  let dataJs = date;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toRelative();
  return <p className="text-gray-600">{stringDate}</p>;
}

function returnRead(reading) {
  if (Number(reading) === 1) {
    return <Icons.Bell className="text-blue-600 m-1" />;
  }
}

function returnTextRead(reading, message) {
  if (Number(reading) === 0) {
    return (
      <p className="w-44 h-6 overflow-x-hidden overflow-y-hidden text-gray-700">
        {message}
      </p>
    );
  } else {
    return (
      <p className="w-44 h-6 overflow-x-hidden overflow-y-hidden font-bold">
        {message}
      </p>
    );
  }
}

function returnNameRead(reading, name) {
  if (Number(reading) === 0) {
    return <p className="font-medium">{name}</p>;
  } else {
    return <p className="font-bold">{name}</p>;
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
      <div className="flex flex-col">
        {returnNameRead(props.isRead, props.name)}
        {returnTextRead(props.isRead, props.lastMessage)}
      </div>
      <p>{returnRelative(props.date)}</p>
      {returnRead(props.isRead)}
    </div>
  );
}

export default ConversationItem;
