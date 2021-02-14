/* eslint-disable jsx-a11y/alt-text */
function PostBody(props) {
  return (
    <div className="divPostBody flex flex-col">
      <p className="mr-12 mb-3 pl-4 font-medium dark:text-white dark:text-opacity-75">
        {props.text}
      </p>
      <img className="p-0 max-w-5xl w-full object-cover" src={props.image} />
      <div>
        <p className="float-right flex-grow m-3 dark:text-white dark:text-opacity-75">
          Commenti: {props.comments}
        </p>
      </div>
    </div>
  );
}

export default PostBody;
