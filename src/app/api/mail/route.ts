import { emailValidator, nameValidator, phoneValidator } from "@/utils/validators";
import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
    const req = await request.json();

    try {
        nameValidator(req.name);
        emailValidator(req.email);
        phoneValidator(req.phone);

        200
        
    } catch (error) {
        return NextResponse.json({
            error: {message: "não foi possível enviar o email"},
            data: null
        }, {
            status: 500
        });
    }

    const msg = {
        to: process.env.CONTACT_US_TO_EMAIL,
        from: "coord.vanveen@gmail.com",
        subject: "Sendgrid Test",
        // text: "teste texto?",
        html: `<strong>${"a"}</strong>`,
    };
    

    // try {
    //     await mail.send(msg);
        
    //     return NextResponse.json({
    //         error: null,
    //         data: null
    //     }, {
    //         status: 200
    //     });
    // } catch (error) {
    //     return NextResponse.json({
    //         error: {message: "não foi possível enviar o email"},
    //         data: null
    //     }, {
    //         status: 200
    //     });
    // }
}
