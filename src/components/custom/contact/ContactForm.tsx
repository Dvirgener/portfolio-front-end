import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"


export default function ContactForm(){
    return(
<FieldSet>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="username">Full Name</FieldLabel>
      <Input id="username" autoComplete="off" />
      {/* <FieldError>Choose another username.</FieldError> */}
    </Field>
        <Field>
      <FieldLabel htmlFor="username">Email Address</FieldLabel>
      <Input id="username" autoComplete="off" />

    </Field>
        <Field>
      <FieldLabel htmlFor="username">Phone NumBer</FieldLabel>
      <Input id="username" autoComplete="off" />
    </Field>
  </FieldGroup>
  <button className="md:mx-50 border bg-red-500 py-2 rounded-lg shadow-md shadow-white/60 hover:text-black hover:scale-110 transition-all hover:bg-white hover:shadow-black hover:cursor-pointer">Send Message</button>
</FieldSet>
    )
}