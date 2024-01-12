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
    <div className="border border-[#ff4747] my-4 py-4 px-10">
      <h1 className="text-3xl">{notification.title}</h1>
      <p>Status: {notification.status}</p>
      <p>Message: {notification.message}</p>
    </div>
  );
};

export default Notification;
