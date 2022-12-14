import React from "react";
import previewImg from "../assets/preview.gif";

/* Import Your Files Below This Line*/

function HomePage() {
  return (
    <section>
      <div>
        <img src={previewImg} alt="Result Preview" />
        <article>
          <h2>
            The goal of this workshop is to introduce you two widely used
            packages. At the end of this lesson your App should look something
            like the preview on your left. Feel free to use any of these
            packages in your third project, especially Toastify... André
            looooves Toastify! 🍞
          </h2>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
