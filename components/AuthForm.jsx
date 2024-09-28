import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { authFormSchema } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { LoaderIcon } from "lucide-react";
import toast from "react-hot-toast";
import CustomInput from "./CustomInput";

const AuthForm = ({ type, setType, setAuthModal }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {

      if (type === "sign-up") {
        const response = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({
            fullName: data.fullName,
            phone: data.phone,
            email: data.email,
            password: data.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success("Account created successfully");
          setType("sign-in");
        } else {
          toast.error("Something went wrong!");
        }
      };

      if (type === "sign-in") {
        setLoading(true);

        const response = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (response.error) {
            toast.error("Invalid credentials!");
        };

        if (response.ok) {
            toast.success("Logged in successfully!");
            const userResponse = await fetch("/api/auth/session");
            const userData = await userResponse.json();
            setAuthModal(false);
  
            if (userData.user.role === "admin") {
              router.replace("/admin");
              router.push("/admin");
            } else {
              router.refresh();
            };
        };
      };

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          {type === "sign-up" && (
            <>
              <CustomInput
                control={form.control}
                name="fullName"
                label="Full Name"
                placeholder="John Doe"
              />
              <CustomInput
                control={form.control}
                name="phone"
                label="Phone Number"
                placeholder="123-456-789"
              />
            </>
          )}
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@example.com"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="********"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-deepBlue hover:bg-deepBlue/90"
          >
            {loading ? (
              <LoaderIcon size={20} className="animate-spin" />
            ) : type === "sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </Form>
      {type === "sign-in" ? (
        <p className="text-gray-500 text-sm text-center mt-4">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setType("sign-up")}
            className="text-deepBlue font-semibold hover:underline underline-offset-2 cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      ) : (
        <p className="text-gray-500 text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => setType("sign-in")}
            className="text-deepBlue font-semibold hover:underline underline-offset-2 cursor-pointer"
          >
            Sign In
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
