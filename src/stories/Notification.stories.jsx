import Notification from "../components/Notification/Notification.jsx";

export default {
  title: 'Notification/Notification',
  component: Notification,
  argTypes: {
    cant: { control: 'number' } // Si deseas un control específico para este argumento
  },
};

export const Primary = {
  args: {
    cant: 3
  },
};
