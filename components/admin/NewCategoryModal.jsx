"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  parent: z.string().nullable(),
});

const NewCategoryModal = ({ onCategoryCreated, parentCategories }) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      parent: null,
    },
  });

  const onSubmit = async (values) => {
    const existingCategory = parentCategories.find(
      (category) => category.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingCategory) {
      setError("Category name already exists.");
      return;
    }

    const parentCategory = parentCategories.find(
      (category) => category._id === values.parent
    );

    if (
      parentCategory &&
      parentCategory.name.toLowerCase() === values.name.toLowerCase()
    ) {
      setError("Category name cannot be the same as the parent category name.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          parent: values.parent || null, // Ensure parent is null if not selected
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Category created successfully!");
        setIsModal(false);
        form.reset();
        if (onCategoryCreated) {
          onCategoryCreated();
        }
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModal(true)}
        className="animation bg-black text-white text-xs flex items-center gap-2 rounded-lg px-4 py-3 hover:opacity-80"
      >
        <span>
          <AiOutlinePlusCircle className="text-[16px]" />
        </span>
        New Category
      </button>

      {isModal && (
        <div
          onClick={() => {
            setIsModal(false);
            form.reset();
          }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-lg rounded-lg p-7"
          >
            <h1 className="text-[18px] font-medium">New Category</h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-500 font-normal">
                        Category Name&nbsp;
                        <span className="text-red-400">(required)</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="text-sm font-medium" />
                      </FormControl>
                      <FormMessage className="text-sm font-normal" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-500 font-normal">
                        Parent Category{" "}
                        <span className="text-red-400">(optional)</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="text-sm font-medium">
                            <SelectValue placeholder="Select a parent category" />
                          </SelectTrigger>
                        </FormControl>
                        {parentCategories?.length > 0 && (
                          <SelectContent>
                            <SelectItem value={null}>
                              Select parent category
                            </SelectItem>
                            {parentCategories.map((category) => (
                              <SelectItem
                                key={category._id}
                                value={category._id}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        )}
                      </Select>
                    </FormItem>
                  )}
                />

                {error && (
                  <p className="flex gap-2 bg-red-50 text-sm text-red-500 rounded-lg px-2 py-3">
                    <BsFillInfoCircleFill className="mt-0.5" />
                    {error}
                  </p>
                )}

                <div className="w-full flex flex-col gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black hover:bg-black/80 py-6 mt-5 disabled:bg-black/80"
                  >
                    {isLoading ? (
                      <LoaderIcon
                        size={17}
                        className="animate-spin text-white"
                      />
                    ) : (
                      <span className="flex items-center gap-2">
                        <AiOutlinePlusCircle className="text-[16px]" />
                        Create
                      </span>
                    )}
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsModal(false);
                      form.reset();
                    }}
                    className="text-sm text-red-600 mt-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewCategoryModal;
