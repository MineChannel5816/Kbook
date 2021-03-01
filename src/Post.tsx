import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostActionBar from "./PostActionBar";
import PostComments from "./PostComments";

import faker from "faker";

export interface PostData {
  username: string;
  clock: Date;
  date: Date;
  imgProfile: string;
  body: string;
  image: string;
  comments: number;
  share: number;
  like: number;
}

function Post() {
  let postDetail: PostData = {
    username: faker.name.findName(),
    clock: faker.date.past(),
    date: faker.date.past(),
    imgProfile: faker.image.imageUrl(200, 200, undefined, true),
    body: faker.lorem.sentences(),
    image: faker.image.imageUrl(1920, 1080, undefined, true),
    comments: faker.random.number(),
    share: faker.random.number(),
    like: faker.random.number(),
  };
  return (
    <div className="Post max-w-3xl rounded-xl shadow-lg mb-5 bg-white dark:bg-kbook-default2">
      <PostHeader
        username={postDetail.username}
        clock={postDetail.clock}
        date={postDetail.date}
        imgProfile={postDetail.imgProfile}
      ></PostHeader>
      <PostBody body={postDetail.body} image={postDetail.image}></PostBody>
      <PostActionBar
        comments={postDetail.comments}
        share={postDetail.share}
        like={postDetail.like}
      ></PostActionBar>
      <PostComments />
    </div>
  );
}

export default Post;
