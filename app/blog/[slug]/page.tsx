import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Artigos do blog
const posts: Record<string, any> = {
  "futuro-analise-credito-ia": {
    title: "O Futuro da Análise de Crédito com IA",
    date: "2025-11-06",
    author: "Nias",
    content: `
# O Futuro da Análise de Crédito com IA

A análise de crédito está passando por uma transformação revolucionária impulsionada pela inteligência artificial. O que antes levava dias ou até semanas, agora pode ser realizado em questão de minutos, com maior precisão e menor margem de erro.

## A Evolução da Análise de Crédito

Tradicionalmente, a análise de crédito dependia fortemente de processos manuais, onde analistas precisavam revisar extensos documentos financeiros, balanços patrimoniais e demonstrações de resultado. Esse processo era não apenas demorado, mas também suscetível a erros humanos e inconsistências.

### Como a IA Está Mudando o Jogo

A inteligência artificial traz três grandes benefícios para a análise de crédito:

1. **Velocidade**: Processamento de documentos em segundos ao invés de horas
2. **Precisão**: Redução drástica de erros de digitação e interpretação
3. **Escalabilidade**: Capacidade de analisar centenas de propostas simultaneamente

## Tecnologias Envolvidas

### Processamento de Linguagem Natural (NLP)

A tecnologia NLP permite que os sistemas leiam e compreendam documentos financeiros complexos, extraindo informações relevantes automaticamente.

### Machine Learning

Algoritmos de aprendizado de máquina identificam padrões em dados históricos, melhorando continuamente a capacidade de prever inadimplência e avaliar riscos.

### Visão Computacional

Tecnologias de OCR (Optical Character Recognition) avançadas extraem dados de documentos escaneados e PDFs com alta precisão.

## Benefícios para Instituições Financeiras

- **Redução de custos operacionais** em até 70%
- **Aumento da satisfação do cliente** com respostas mais rápidas
- **Melhoria na gestão de risco** através de análises mais completas
- **Conformidade regulatória** automatizada

## O Papel Humano na Era da IA

Importante destacar: a IA não substitui os analistas, mas os empodera. Enquanto a IA cuida do trabalho repetitivo e demorado, os analistas podem focar em:

- Análises estratégicas mais complexas
- Relacionamento com clientes
- Tomada de decisões em casos especiais
- Desenvolvimento de políticas de crédito

## Conclusão

A inteligência artificial na análise de crédito não é mais uma tendência futurista – é uma realidade presente. Instituições que adotarem essas tecnologias hoje estarão melhor posicionadas para competir no mercado de amanhã.

Na Nias, estamos na vanguarda dessa transformação, oferecendo soluções que combinam o melhor da tecnologia com a expertise humana.

---

**Quer saber mais sobre como a IA pode transformar sua análise de crédito?** [Solicite uma demonstração](/#demo)
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-nias-blue hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-background text-foreground">
      <Header />

      <article className="max-w-5xl mx-auto px-6 md:px-8 py-24">
        {/* Breadcrumb */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-nias-blue transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar ao blog
        </Link>

        {/* Header do Post */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted border-t border-zinc/20 pt-6">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </header>

        {/* Conteúdo do Post */}
        <div className="prose prose-invert prose-xl max-w-none bg-background/50 dark:bg-background p-10 md:p-16 rounded-2xl border border-zinc/10 shadow-sm">
          {post.content.split("\n").map((line: string, index: number) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={index} className="text-4xl md:text-5xl font-bold mb-8 mt-16 first:mt-0">
                  {line.replace("# ", "")}
                </h1>
              );
            } else if (line.startsWith("## ")) {
              return (
                <h2 key={index} className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-foreground">
                  {line.replace("## ", "")}
                </h2>
              );
            } else if (line.startsWith("### ")) {
              return (
                <h3 key={index} className="text-2xl md:text-3xl font-semibold mb-4 mt-10 text-foreground">
                  {line.replace("### ", "")}
                </h3>
              );
            } else if (line.match(/^\d+\.\s\*\*/)) {
              const text = line.replace(/^\d+\.\s\*\*/, "").replace(/\*\*:?/, "");
              return (
                <li key={index} className="mb-3 ml-6 text-lg text-foreground/90 leading-relaxed list-decimal">
                  <strong className="text-foreground">{text.split(":")[0]}:</strong>
                  {text.split(":")[1]}
                </li>
              );
            } else if (line.startsWith("- ")) {
              return (
                <li key={index} className="mb-3 ml-6 text-lg text-foreground/90 leading-relaxed list-disc">
                  {line.replace("- ", "").replace(/\*\*/g, "")}
                </li>
              );
            } else if (line.trim() === "---") {
              return <hr key={index} className="my-12 border-zinc/20" />;
            } else if (line.trim() === "") {
              return <div key={index} className="h-4" />;
            } else if (line.startsWith("**") && line.includes("**")) {
              return (
                <p key={index} className="mb-6 text-lg text-foreground leading-relaxed">
                  {line.split("**").map((part, i) =>
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                  )}
                </p>
              );
            } else {
              return (
                <p key={index} className="mb-6 text-lg text-foreground/90 leading-relaxed">
                  {line}
                </p>
              );
            }
          })}
        </div>

        {/* CTA no final do post */}
        <div className="mt-20 p-10 md:p-12 bg-gradient-to-br from-nias-blue/10 to-nias-blue/5 rounded-3xl border border-nias-blue/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-5">
            Pronto para transformar sua análise de crédito?
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
            Descubra como a Nias pode acelerar seus processos e aumentar a
            precisão das suas análises com inteligência artificial.
          </p>
          <Link href="/#demo">
            <button className="px-10 py-4 rounded-full bg-nias-blue text-foreground font-semibold text-lg hover:bg-nias-blue/90 transition-all hover:scale-105">
              Solicitar demonstração
            </button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
