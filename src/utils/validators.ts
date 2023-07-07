export function nameValidator(name: string) {
    const errors: object[] = [];
    const nameRegex = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\\s]+$");

    if (typeof(name) != "string") {
        errors.push({
            message: "Field name is missing",
            code: 400
        });
    } 

    if (!nameRegex.test(name)) {
        errors.push({
            message: "Invalid name",
            code: 400
        });
    }

    if (errors.length > 0) {
        throw errors;
    }
}

export function emailValidator(name: string) {
    const errors: object[] = [];
    const emailValidator = new RegExp("^[^\\s@]+@[^\\s@]+\.[^\\s@]+$");

    if (typeof(name) != "string") {
        errors.push({
            message: "Field email is missing",
            code: 400
        });
    }

    if (!emailValidator.test(name)) {
        errors.push({
            message: "Invalid email",
            code: 400
        });
    }

    if (errors.length > 0) {
        throw errors;
    }
}

export function phoneValidator(name: string) {
    const errors: object[] = [];
    const nameRegex = new RegExp("^\\+(?:[0-9] ?){6,14}[0-9]$");

    if (typeof(name) != "string") {
        errors.push({
            message: "Field phone is missing",
            code: 400
        });
    }

    if (!nameRegex.test(name)) {
        errors.push({
            message: "Invalid phone",
            code: 400
        });
    }

    if (errors.length > 0) {
        throw errors;
    }
}
