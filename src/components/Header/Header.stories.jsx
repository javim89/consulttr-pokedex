import Header from "./Header";
import ProfileImage from "../../assets/profile2.png";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export const HeaderStory = {
  args: {
    profileImage: ProfileImage,
    name: "Kaiden Stormwood",
    profession: "Pokemon Trainer",
    notifications: 3,
  },
};
