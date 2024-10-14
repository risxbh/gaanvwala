import About from "../components/header/about/About";
import AcademicsPresent from "../components/header/academicsPresent/AcademicsPresent";
import GalleryCopy from "../components/header/galleryCopy/GalleryCopy";
import GalleryPeopleSay from "../components/header/galleryPeopleSay/GalleryPeopleSay";
import LearningProgram from "../components/header/learningProgram/LearningProgram";
import LearningProgramCopy from "../components/header/learningProgramCopy/LearningProgramCopy";
import PeachNumber from "../components/header/peachNumber/PeachNumber";
import FormHome from "../components/header/FormHome/FormHome";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import ExploreTopCategories from "../components/header/ExploreTopCategories/exporeTopCategories";
import OurTeam from "../components/header/OurTeam/OurTeam";
import HomePoster from "../components/header/HomePoster/HomePoster";
import Testionial from "../components/header/Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <AcademicsPresent />

      <About />
      <ExploreTopCategories />
      <OurTeam />
      <LearningProgram />
      <GalleryPeopleSay />

      <FormHome />

      <Testionial />
    </div>
  );
};

export default Home;
