"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function AnimatedMap() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-muted rounded-xl overflow-hidden shadow-inner group">
      {/* Static Map Background (Placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
        style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Patiala&zoom=13&size=600x300&sensor=false')" }}
      />

      {/* Animated Pulse Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-24 h-24 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
            <MapPin className="h-8 w-8" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 blur-sm rounded-full" />
        </motion.div>
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur p-4 rounded-lg border shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-bold text-sm">Visit Us</p>
        <p className="text-xs text-muted-foreground">123, Model Town, Patiala</p>
      </div>
    </div>
  );
}
