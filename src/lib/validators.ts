interface validatorErrors {
    message: string;
    code: number;
}

export function nameValidator(name: string) {
    const errors: validatorErrors[] = [];

    if (typeof name !== "string") {
        errors.push({
            message: "Field name is missing",
            code: 400,
        });
    }

    if (name.length <= 3) {
        errors.push({
            message: "Invalid name",
            code: 400,
        });
    }

    if (errors.length > 0) {
        throw new Error(errors[0].message);
    }
}

export function emailValidator(name: string) {
    const errors: validatorErrors[] = [];
    const emailValidator = /^[^\\s@]+@[^\\s@]+.[^\\s@]+$/;

    if (typeof name !== "string") {
        errors.push({
            message: "Field email is missing",
            code: 400,
        });
    }

    if (!emailValidator.test(name)) {
        errors.push({
            message: "Invalid email",
            code: 400,
        });
    }

    if (errors.length > 0) {
        throw new Error(errors[0].message);
    }
}

export function phoneValidator(phone: string) {
    const errors: validatorErrors[] = [];
    const nameRegex =
        /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;

    if (typeof phone !== "string") {
        errors.push({
            message: "Field phone is missing",
            code: 400,
        });
    }

    if (!nameRegex.test(phone)) {
        errors.push({
            message: "Invalid phone",
            code: 400,
        });
    }

    if (errors.length > 0) {
        throw new Error(errors[0].message);
    }
}
