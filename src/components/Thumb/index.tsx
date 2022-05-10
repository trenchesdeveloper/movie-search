import React from "react";
//styles
import { Image } from "./Thumb.styles";
//Types
type Props = {
  image: string;
};

const Thumb: React.FC<Props> = ({ image }) => {
  return (
    <div>
      <Image src={image} alt="movie-thumb" />
    </div>
  );
};

export default Thumb;
