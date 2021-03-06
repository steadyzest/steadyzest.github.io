import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faComment } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const installFontAwesome = () => {
  library.add(faCircle, faComment, faChevronUp, faEnvelope, faGithub);
};

export default installFontAwesome;
