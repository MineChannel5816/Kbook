/* eslint-disable jsx-a11y/alt-text */
function PostBody(props) {
  return (
    <div className="divPostBody flex flex-col">
      <p className="mr-12 mb-3 pl-4 font-medium dark:text-white dark:text-opacity-75">
        {props.text}
      </p>
      <img className="p-0 max-w-5xl w-full object-cover" src={props.image} />
    </div>
  );
}

export default PostBody;
