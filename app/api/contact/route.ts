import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const {name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portafolio <<onboarding@resend.dev>",
            to: "andresestrada0630@gmail.com",
            subject: `[Portafolio] ${subject}`,
            html: `
                <h2>Nuevo mensaje desde tu portafolio</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });
        return NextResponse.json(
            { message: "Mensaje enviado exitosamente" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}