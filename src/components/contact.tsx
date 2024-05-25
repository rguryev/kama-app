"use client";
import React, { FC } from "react";

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
import { useLocale, useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const currentLanguage = useLocale();
  const formSchema = z.object({
    username: z.string().min(2, {
      message: t("error_username"),
    }),
    phone: z.string().refine((value) => /^\+?[1-9]\d{8,11}$/.test(value), {
      message: t("error_phone"),
    }),
    message: z.string().min(10, {
      message: t("error_message"),
    }),
  });
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
            {t("title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            {t("description")}
          </p>
        </TitleContainer>

        <Container className="mx-4 bg-card drop-shadow-xl ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto my-5 flex max-w-[40rem] flex-col space-y-5"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">{t("name_label")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("name_placeholder")} {...field} />
                    </FormControl>
                    <FormDescription>{t("name_description")}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      {t("phone_label")}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("phone_placeholder")} {...field} />
                    </FormControl>
                    <FormDescription>{t("phone_description")}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      {t("message_label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("message_placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("message_description")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                type="submit"
                className="w-40"
                onClick={() => {
                  if (form.formState.isValid) {
                    const currentDate = new Date();
                    const formattedDate = currentDate.toLocaleString(
                      currentLanguage,
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      },
                    );

                    toast(t("toast_description"), {
                      description: formattedDate,
                      action: {
                        label: t("toast_button"),
                        onClick: () => console.log("Undo"),
                      },
                    });
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("loading")}
                  </>
                ) : (
                  t("button")
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
