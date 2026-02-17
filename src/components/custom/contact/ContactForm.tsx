import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,

} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { saveMessageAsync } from "@/store/redux/slices/guest-message-slice"
import { checkHomepageMessage, type GuestMessageErrortype } from "@/js-helpers/validators"
import type { AppDispatch } from "@/store/redux/reduxStore"

import { useAppSelector } from "@/store/redux/hook"

type GuestMessageInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm(){

    // this is just using dispatch helper from redux
    const dispatch = useDispatch<AppDispatch>();

    // Check is sending State
    const isSending = useAppSelector((state) => state.guest_messages.loading)

    // Setting up Errors. 
    const[error,setError] = useState<GuestMessageErrortype>();

    // Setting up the message data.
    const [message,setMessage] = useState<GuestMessageInput>({
      name : "",email: "",phone: "",message: ""
    });

    useEffect(()=>{


    },[error])
    // Handling Changes on the individual input Elements
    function handleChange(
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
      setMessage((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }

    // Submitting The Form
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

      // prevent default to stop browser from refreshing
      e.preventDefault();

      // Validation Checker
      const res = checkHomepageMessage(message);


      if (!("errors" in res)) {
        try {

          // Sending Dispatch to save message that passed validation.
          await dispatch(saveMessageAsync(res)).unwrap();

          toast.success("Message has been sent!", {
            position: "top-center",
          });

          // If message was successfully saved, reset Form.
          setMessage({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setError({});

        } catch {
          toast.error("Failed to send message.", {
            position: "top-center",
          });
        }
      }else{
        setError(res.errors);
      }

    }

    return(
      <div className="">
        <form className="" onSubmit={handleSubmit} >
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact_name">Full Name</FieldLabel>
                <Input
                  name="name"
                  id="contact_name"
                  autoComplete="off"
                  value={message.name}
                  onChange={handleChange}
                  aria-invalid={!!error?.name}
                />
                 <FieldError>{error?.name}</FieldError>
              </Field>
              

              <Field>
                <FieldLabel htmlFor="contact_email">Email Address</FieldLabel>
                <Input
                  name="email"
                  id="contact_email"
                  autoComplete="off"
                  value={message.email}
                  onChange={handleChange}
                  aria-invalid={!!error?.email}
                />
                <FieldError>{error?.email}</FieldError>
              </Field>
               

              <Field>
                <FieldLabel htmlFor="contact_number">Phone Number</FieldLabel>
                <Input
                  name="phone"
                  type="number"
                  id="contact_number"
                  autoComplete="off"
                  value={message.phone}
                  onChange={handleChange}
                  aria-invalid={!!error?.phone}
                />
                <FieldError>{error?.phone}</FieldError>
              </Field>
               

              <Field>
                <FieldLabel htmlFor="contact_message">Message</FieldLabel>
                <Textarea
                  name="message"
                  id="contact_message"
                  autoComplete="off"
                  className="h-40"
                  value={message.message}
                  onChange={handleChange}
                  aria-invalid={!!error?.message}
                />
                <FieldError>{error?.message}</FieldError>
              </Field>
               
            </FieldGroup>

              <Toaster />
              {
                isSending ? 

                  <button className="md:mx-20 border bg-gray-500 py-2 rounded-lg shadow-md shadow-white/60 hover:text-black scale-110" disabled={true}>Sending ....</button>    

                  :

                  <button className="md:mx-20 border bg-red-500 py-2 rounded-lg shadow-md shadow-white/60 hover:text-black hover:scale-110 transition-all hover:bg-white hover:shadow-black hover:cursor-pointer">Send Message</button>    
              }
    

          </FieldSet>
        </form>
      </div>
      

    )
}