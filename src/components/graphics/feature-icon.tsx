import * as React from "react";
import { cn } from "@/lib/utils";
import { Zap, Heart, UserCheck, Shield, Check, Star, Smile, Calendar, Plus, Users, Clock, MapPin, Phone, Mail, FileText, ArrowRight } from "lucide-react";

// Map string names from config to actual components
const icons: Record<string, React.ElementType> = {
  Zap,
  Heart,
  UserCheck,
  Shield,
  Check,
  Star,
  Smile,
  Calendar,
  Plus,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  FileText,
  ArrowRight,
};

export function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = icons[name] ?? Zap;

  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary",
        className
      )}
    >
      <IconComponent className="h-6 w-6" />
    </div>
  );
}
