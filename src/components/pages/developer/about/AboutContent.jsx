import PopupButton from "@/components/partials/popup/PopupButton";
import React from "react";
import ModalEditAboutContent from "./ModalEditAboutContent";
import Tooltip from "@/components/partials/Tooltip";
import Loader from "@/components/partials/loader/Loader";

const AboutContent = ({ contentAbout }) => {
  const [aboutContent, setAboutContent] = React.useState(false);
  const handleModalAbout = () => setAboutContent(true);

  return (
    <>
      <section
        id="about"
        className="about text-center py-20 relative bg-customGray"
      >
        <div className="absolute right-[-10px] top-[-10px] group">
          <PopupButton fn={handleModalAbout} />
          <Tooltip text="Edit" />
        </div>
        <div className="container lg:myContainer relative">
          <h2 className="aboutTitle text-3xl font-bold text-dark">
            {contentAbout?.data[0].about_title}
          </h2>
          <h2 className="aboutTitleB text-3xl mb-8">
            {contentAbout?.data[0].about_subtitle}
          </h2>
          <p className="mb-8">{contentAbout?.data[0].about_text}</p>
        </div>
        <a href={contentAbout?.data[0].about_btn_link} className="btn">
          {contentAbout?.data[0].about_btn_text}
        </a>
      </section>

      {aboutContent && (
        <ModalEditAboutContent
          close={setAboutContent}
          contentAbout={contentAbout}
        />
      )}
    </>
  );
};

export default AboutContent;
