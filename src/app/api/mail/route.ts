import { mailResponse } from "@/interfaces/Mail";
import generalRequest from "@/lib/generalRequest";
import { emailValidator, nameValidator, phoneValidator } from "@/lib/validators";
import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
    const req = await request.json();

    const response: mailResponse = {
        payload: {
            message: "",
            code: 0,
        },
        error: false,
    };

    try {
        nameValidator(req.name);
        emailValidator(req.email);
        phoneValidator(req.phone);

        if (req.captcha.length === 0) {
            response.payload.message = "Captcha inválido";
            response.payload.code = 400;
            response.error = true;

            return NextResponse.json(response, {
                status: 400,
            });
        }

        const validCaptcha = await generalRequest<Response>(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTHCA_TOKEN}&response=${req.captcha}`,
            "post",
        );

        const [, error] = validCaptcha;

        if (error) {
            response.payload.message = "Captcha inválido";
            response.payload.code = 400;
            response.error = true;

            return NextResponse.json(response, {
                status: 400,
            });
        }
    } catch (error) {
        console.log(error);

        response.payload.message = "Não foi possível enviar o email";
        response.payload.code = 500;
        response.error = true;

        return NextResponse.json(response, {
            status: 500,
        });
    }

    const msg = {
        to: [
            process.env.CONTACT_US_TO_EMAIL_1
                ? process.env.CONTACT_US_TO_EMAIL_1
                : "",
            process.env.CONTACT_US_TO_EMAIL_2
                ? process.env.CONTACT_US_TO_EMAIL_2
                : "",
        ],
        from: "coord.vanveen@gmail.com",
        subject: "Novo contato",
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 20px;">
            <div style="max-width: 500px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #444; margin-bottom: 20px;">Nova Mensagem!</h2>
                <p style="margin: 0 0 10px;"><strong>Nome:</strong> ${req.name}</p>
                <p style="margin: 0 0 10px;"><strong>Email:</strong> ${req.email}</p>
                <p style="margin: 0 0 10px;"><strong>Telefone:</strong> ${req.phone}</p>
                <h3 style="margin: 0 0 10px;">Mensagem:</h3>
                <p style="margin: 0;">${req.message}</p>
            </div>
        </div>
        `,
    };

    try {
        await mail.send(msg);

        response.payload.message = "Sua mensagem foi enviada com sucesso! Obrigado.";
        response.payload.code = 200;
        response.error = false;

        return NextResponse.json(response, {
            status: 200,
        });
    } catch (error) {
        response.payload.message = "Não foi possível enviar o email";
        response.payload.code = 500;
        response.error = true;

        return NextResponse.json(response, {
            status: 500,
        });
    }
}
