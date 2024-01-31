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
import MaxWidthWrapper from "./max-width-wrapper";
import TitleContainer from "./title-container";
import Container from "./container";
import { sendMessage } from "@/api/telegram";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "В имени должно быть больше одной буквы",
  }),
  phone: z.string().refine((value) => /^\+?[1-9]\d{8,11}$/.test(value), {
    message: "Неправильно введен номер",
  }),
  message: z.string().min(10, {
    message: "Сообщение слишком короткое",
  }),
});

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      setIsLoading(true);
      const message = `Имя: ${values.username}, Телефон: ${values.phone}, Сообщение: ${values.message}`;
      await sendMessage(message);
      form.reset();
    } catch (e) {
      form.setError("username", {
        type: "manual",
        message: `${e as string}`,
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section id="contact">
      <MaxWidthWrapper className="mb-8 mt-24 max-w-[50rem]">
        <TitleContainer>
          <h1 className="text-center font-bold tracking-tight text-gray-900 dark:text-white">
            Свяжитесь со мной
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            Хотите легализоваться или купить курс? Оставляйте заявку!
          </p>
        </TitleContainer>

        <Container className="mx-4 bg-gray-50 shadow-priceCard ">
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
                      <Input placeholder="123235235" {...field} />
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Сообщение</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Напишите нам" {...field} />
                    </FormControl>
                    <FormDescription>Введите ваше сообщение.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                type="submit"
                onClick={() => {
                  if (form.formState.isValid) {
                    const currentDate = new Date();
                    const formattedDate = currentDate.toLocaleString("ru-Ru", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    });

                    // Валидация успешна, выполните отправку данных и отобразите toast
                    toast("Ваша заявка принята, скоро мы с вами свяжемся", {
                      description: formattedDate,
                      action: {
                        label: "Закрыть",
                        onClick: () => console.log("Undo"),
                      },
                    });
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Отправить"
                )}
              </Button>
            </form>
          </Form>
        </Container>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
