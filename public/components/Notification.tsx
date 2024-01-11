export interface NotificationProps {
  title: string;
  status: "active" | "done";
  message: string;
}

const Notification = ({
  notification,
}: {
  notification: NotificationProps;
}) => {
  return (
    <div>
      <h1 className="text-3xl">{notification.title}</h1>
      <p>Status: {notification.status}</p>
      <p>Message: {notification.message}</p>
    </div>
  );
};

export default Notification;
