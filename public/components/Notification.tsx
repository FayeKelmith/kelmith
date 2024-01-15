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
    <div className="border border-[#ff4747] my-4 py-4 px-10 rounded-3xl">
      <h1 className="text-2xl">{notification.title}</h1>
      <p className="bg-[#008080] border border-[#008080] px-8 py-4 w-fit">
        {notification.status}
      </p>
    </div>
  );
};

export default Notification;
