import faker from "faker";
import * as Icons from "heroicons-react";
import classNames from "classnames";

function SetMessage(props) {
  let classes =
    "rounded-full p-0.5 m-0.5 text-gray-400 hover:bg-gray-500 hover:bg-opacity-20";

  let direzioni = classNames(
    "flex flex-col rounded-2xl p-2 px-3 leading-tight flex-shrink-2",
    {
      "bg-gray-400 dark:bg-gray-400 dark:bg-opacity-40 bg-opacity-90 text-black dark:text-white":
        props.direction === "received",
      "bg-blue-500 text-white": props.direction !== "received",
    }
  );

  if (props.direction === "received") {
    return (
      <div className="group">
        <div className={direzioni}>{props.body}</div>
        <div className="flex items-center group-hover:bg-red-300 opacity-0">
          <Icons.DotsVerticalOutline className={classes} />
          <Icons.Reply className={classes} />
          <Icons.EmojiHappyOutline className={classes + " mr-3"} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={direzioni}>{props.body}</div>
        <div className="flex opacity-0">
          <Icons.DotsVerticalOutline className={classes} />
          <Icons.Reply className={classes} />
          <Icons.EmojiHappyOutline className={classes + " mr-3"} />
        </div>
      </>
    );
  }
}

function SetPhoto(props) {
  if (props.direction === "received") {
    return (
      <img
        src={faker.image.imageUrl(35, 35)}
        className="rounded-full mr-3 mb-0"
        alt=""
      />
    );
  } else {
    return null;
  }
}

function SetIcon(props) {
  if (props.direction === "sent") {
    return <Icons.CheckCircle className="rounded-full h-6 w-6" alt="" />;
  } else {
    return null;
  }
}

function MessageItem(props) {
  return (
    <div className="flex flex-col items-center m-2 max-w-2xl">
      <div className="flex items-end">
        <SetPhoto {...props} />
        <SetMessage {...props} />
        <SetIcon {...props} />
      </div>
    </div>
  );
}

export default MessageItem;
