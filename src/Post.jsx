import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostActionBar from "./PostActionBar";
import PostComments from "./PostComments";

import ImgProfilo from "./img/Profilo.png";
function Post() {
  return (
    <div className="Post max-w-5xl rounded-xl shadow-lg mb-5 bg-white dark:bg-kbook-default2">
      <PostHeader
        name="Pippo Baudo"
        clock="07:43"
        date="27 Settembre 2019"
        imgProfile={ImgProfilo}
      ></PostHeader>
      <PostBody
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged."
        image="https://picsum.photos/1920/1080"
      ></PostBody>

      <PostActionBar comments="5" like="3"></PostActionBar>
      <PostComments />
    </div>
  );
}

export default Post;
