import faker from "faker";
import PostPersonalComment from "./PostPersonalComment";
import PostOtherComment from "./PostOtherComment";

import ImgProfilo from "./img/Profilo.png";

let commments = [
  {
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    name: faker.name.findName(),
    text: faker.lorem.sentences(),
  },
  {
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    name: faker.name.findName(),
    text: faker.lorem.sentences(),
  },
  {
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    name: faker.name.findName(),
    text: faker.lorem.sentences(),
  },
  {
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    name: faker.name.findName(),
    text: faker.lorem.sentences(),
  },
  {
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    name: faker.name.findName(),
    text: faker.lorem.sentences(),
  },
];

function PostComments(props) {
  return (
    <div className="divPostComments flex flex-col">
      <PostPersonalComment imgProfile={ImgProfilo}></PostPersonalComment>
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
