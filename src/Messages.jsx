import MessageItem from "./MessageItem";

import classNames from "classnames";
import { DateTime } from "luxon";
//faker.locale = "it";

function MessageDateReception(props) {
  let dataJs = props.receivedAt;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toLocaleString(DateTime.DATETIME_SHORT);
  return (
    <div className="text-gray-500 text-sm place-self-center">{stringDate}</div>
  );
}

function Messages(props) {
  console.log(props.data);
  return (
    <div className="h-screen flex-grow flex flex-col-reverse bg-gray-100 dark:bg-kbook-default2 overflow-auto">
      {props.data.map((message, i) => {
        let direzioni = classNames("flex", "flex-col ", {
          "items-start": message.direction === "received",
          "items-end": message.direction !== "received",
        });
        return (
          <div key={i} className={direzioni}>
            <MessageDateReception {...message} />
            <MessageItem {...message} />
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
