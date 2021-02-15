import * as Icons from "heroicons-react";

function PostHeader(props) {
  return (
    <div className="divPostHeader flex items-center p-4 max-h-16">
      <img
        src={props.imgProfile}
        alt="imgProfile"
        className="rounded-full max-h-10 border border-gray-300 hover:border-gray-500 hover:opacity-95 cursor-pointer"
      />
      <div className="containerInfoPostHeader flex flex-col">
        <div className="divNomePostHeader dark:text-white dark:text-opacity-80 font-bold mx-3 cursor-pointer hover:underline">
          <p>{props.name}</p>
        </div>
        <div className="divTime flex text-gray-500 font-semibold -mt-1 cursor-pointer hover:underline">
          <p className="ml-3 mx-1">
            {props.date} alle {props.clock}
          </p>
        </div>
      </div>
      <button className="flex-grow dark:text-white dark:text-opacity-70 mr-2">
        <Icons.DotsHorizontalOutline className="float-right hover:bg-gray-100 rounded-full h-10 w-10 p-2"></Icons.DotsHorizontalOutline>
      </button>
    </div>
  );
}

export default PostHeader;
