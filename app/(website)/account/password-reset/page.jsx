"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { states } from "@/data";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import ProfileNavigation from "@/components/ProfileNavigation";

const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Field to display the error message
  });

const Page = () => {
  const router = useRouter();
  const { data: session, status, update } = useSession();
  const { user } = session || {};
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          newPassword: values.newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update password");
      }

      toast.success("Password updated successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {status === "loading" ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-16 lg:gap-10 px-4 lg:px-10 py-14">
            <div className="col-span-5 lg:col-span-1">
              <ProfileNavigation />
            </div>
            <div className="col-span-5 lg:col-span-4">
              <div className="lg:border-l border-gray-300 lg:px-10">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              New Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              Confirm New Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-deepBlue text-white text-sm font-semibold px-7 py-6 hover:bg-deepBlue/90 disabled:opacity-80"
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2 ">
                            <LoaderIcon
                              size={20}
                              className="animate-spin text-white"
                            />
                            Saving
                          </span>
                        ) : (
                          <span>Save changes</span>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
