import Header from "./components/Header";
import Footer from "./components/Footer";
import DemoForm from "./components/DemoForm";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle,
  FileOutput,
  Database,
  ShieldCheck,
  Clock,
} from "lucide-react";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      {/* <section className="px-6 pt-24 pb-24"> */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
          <Image
            src="/Nias AI Logo Branco.png"
            alt="Nias AI"
            width={320}
            height={126}
            className="mx-auto"
            priority
          />
          <p className="text-2xl text-muted md:text-3xl">
            Planilhamento de Balanços com Inteligência Artificial.
            <br />
            <span className="text-nias-blue font-bold">Em segundos.</span>
          </p>
          <div className="w-full max-w-4xl">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-zinc/20 bg-background/80 shadow-2xl">
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Demo Nias AI Up.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="#demo">
              <button className="px-8 py-4 rounded-full bg-nias-blue text-foreground font-medium hover:bg-nias-blue/90 transition-colors text-lg font-bold">
                Solicitar demonstração
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-6 bg-zinc/5">
        <div className="max-w-[1600px] mx-auto text-left px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Na era de IA, lentidão custa caro.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-3">
            Nossos agentes processam os balanços{" "}
            <span className="text-nias-blue font-bold">em segundos,</span>
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            para que os analistas invistam tempo construindo decisões,{" "}
            <span className="text-nias-blue font-bold">não planilhas</span>
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <FeatureCard
              icon={Clock}
              title="ROI Comprovado"
              description="Reduza até 99% do tempo gasto em planilhamento, liberando sua equipe para análises de maior valor agregado e decisões estratégicas."
            />
            <FeatureCard
              icon={Sparkles}
              title="Treinamento customizado"
              description="Implementamos em cada agente a metodologia e o plano de contas dos próprios analistas, alcançando o mesmo nível de expertise e precisão."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Controle de alucinações"
              description="Sistemas de processamento e validação em múltiplas camadas eliminam alucinações da IA, garantindo confiabilidade dos números."
            />
            <FeatureCard
              icon={FileOutput}
              title="Output flexível"
              description="Os resultados são entregues no formato que o cliente preferir – planilhas customizadas ou integração direta com o sistema."
            />

            <FeatureCard
              icon={Database}
              title="Governança de dados e LGPD"
              description="Não utilizamos seus dados proprietários para treinar modelos de IA Generativa. Seguimos as melhores práticas para garantir a privacidade das informações."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Segurança de nível bancário"
              description="Criptografia TLS v1.2 em trânsito e AES-256 em repouso. Infraestrutura certificada com controles de acesso rigorosos garantem máxima proteção dos dados."
            />
          </div>
        </div>
      </section>

      <DemoForm />

      <Footer />
    </div>
  );
}
