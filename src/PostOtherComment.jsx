function PostOtherComment(props) {
  return (
    <div className="divPostOtherComment flex items-start m-2 dark:text-white dark:text-opacity-80">
      <img
        src={props.imgProfile}
        alt="imgProfileComment"
        className="rounded-full max-h-10 ml-2 mt-2 border border-gray-300 hover:border-gray-500 hover:opacity-95 cursor-pointer"
      />
      <div className="flex flex-col">
        <div className="divComment flex flex-col rounded-3xl bg-gray-100 dark:bg-gray-400 dark:bg-opacity-20 p-2 px-4 m-2 mb-0 ml-3 shadow-sm">
          <p className="font-medium dark:text-white dark:text-opacity-95 hover:underline">
            {props.name}
          </p>
          <p className="leading-tight">{props.text}</p>
        </div>
        <div className="divActionButton flex ml-7 opacity-95">
          <button className="font-medium mx-1 hover:underline focus:outline-none">
            Mi piace
          </button>
          ·
          <button className="font-medium mx-1 hover:underline focus:outline-none">
            Rispondi
          </button>
          ·
          <button className="font-medium mx-1 hover:underline focus:outline-none">
            Condividi
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostOtherComment;
