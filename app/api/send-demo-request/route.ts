import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, company } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Nias Website <onboarding@resend.dev>", // Você vai trocar depois
      to: ["lucas@nias.com.br"], // Coloque seu email aqui
      subject: "Solicitação de Demonstração - Nias AI",
      html: `
        <h2>Nova solicitação de demonstração</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
