"use client";

import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import { setUser } from "@/lib/storage";
import { validateMobileNumber } from "@/lib/validation";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./auth.module.scss";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Validate mobile number
    if (!validateMobileNumber(phone)) {
      setError("شماره موبایل معتبر نیست");
      return;
    }

    // clear previous error
    setError("");

    try {
      // Fetch user data from API
      const res = await fetch(process.env.NEXT_PUBLIC_USER_API as string);
      const data = await res.json();
      const user = data.results[0];

      // Store user information on local storage
      setUser(user);

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (err) {
      setError("لطفاً دوباره تلاش کنید");
    }
  };

  return (
    <div className={styles.container}>
      <h1>احراز هویت</h1>
      <Input
        placeholder="شماره موبایل خود را وارد کنید"
        value={phone}
        onChange={setPhone}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
