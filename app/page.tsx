"use client";
import Image from "next/image";
import Link from "next/link";
import supabase from "@/supabase";
import { useState, useEffect } from "react";
import Notification, {
  NotificationProps,
} from "@/public/components/Notification";

export default function Home() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([
    {
      title: "Loading",
      status: "active",
      message: "Loading",
    },
  ]);
  const addNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from("notifications")
        .select("title, status, message")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        console.log(`Data: ${JSON.stringify(data)}`);
        const notifications: NotificationProps[] = data.map(
          (notification: any) => ({
            title: notification.title,
            status:
              notification.status === "active" || notification.status === "done"
                ? notification.status
                : "active", // default to 'active' if status is not 'active' or 'done'
            message: notification.message,
          })
        );
        setNotifications(notifications);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    addNotifications();
  }, []);
  return (
    <div className="">
      <header className="w-full md:min-h-[75vh] flex md:flex-row flex-col-reverse justify-around items-center">
        <div className="text-3xl space-y-2">
          <h2 className="">
            I am <span className="font-bold"> Faye Kelmith</span>
          </h2>
          <h2 className="">
            I{" "}
            <span className="font-semibold">
              write{" "}
              <Link href="/work" className="underline text-[#ff4747]">
                Code
              </Link>{" "}
              and
              <Link href="/essays" className="underline text-[#008080]">
                {" "}
                Essays
              </Link>
              .
            </span>
          </h2>
          <h2 className="">
            Also, experiment with{" "}
            <span className="font-semibold">automation</span>{" "}
          </h2>
        </div>
        <Image
          src="/images/kelmith.png"
          alt="Picture of the Kelmith"
          width={640}
          height={768}
          className="py-10 w-full md:w-fit h-auto"
        />
      </header>
      <section className="container">
        <h1>This is what I am upto</h1>
        <div>
          {notifications.map((notification: NotificationProps) => (
            <Notification
              key={notification.title}
              notification={notification}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
