interface NotificationProps {
  title: string;
  date: string;
  status: "active" | "done";
  message: string;
}

const Notification = ({ title, date, status, message }: NotificationProps) => {
  return (
    <div>
      <h1 className="text-3xl">{title}</h1>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default Notification;
