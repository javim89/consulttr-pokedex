import { IconButton } from '../components/Button/IconButton.jsx';
import SearchIcon from '../assets/icons.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'IconButton/Primary',
  component: IconButton,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary = {
  args: {
    icon: <SearchIcon />
  },
};

