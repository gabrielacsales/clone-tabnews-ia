"use client";

import { useEffect, useState } from "react";

function getTargetDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const target = new Date(currentYear, 10, 20, 0, 0, 0);
  return now >= target ? new Date(currentYear + 1, 10, 20, 0, 0, 0) : target;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = getTargetDate();

    function updateCountdown() {
      const diff = Math.max(0, targetDate - new Date());
      const pad = (n) => String(Math.floor(n)).padStart(2, "0");

      setTimeLeft({
        days: pad(diff / (1000 * 60 * 60 * 24)),
        hours: pad((diff / (1000 * 60 * 60)) % 24),
        minutes: pad((diff / 1000 / 60) % 60),
        seconds: pad((diff / 1000) % 60),
      });
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <>
      <div id="countdown">
        {items.map(({ label, value }) => (
          <div className="time-box" key={label}>
            <span className="number">{value}</span>
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
      <p className="message">aloha significa... está chegando o seu dia!!</p>
    </>
  );
}
