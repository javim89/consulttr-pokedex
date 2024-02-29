import Header from '../components/Header/Header.jsx';
import ProfileImage from "../assets/profile2.png";

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HeaderStory = {
  args: {
    profileImage: ProfileImage,
    name: "Kaiden Stormwood",
    profession: "Pokemon Trainer",
  },
};

