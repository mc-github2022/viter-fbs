import PopupButton from "@/components/partials/popup/PopupButton";
import React from "react";
import ModalEditAboutContent from "./ModalEditAboutContent";
import Tooltip from "@/components/partials/Tooltip";
import Loader from "@/components/partials/loader/Loader";

const AboutContent = () => {
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
            Who We Are?
          </h2>
          <h2 className="aboutTitleB text-3xl mb-8">What We Do?</h2>
          <p className="mb-8">
            Frontline Business Solutions, Inc. is an Information Technology and
            Accounting business solutions company that offers a variety of
            services to SMEs. Our commitment is to leverage business success for
            the good of people and the communities in which we exist. Our vision
            and mission is a successful business that maintains harmony between
            the three goals of excellent products and services, revenue
            generation, and positive social impact. By choosing Frontline
            Business Solutions, Inc. you are partnering with a company committed
            to caring about people and community development.
          </p>
        </div>
        <a href="#" className="btn">
          Watch Video
        </a>
      </section>

      {aboutContent && <ModalEditAboutContent close={setAboutContent} />}
    </>
  );
};

export default AboutContent;
