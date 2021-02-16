import * as Icons from "heroicons-react";

function returnPostActivity(comments, share) {
  if (comments != null && share != null) {
    return (
      <>
        <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
          Commenti: {comments}
        </p>
        <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
          Condivisioni: {share}
        </p>
      </>
    );
  } else if (comments != null) {
    return (
      <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
        Commenti: {comments}
      </p>
    );
  } else if (share != null) {
    return (
      <p className="float-right my-3 mx-2 text-black dark:text-white text-opacity-90 dark:text-opacity-80 cursor-pointer hover:underline">
        Condivisioni: {share}
      </p>
    );
  }
}

function counterActivity(activity) {
  let sum = 0;
  activity.forEach((element) => {
    if (element != null) {
      sum += Number(element);
    }
  });

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

function PostActionBar(props) {
  return (
    <div className="divPostActionBar dark:text-white text-black text-opacity-80 dark:text-opacity-75">
      <div className="containerContatori mx-4 flex items-center">
        {counterActivity([props.comments, props.share, props.like])}
        <div>{returnPostActivity(props.comments, props.share)}</div>
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
