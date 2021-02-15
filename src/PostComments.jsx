import PostPersonalComment from "./PostPersonalComment";
import PostOtherComment from "./PostOtherComment";

import ImgProfilo from "./img/Profilo.png";
import ImgFriend from "./img/ProfiloFriend.png";
function PostComments(props) {
  return (
    <div className="divPostComments flex flex-col">
      <PostPersonalComment imgProfile={ImgProfilo}></PostPersonalComment>
      <PostOtherComment
        imgProfile={ImgFriend}
        name="Daniele Finocchiaro"
        text="Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. "
      ></PostOtherComment>
      <PostOtherComment
        imgProfile={ImgFriend}
        name="Gabriele Finocchiaro"
        text="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. Più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum."
      ></PostOtherComment>
      <PostOtherComment
        imgProfile={ImgFriend}
        name="Nadia Finocchiaro"
        text="Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. "
      ></PostOtherComment>
    </div>
  );
}

export default PostComments;
