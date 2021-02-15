function PostOtherComment(props) {
  return (
    <div className="divPostOtherComment flex items-start m-2 dark:text-white dark:text-opacity-80">
      <img
        src={props.imgProfile}
        alt="imgProfileComment"
        className="rounded-full max-h-10 ml-2 mt-2"
      />
      <div className="flex flex-col">
        <div className="divComment flex flex-col rounded-3xl bg-gray-100 dark:bg-gray-400 dark:bg-opacity-20 p-2 px-4 m-2 mb-0 ml-3">
          <p className="font-medium dark:text-white dark:text-opacity-95">
            {props.name}
          </p>
          <p className="leading-tight">{props.text}</p>
        </div>
        <div className="divActionButton flex ml-7 opacity-95">
          <button className="font-medium mx-1">Mi piace</button>·
          <button className="font-medium mx-1">Rispondi</button>·
          <button className="font-medium mx-1">Condividi</button>
        </div>
      </div>
    </div>
  );
}

export default PostOtherComment;
