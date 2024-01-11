//make notification that receives props(title, date, status[active, done], message) and displays it
"use client";
import supabase from "@/supabase";
import { useEffect, useState } from "react";
const Notification = () => {
  const [notification, setNotification] = useState({});
  const addNotification = async () => {
    try {
      const { data, error } = await supabase.from("notifications").select("*");

      if (error) {
        return error;
      } else {
        console.log(`Data: ${JSON.stringify(data)}`);
        setNotification(JSON.stringify(data));
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  useEffect(() => {
    addNotification();
  }, []);
  return (
    <>
      {notification ? (
        <div>
          <h1 className="text-3xl">{notification}</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl">No notifications yet.</h1>
        </div>
      )}
    </>
  );
};

export default Notification;
