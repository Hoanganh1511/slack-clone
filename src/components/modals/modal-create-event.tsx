"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";

import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { IoSearch } from "react-icons/io5";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const ModalCreateEvent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const form = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="">
      <DialogHeader className="">
        <DialogTitle>Create an event</DialogTitle>
      </DialogHeader>

      <div className="relative px-6 max-h-[500px] overflow-y-scroll">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-black/5 flex  items-center justify-center">
          <input
            type="file"
            className="upload-file-btn absolute top-0 left-0 w-full h-full bg-transparent outline-none border-none"
          />
          <div>
            <Image
              src="/images/camera-logo.png"
              alt="upload image logo"
              width={80}
              height={80}
              className="block mx-auto"
            />
            <p className="block my-2 text-center font-bold text-[16px]">
              Upload cover image
            </p>
            <p className="text-center text-[13px] text-black/65">
              Minimum width 480 pixels, 16:9 recommeneded
            </p>
          </div>
        </div>
        <div className="pt-[300px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 pt-[20px]"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event type</FormLabel>
                    <FormControl>
                      <RadioGroup defaultValue="comfortable" className="">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="default" id="r1" />
                          <Label htmlFor="r1">Online</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="comfortable" id="r2" />
                          <Label htmlFor="r2">In person</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Event name" {...field} />
                    </FormControl>
                    <FormDescription className="text-right text-[13px]">
                      0/75
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username3"
                render={({ field }) => (
                  <FormItem {...field}>
                    <FormLabel>Timezone*</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription className="text-right text-[13px]">
                      0/75
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="end-date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End date*</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal text-black/80",
                                !date && "text-black/30"
                              )}
                            >
                              <FaRegCalendarAlt className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              {...field}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="end-time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End time*</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal  text-black/80",
                                !date && "text-black/30"
                              )}
                            >
                              <FaRegCalendarAlt className="mr-2 h-4 w-4 " />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              {...field}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="event-link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>External event link</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription className="text-right text-[13px]">
                      0/1,024
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add end date and time
                  </label>
                </div>
              </div>
              <FormField
                control={form.control}
                name="event-link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ex: topics, schedule, etc. " />
                    </FormControl>
                    <FormDescription className="text-right text-[13px]">
                      0/5,000
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event-link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Speakers</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IoSearch className="size-[20px] text-black/65 absolute top-1/2 left-[8px] -translate-y-1/2" />
                        <Input
                          placeholder="Jade.."
                          {...field}
                          className="pl-[35px]"
                        />
                      </div>
                    </FormControl>
                    <FormDescription className="text-left text-[12px] text-black/50 leading-[1.5rem]">
                      Add connections to speak at the event. Speakers can join
                      the event early and will be shown in the event’s Details
                      section and presenter area. They cannot allow attendees to
                      speak or end the event.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-left text-[12px] text-black/50 leading-[1.5rem]">
                By continuing, you agree with{" "}
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline"
                >
                  LinkedIn’s event policy.
                </a>
              </div>
              <div className="text-left text-[12px] text-black/50 leading-[1.5rem]">
                Make the most of LinkedIn Events.{" "}
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn more
                </a>
              </div>
              <div />
            </form>
          </Form>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" className="text-white">
          Next
        </Button>
      </DialogFooter>
    </div>
  );
};

export default ModalCreateEvent;
