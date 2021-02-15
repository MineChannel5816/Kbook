import PostHeader from "./PostHeader.js";
import PostBody from "./PostBody.js";
import PostActionBar from "./PostActionBar.js";

import ImgProfilo from "./img/Profilo.png";
function Post() {
  return (
    <div className="Post max-w-5xl m-3 rounded-xl bg-white dark:bg-kbook-default2">
      <PostHeader
        nome="Pippo Baudo"
        orario="07:43"
        giorno="27 Settembre 2019"
        imgProfilo={ImgProfilo}
      ></PostHeader>
      <PostBody
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
        image="https://picsum.photos/1920/1080"
      ></PostBody>

      <PostActionBar comments="5" like="3"></PostActionBar>
    </div>
  );
}

export default Post;
