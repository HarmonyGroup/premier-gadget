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

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(5),
  billingAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.string().nullable(),
});

const Page = () => {
  const router = useRouter();
  const { data: session, status, update } = useSession();
  const { user } = session || {};

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      billingAddress: "",
      city: "",
      state: null,
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }

    if (status === "authenticated" && user) {
      form.reset({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        billingAddress: user.billingAddress || "",
        city: user.city || "",
        state: user.state || null,
      });
    }
  }, [status, user, router, form]);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      // const updatedUser = {
      //   ...session,
      //   user: {
      //     ...session?.user,
      //     email: values.email
      //   }
      // };

      await update();

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {status === "loading" ? (
        <LoadingScreen />
      ) : (
        <div className="">
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
                        name="fullName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="billingAddress"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              Street Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              City
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm font-normal" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-sm text-gray-500 font-normal">
                              State/Region
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="bg-white font-semibold px-3 py-6 focus:border focus:border-default"
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white font-semibold px-3 py-6 focus:border focus:border-default">
                                  <SelectValue
                                    placeholder="Select a parent category"
                                    className="text-gray-500"
                                  />
                                </SelectTrigger>
                              </FormControl>
                              {states?.length > 0 && (
                                <SelectContent>
                                  <SelectItem value={null}>
                                    Please select a region or state
                                  </SelectItem>
                                  {states.map((state) => (
                                    <SelectItem
                                      key={state.id}
                                      value={state.name}
                                    >
                                      {state.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              )}
                            </Select>
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
