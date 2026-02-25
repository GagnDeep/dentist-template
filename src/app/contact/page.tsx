"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedMap } from "@/components/graphics/animated-map";
import { TriggerConfetti } from "@/components/ui/confetti";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const { title, description, address, phone, email } = siteConfig.pages.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-16">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl font-heading">{title}</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="right" delay={0.2}>
            <Card className="h-full border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send us a message</CardTitle>
                <CardDescription>We&apos;ll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4 animate-in fade-in zoom-in">
                    <TriggerConfetti />
                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We will be in touch shortly.</p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>Send another</Button>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          {...form.register("firstName")}
                          className={form.formState.errors.firstName ? "border-destructive" : ""}
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          {...form.register("lastName")}
                          className={form.formState.errors.lastName ? "border-destructive" : ""}
                        />
                         {form.formState.errors.lastName && (
                          <p className="text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        placeholder="john@example.com"
                        type="email"
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-destructive" : ""}
                      />
                      {form.formState.errors.email && (
                          <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className={`min-h-[120px] ${form.formState.errors.message ? "border-destructive" : ""}`}
                        {...form.register("message")}
                      />
                      {form.formState.errors.message && (
                          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
                        )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4} className="space-y-8">
            <Card className="border-border/50 shadow-md">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                     <h4 className="font-semibold text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">{phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                     <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="h-80 rounded-xl overflow-hidden relative shadow-xl border border-border/50">
               <AnimatedMap />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
