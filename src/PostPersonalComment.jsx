import * as Icons from "heroicons-react";
function PostPersonalComment(props) {
  return (
    <div className="divPostPersonalComment flex items-center m-1">
      <img
        src={props.imgProfile}
        alt="imgProfileComment"
        className="rounded-full max-h-10 ml-3 border border-gray-300 hover:border-gray-400 hover:opacity-95"
      />
      <div className="flex-grow">
        <div className="divPersonalComment flex rounded-full bg-gray-100 dark:bg-gray-400 dark:bg-opacity-20 p-2 m-2 ml-4 shadow-md">
          <input
            type="text"
            className="flex-grow bg-gray-100 dark:bg-transparent dark:text-white dark:text-opacity-85 px-2 outline-none"
            placeholder="Scrivi un commento publico..."
          ></input>
          <button className="text-gray-400 mx-1 focus:outline-none">
            <Icons.EmojiHappyOutline />
          </button>
          <button className="text-gray-400 mx-1 focus:outline-none">
            <Icons.CameraOutline />
          </button>
          <button className="text-gray-400 mx-1 focus:outline-none">
            <Icons.PlusCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPersonalComment;
