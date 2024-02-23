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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import MaxWidthWrapper from "../max-width-wrapper";
import TitleContainer from "../title-container";
import Container from "../container";
import { sendMessage } from "@/api/telegram";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/app/i18n/client";
import i18next, { TFunction } from "i18next";

interface ContactProps {
  lng: any;
  t: TFunction;
}
const Contact: FC<ContactProps> = ({ lng }: any) => {
  const { t } = useTranslation(lng, "contact");
  const currentLanguage = i18next.language;
  const formSchema = z.object({
    username: z.string().min(2, {
      message: t("homepage.contact.error.username"),
    }),
    phone: z.string().refine((value) => /^\+?[1-9]\d{8,11}$/.test(value), {
      message: t("homepage.contact.error.phone"),
    }),
    message: z.string().min(10, {
      message: t("homepage.contact.error.message"),
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
            {t("homepage.contact.title")}
          </h1>
          <p className="mt-6 max-w-prose text-lg font-normal tracking-normal text-gray-600 dark:text-white">
            {t("homepage.contact.description")}
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
                    <FormLabel className="text-lg">
                      {t("homepage.contact.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("homepage.contact.name.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("homepage.contact.name.description")}
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
                    <FormLabel className="text-lg">
                      {t("homepage.contact.phone.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("homepage.contact.phone.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("homepage.contact.phone.description")}
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
                    <FormLabel className="text-lg">
                      {t("homepage.contact.message.label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("homepage.contact.message.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("homepage.contact.message.description")}
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

                    toast(t("homepage.contact.toast.description"), {
                      description: formattedDate,
                      action: {
                        label: t("homepage.contact.toast.button"),
                        onClick: () => console.log("Undo"),
                      },
                    });
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("homepage.contact.loading")}
                  </>
                ) : (
                  t("homepage.contact.button")
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
