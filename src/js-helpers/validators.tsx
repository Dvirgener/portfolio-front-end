
export type GuestMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type GuestMessageErrortype = {
  name?: string;
  email?: string[];
  phone?: string;
  message?: string;
}


function isValidEmail(email : string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function checkHomepageMessage(
  data: GuestMessage
): GuestMessage | { errors: GuestMessageErrortype } {
  let errors: GuestMessageErrortype = {};

  // empty checks
  (Object.entries(data) as [keyof GuestMessage, string][]).forEach(([key, value]) => {
    
    if (value.trim() === "") {
      errors = {...errors,
        [key] : `${key} field must not be empty.`
      }
    }
      


    
  });

  // Message Check
  if (data.message.trim().length < 25){
    errors.message = "Message must have at least 25 Characters!";
  }

  // email checks
  if (data.email.trim() !== "" && !isValidEmail(data.email)) {
    errors.email = [...(errors.email ?? []), "Email field must be a valid email."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return data;
}