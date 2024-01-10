//make notification that receives props(title, date, status[active, done], message) and displays it

const Notification = (props: any) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <h3>{props.status}</h3>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
