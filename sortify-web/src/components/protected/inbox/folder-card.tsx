"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, MoreHorizontal, Loader2 } from "lucide-react";
import { Folder as FolderType } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateFolderSync, deleteFolderSync } from "@/app/actions/core-action";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, { message: "Folder name is required" }),
  description: z.string(),
});

export default function FolderCard({
  folder,
}: {
  folder: Omit<FolderType, "user_id">;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: folder.name,
      description: folder.description,
    },
    mode: "onChange",
  });

  const handleUpdate = async (data: z.infer<typeof formSchema>) => {
    try {
      await updateFolderSync({
        id: folder.id,
        name: data.name,
        description: data.description,
        provider_folder_id: folder.provider_folder_id,
      });
      toast.success("Folder updated successfully");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to update folder"
      );
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFolderSync({
        id: folder.id,
        provider_folder_id: folder.provider_folder_id,
      });
    } catch (error) {
      console.log("HERE");
      toast.error(
        error instanceof Error ? error.message : "Failed to delete folder"
      );
    }
  };

  return (
    <Card className="shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 rounded">
            <Folder className="h-4 w-4 text-blue-600" />
          </div>
          {folder.name}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto font-normal cursor-pointer"
                >
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleUpdate)}>
                    <DialogHeader>
                      <DialogTitle>Edit Folder</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Folder Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter folder name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Folder Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter folder description"
                                className="h-20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          type="submit"
                          className="cursor-pointer"
                          disabled={!form.formState.isValid}
                        >
                          {form.formState.isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            "Save changes"
                          )}
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            <DropdownMenuItem asChild>
              <Button
                variant="ghost"
                className="w-full justify-start p-2 h-auto font-normal cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
    </Card>
  );
}
