export enum Error {
    name_missing = "Name is required.",
    name_invalid = "Invalid name.",
    name_long = "That name is too long.",
    email_missing = "Email address is required.",
    email_invalid = "Invalid email address.",
    email_long = "That email address is too long",
    email_taken = "That email address is already registered.",
    password_missing = "Password is required.",
    password_invalid = "Invalid password.",
    password_short = "That password is too short.",
    password_long = "That password is too long",
    password_confirm = "Password does not match.",
    confirmPassword_missing = "Password confirmation is required.",
    confirmPassword_invalid = "Invalid password confirmation."
}