import * as Icons from "heroicons-react";

function PostActionBar(props) {
  return (
    <div className="divPostActionBar dark:text-white text-black text-opacity-90 dark:text-opacity-75">
      <div className="containerContatori mx-4 flex items-center">
        <div className="flex-grow">
          <div className="flex">
            <Icons.ThumbUpOutline /> {props.like}
          </div>
        </div>
        <div>
          <p className="float-right m-3 dark:text-white ">
            Commenti: {props.comments}
          </p>
        </div>
      </div>
      <hr className="mx-4 dark:opacity-20" />
      <div className="divActionBar flex justify-around mx-4 my-2 ">
        <button className="flex font-medium">
          <Icons.ThumbUpOutline className="mx-2" /> Mi Piace
        </button>
        <button className="flex font-medium">
          <Icons.UploadOutline className="mx-2" /> Condividi
        </button>
      </div>
      <hr className="mx-4 p-1 dark:opacity-20" />
    </div>
  );
}

export default PostActionBar;
