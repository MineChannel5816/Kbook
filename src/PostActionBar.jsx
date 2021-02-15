import * as Icons from "heroicons-react";

function PostActionBar(props) {
  return (
    <div className="divPostActionBar dark:text-white text-black text-opacity-80 dark:text-opacity-75">
      <div className="containerContatori mx-4 flex items-center">
        <div className="flex-grow">
          <div className="flex cursor-pointer hover:underline">
            <Icons.ThumbUpOutline /> {props.like}
          </div>
        </div>
        <div>
          <p className="float-right m-3 text-black dark:text-white text-opacity-90 dark:text-opacity-90 cursor-pointer hover:underline">
            Commenti: {props.comments}
          </p>
          <p className="float-right m-3 text-black dark:text-white text-opacity-90 dark:text-opacity-90 cursor-pointer hover:underline">
            Condivisioni: {props.share}
          </p>
        </div>
      </div>
      <hr className="mx-4 dark:border-gray-300 dark:border-opacity-20" />
      <div className="divActionBar flex justify-around mx-4 my-2 ">
        <button className="flex font-medium">
          <Icons.ThumbUpOutline className="mx-2" /> Mi Piace
        </button>
        <button className="flex font-medium">
          <Icons.UploadOutline className="mx-2" /> Condividi
        </button>
      </div>
      <hr className="mx-4 p-1 dark:border-gray-300 dark:border-opacity-20" />
    </div>
  );
}

export default PostActionBar;
