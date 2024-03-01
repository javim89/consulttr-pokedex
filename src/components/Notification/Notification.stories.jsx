import Notification from "./Notification";

export default {
  title: "Notification/Notification",
  component: Notification,
  argTypes: {
    cant: { control: "number" },
  },
};

export const Primary = {
  args: {
    cant: 3,
  },
};
