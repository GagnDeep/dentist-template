"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function TriggerConfetti() {
  useEffect(() => {
    void confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return null;
}
