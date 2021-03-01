import * as Icons from "heroicons-react";

function returnPostActivity(props: P) {
  if (props.comments != null && props.share != null) {
    return (
      <>
        <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
          Commenti: {props.comments}
        </p>
        <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
          Condivisioni: {props.share}
        </p>
      </>
    );
  } else if (props.comments != null) {
    return (
      <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
        Commenti: {props.comments}
      </p>
    );
  } else if (props.share != null) {
    return (
      <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
        Condivisioni: {props.share}
      </p>
    );
  }
}

function counterActivity(props: P) {
  let sum = Number(props.comments) + Number(props.like) + Number(props.share);

  if (sum > 0) {
    return (
      <>
        <div className="flex-grow my-3">
          <div className="flex cursor-pointer hover:underline w-12">
            <Icons.ThumbUpOutline /> {sum}
          </div>
        </div>
      </>
    );
  }
}

interface P {
  comments: number;
  share: number;
  like: number;
}

function PostActionBar(props: P) {
  return (
    <div className="divPostActionBar dark:text-white text-black text-opacity-80 dark:text-opacity-75">
      <div className="containerContatori mx-4 flex items-center">
        {counterActivity(props)}
        <div>{returnPostActivity(props)}</div>
      </div>
      <hr className="mx-4 dark:border-gray-300 dark:border-opacity-20" />
      <div className="divActionBar flex justify-around mx-4 my-2 ">
        <button className="flex font-medium hover:bg-gray-100 rounded-md py-2 px-12 dark:hover:bg-kbook-default focus:outline-none transform active:scale-95">
          <Icons.ThumbUpOutline className="mx-2" /> Mi Piace
        </button>
        <button className="flex font-medium hover:bg-gray-100 rounded-md py-2 px-12 dark:hover:bg-kbook-default focus:outline-none transform active:scale-95">
          <Icons.UploadOutline className="mx-2" /> Condividi
        </button>
      </div>
      <hr className="mx-4 p-1 dark:border-gray-300 dark:border-opacity-20" />
    </div>
  );
}

export default PostActionBar;
