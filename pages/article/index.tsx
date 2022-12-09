import React from "react";
import Articles from "../../components/Articles";
import Title from "../../components/Title";

function artikel() {
  return (
    <div className="mt-10 max-w-7xl mx-auto space-y-2">
      <div className="text-center">
        <Title title="Artikel" subtitle="" />
      </div>
      <hr />
      <div className="flex flex-wrap space-x-3 mt-5 items-center justify-center space-y-2">
        <Articles />
        <Articles />
        <Articles />
        <Articles />
        <Articles />
        <Articles />
        <Articles />
      </div>
    </div>
  );
}

export default artikel;
