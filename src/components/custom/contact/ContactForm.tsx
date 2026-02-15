import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,

} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sonner"
import { Form, type ActionFunctionArgs, useNavigation } from "react-router"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function action({ request }: ActionFunctionArgs) {

  await delay(3000); 

  const body = await request.formData();
  const name = body.get("visitorsName");
  const email = body.get("email");
  const phone = body.get("phone");
  const message = body.get("message");
  toast("Event has been created", { position: "top-center" })
  return {
    name,email,phone,message
  };
}

export default function ContactForm(){

    const navigation = useNavigation();

    return(
      <Form method="post" action="/" >
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact_name">Full Name</FieldLabel>
              <Input
                name="visitorsName"
                id="contact_name"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact_email">Email Address</FieldLabel>
              <Input
                name="email"
                id="contact_email"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact_number">Phone Number</FieldLabel>
              <Input
                name="phone"
                id="contact_number"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact_message">Message</FieldLabel>
              <Textarea
                name="message"
                id="contact_message"
                autoComplete="off"
                className="h-40"
              />
            </Field>
          </FieldGroup>

                  <Toaster />
            
            {
              navigation.state === "submitting" ?
              <button className="md:mx-20 border bg-red-500 py-2 rounded-lg shadow-md shadow-white/60 hover:text-black hover:scale-110 transition-all hover:bg-white hover:shadow-black hover:cursor-pointer text-center flex justify-center" disabled={true}><Spinner data-icon="inline-start" /></button>
                  :
              <button className="md:mx-20 border bg-red-500 py-2 rounded-lg shadow-md shadow-white/60 hover:text-black hover:scale-110 transition-all hover:bg-white hover:shadow-black hover:cursor-pointer">Send Message</button>
            }

            

        </FieldSet>
      </Form>

    )
}