import { AbstractControl, ValidationErrors } from "@angular/forms";

export const invalidEmailDomain = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toLowerCase()

    if (!value) return null;

    return value.includes("gmail.com") ? { invalidEmailDomain: true } : null;
}