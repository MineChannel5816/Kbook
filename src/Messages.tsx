import MessageItem from "./MessageItem";

import classNames from "classnames";
import { DateTime } from "luxon";

import type { Message } from "./App2";

//faker.locale = "it";

interface P {
  data: Message[];
}

function MessageDateReception(props: Message) {
  let dataJs = props.receivedAt;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toLocaleString(DateTime.DATETIME_SHORT);
  return (
    <div className="text-gray-500 text-sm place-self-center">{stringDate}</div>
  );
}

function Messages(props: P) {
  return (
    <div className="h-screen flex-grow flex flex-col-reverse bg-gray-100 dark:bg-kbook-default2 overflow-auto">
      {props.data.map((conversation, i) => {
        let direzioni = classNames("flex", "flex-col ", {
          "items-start": conversation.direction === "received",
          "items-end": conversation.direction !== "received",
        });
        return (
          <div key={i} className={direzioni}>
            <MessageDateReception {...conversation} />
            <MessageItem {...conversation} />
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
