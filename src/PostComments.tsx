import faker from "faker";
import PostPersonalComment from "./PostPersonalComment";
import PostOtherComment from "./PostOtherComment";

let commments = new Array(5).fill({}).map(() => ({
  imgProfile: faker.image.imageUrl(200, 200, undefined, true),
  name: faker.name.findName(),
  text: faker.lorem.sentences(),
}));

export interface Comment {
  imgProfile: string;
  name: string;
  text: string;
}

function PostComments() {
  return (
    <div className="divPostComments flex flex-col">
      <PostPersonalComment
        imgProfile={faker.image.imageUrl(200, 200, undefined, true)}
      ></PostPersonalComment>
      {commments.map((comment) => {
        return <PostOtherComment {...comment} />;
      })}
      <div className="flex">
        <div className="mx-8 ml-6 mb-4 ">
          <button className="font-medium text-gray-800 text-opacity-95 dark:text-white dark:text-opacity-85 focus:outline-none hover:underline">
            Visualizza altri commenti
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostComments;
