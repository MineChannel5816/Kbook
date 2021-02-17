import * as Icons from "heroicons-react";
import { DateTime } from "luxon";

function returnRelative(date) {
  let dataJs = date;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toRelative();
  return stringDate;
}

function returnRead(Reading) {
  if (Number(Reading) === 1) {
    return <Icons.Bell className="text-blue-600 m-1" />;
  }
}

function returnTextRead(Reading, message) {
  if (Number(Reading) === 0) {
    return (
      <p className="w-40 h-6 overflow-x-hidden overflow-y-hidden">{message}</p>
    );
  } else {
    return (
      <p className="w-40 h-6 overflow-x-hidden overflow-y-hidden font-bold">
        {message}
      </p>
    );
  }
}

function ConversationItem(props) {
  return (
    <div className="flex items-center max-h-14 w-full">
      <img
        src={props.imgProfile}
        alt="ImgProfile"
        className="h-12 w-12 rounded-full m-2"
      />
      <div className="flex flex-col">
        <p className="font-bold">{props.name}</p>
        {returnTextRead(props.isRead, props.lastMessage)}
      </div>
      <p>{returnRelative(props.date)}</p>
      {returnRead(props.isRead)}
    </div>
  );
}

export default ConversationItem;
