import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const {
            name,
            surname,
            email,
            phone,
            date,
            topic,
            comment,
            title,
            recaptchaToken,
        } = await req.json();
        const googleRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            }
        );

        const g = await googleRes.json();

        if (!g.success) {
            return NextResponse.json(
                { error: "Recaptcha failed" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "fedrez.hostingas.lt",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        const formattedDate = date ? date.split("T")[0] : "";

        const fields = [
            name &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Ім'я:</p><p>${name}</p>`,
            surname &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Ім'я:</p><p>${surname}</p>`,
            email &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Email:</p><p>${email}</p>`,
            phone &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Телефон:</p><p>${phone}</p>`,
            date &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Дата:</p><p>${formattedDate}</p>`,
            topic &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Тема:</p><p>${topic}</p>`,
            comment &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Коментар:</p><p>${comment}</p>`,
        ]
            .filter(Boolean)
            .join("");

        await transporter.sendMail({
            from: `"Сайт" <${process.env.SMTP_USER}>`,
            to: "kiev@eyes.ua",
            subject: `${title} - ${name} ${surname ? surname : ""}`,
            html: fields,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("SMTP error:", error);
        return NextResponse.json({ error: "Email error" }, { status: 500 });
    }
}
