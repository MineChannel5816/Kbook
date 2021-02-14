import PostHeader from "./PostHeader.js";

import ImgProfilo from "./img/Profilo.png";
function Post() {
  return (
    <div className="Post max-w-5xl max-h-6xl m-3 rounded-xl bg-white dark:bg-kbook-default2">
      <PostHeader
        nome="Pippo Baudo"
        orario="07:43"
        giorno="27 Settembre 2019"
        imgProfilo={ImgProfilo}
      ></PostHeader>
    </div>
  );
}

export default Post;
