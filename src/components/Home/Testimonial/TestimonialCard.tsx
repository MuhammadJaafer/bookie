import Image, { StaticImageData } from "next/image";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import UI from "../../../styles/UI.module.scss";
type TestimonialCardProps = {
  name: string;
  text: string;
  icon: StaticImageData;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  icon,
}) => {
  return (
    <div className={`${UI.testimonialCard}`}>
      <RiDoubleQuotesL className={`${UI.testimonialCard_svg}`} />
      <p className={`${UI.testimonialCard_text}`}>{text}</p>
      <h4 className={`${UI.testimonialCard_name}`}>{name}</h4>
      <div className={`${UI.testimonialCard_avatar}`}>
        <Image src={icon} alt={"avatar"} />
      </div>
    </div>
  );
};
export default TestimonialCard;
