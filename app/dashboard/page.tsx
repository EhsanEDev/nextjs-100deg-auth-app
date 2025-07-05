"use client";

import { getUser } from "@/lib/storage";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const user = getUser();
    // If no user is found, redirect to the auth page
    if (!user) {
      redirect("/auth");
    } else {
      // User is found, set the userName state and display the welcome message
      setUserName(`${user.name.first} ${user.name.last}`);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Welcome{userName ? `, ${userName}` : ""} to the Dashboard</h1>
    </div>
  );
}
