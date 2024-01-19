"use client";
import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import Container from "./Container";
import MaxWidthWrapper from "./max-width-wrapper";
import TitleContainer from "./title-container";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section id="contact">
      <MaxWidthWrapper className="max-w-[50rem]">
        <TitleContainer>
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Свяжитесь со мной
          </h1>
          <p className="mt-6 max-w-prose text-center text-lg text-gray-600 dark:text-white">
            Хотите легализоваться или купить курс? Оставляйте заявку!
          </p>
        </TitleContainer>

        <Container className="bg-gray-50 shadow-priceCard">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Имя" {...field} />
                    </FormControl>
                    <FormDescription>Введите ваше имя.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Номер телефона</FormLabel>
                    <FormControl>
                      <Input placeholder="+48 123 456 789" {...field} />
                    </FormControl>
                    <FormDescription>
                      Введите ваш номер телефона.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Сообщение</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Добрый день" {...field} />
                    </FormControl>
                    <FormDescription>Введите ваше сообщение.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Отправить</Button>
            </form>
          </Form>
        </Container>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
