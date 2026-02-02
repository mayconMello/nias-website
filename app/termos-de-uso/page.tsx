import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Nias AI",
  description: "Termos de Uso da plataforma Nias AI",
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Navegação de volta */}

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
          <div className="text-foreground/60 mb-12 space-y-1">
            <p>Data de Vigência: 01/Out/2025</p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8 text-foreground/80">
            <section>
              <p className="leading-relaxed mb-6">
                Bem-vindo à Nias (&quot;Empresa,&quot; &quot;nós,&quot;
                &quot;nos,&quot; ou &quot;nosso&quot;). Estes Termos de Uso
                (&quot;Termos&quot;) regulam seu acesso e uso da nossa
                plataforma de análise de documentos e elaboração de respostas
                impulsionada por IA (a &quot;Plataforma&quot;). Ao utilizar
                nossa Plataforma, você (&quot;Usuário&quot; ou
                &quot;Cliente&quot;) concorda em cumprir com estes Termos. Se
                você não concorda com estes Termos, não deve acessar ou usar
                nossa Plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                1. Elegibilidade e Registro de Conta
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>1.1 Idade Mínima:</strong> Você deve ter pelo menos 18
                  anos de idade para usar nossa Plataforma.
                </p>
                <p className="leading-relaxed">
                  <strong>1.2 Registro:</strong> O acesso à Plataforma pode
                  exigir a criação de uma conta. Você é responsável por manter a
                  confidencialidade das suas credenciais e por todas as
                  atividades realizadas na sua conta.
                </p>
                <p className="leading-relaxed">
                  <strong>1.3 Uso Empresarial:</strong> Se você utiliza a
                  Plataforma em nome de uma empresa ou entidade jurídica, você
                  declara e garante que possui autoridade para vincular essa
                  entidade a estes Termos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                2. Serviços Fornecidos
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Nossa Plataforma oferece os seguintes serviços:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Análise de Documentos:</strong> Upload e análise de
                    documentos utilizando inteligência artificial.
                  </li>
                  <li>
                    <strong>Geração de Respostas:</strong> Criação automatizada
                    de respostas e documentos baseados em modelos treinados.
                  </li>
                  <li>
                    <strong>Personalização:</strong> Capacidade de customizar
                    modelos de acordo com as necessidades específicas do
                    Cliente.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong>2.1 Conformidade:</strong> Nossos serviços estão em
                  conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                3. Obrigações do Usuário e Restrições
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Ao utilizar a Plataforma, você concorda em:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Utilizar os serviços apenas para fins legais e em
                    conformidade com todas as leis e regulamentos aplicáveis.
                  </li>
                  <li>
                    Não utilizar a Plataforma para criar ou distribuir conteúdo
                    ilegal, difamatório, fraudulento ou prejudicial.
                  </li>
                  <li>
                    Não tentar realizar engenharia reversa, descompilar ou
                    extrair o código-fonte ou os modelos de IA subjacentes.
                  </li>
                  <li>
                    Não introduzir vírus, malware ou qualquer outro código
                    malicioso na Plataforma.
                  </li>
                  <li>
                    Não utilizar a Plataforma para criar um serviço competidor
                    de análise financeira automatizada.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong>3.1 Violações:</strong> Violações destes Termos podem
                  resultar na suspensão ou rescisão imediata da sua conta, sem
                  aviso prévio.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                4. Propriedade Intelectual
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>4.1 Propriedade da Empresa:</strong> Todos os
                  direitos, títulos e interesses relacionados à Plataforma,
                  incluindo, mas não se limitando a, modelos de IA, software,
                  código-fonte, design e funcionalidades, são de propriedade
                  exclusiva da Empresa.
                </p>
                <p className="leading-relaxed">
                  <strong>4.2 Propriedade do Cliente:</strong> Os documentos
                  gerados pela Plataforma com base nas informações fornecidas
                  pelo Cliente pertencem ao Cliente. No entanto, a Empresa
                  mantém direitos sobre a tecnologia utilizada para gerar esses
                  documentos.
                </p>
                <p className="leading-relaxed">
                  <strong>4.3 Licença de Uso:</strong> Ao utilizar a Plataforma,
                  você recebe uma licença limitada, não exclusiva,
                  intransferível e revogável para acessar e utilizar os serviços
                  de acordo com estes Termos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                5. Privacidade e Segurança de Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>5.1 Coleta e Uso de Dados:</strong> Coletamos e
                  utilizamos dados de acordo com nossa Política de Privacidade,
                  que está em conformidade com a LGPD.
                </p>
                <p className="leading-relaxed">
                  <strong>5.2 Segurança:</strong> Implementamos medidas de
                  segurança robustas, incluindo criptografia de dados em
                  trânsito e em repouso, além de controles de acesso rigorosos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                6. Taxas e Pagamento
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>6.1 Modelo de Precificação:</strong> A Plataforma
                  opera sob um modelo de precificação baseado no uso. As taxas
                  aplicáveis serão informadas durante o processo de contratação.
                </p>
                <p className="leading-relaxed">
                  <strong>6.2 Pagamentos:</strong> Os pagamentos devem ser
                  realizados conforme as condições acordadas. O não pagamento
                  dentro do prazo estabelecido pode resultar na suspensão ou
                  rescisão dos serviços.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                7. Isenções e Limitações de Responsabilidade
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>7.1 Isenção de Garantias:</strong> A Plataforma é
                  fornecida &quot;como está&quot; e &quot;conforme
                  disponível&quot;. Não garantimos que a Plataforma será livre
                  de erros, ininterrupta ou atenderá a todas as suas
                  expectativas.
                </p>
                <p className="leading-relaxed">
                  <strong>7.2 Limitação de Responsabilidade:</strong> Em nenhum
                  caso a Empresa será responsável por danos indiretos,
                  incidentais, especiais, consequenciais ou punitivos, incluindo
                  perda de lucros, receitas ou dados, decorrentes do uso ou
                  incapacidade de usar a Plataforma.
                </p>

                <p className="leading-relaxed">
                  <strong>7.3 Disponibilidade:</strong> Embora nos esforcemos
                  para manter a Plataforma disponível 99,9% do tempo, não
                  garantimos disponibilidade contínua e não seremos responsáveis
                  por interrupções de serviço.
                </p>
                <p className="leading-relaxed">
                  <strong>7.4 Limite Máximo de Responsabilidade:</strong> Nossa
                  responsabilidade total em relação a qualquer reclamação
                  relacionada à Plataforma será limitada ao valor pago pelo
                  Cliente nos últimos três meses antes do evento que deu origem
                  à reclamação.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                8. Rescisão e Suspensão
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>8.1 Rescisão pelo Cliente:</strong> Você pode cancelar
                  sua conta a qualquer momento entrando em contato com nosso
                  suporte.
                </p>
                <p className="leading-relaxed">
                  <strong>8.2 Rescisão pela Empresa:</strong> Podemos suspender
                  ou encerrar sua conta a qualquer momento se:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Você violar qualquer disposição destes Termos.</li>
                  <li>
                    Houver suspeita de uso fraudulento ou ilegal da Plataforma.
                  </li>
                  <li>
                    Pagamentos pendentes não forem quitados dentro do prazo
                    estabelecido.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong>8.3 Efeitos da Rescisão:</strong> Após a rescisão, seu
                  acesso à Plataforma será imediatamente revogado. Podemos, a
                  nosso critério, reter ou excluir os dados associados à sua
                  conta de acordo com nossa política de retenção de dados.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                9. Lei Aplicável e Resolução de Disputas
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>9.1 Lei Aplicável:</strong> Estes Termos serão regidos
                  e interpretados de acordo com as leis da República Federativa
                  do Brasil.
                </p>
                <p className="leading-relaxed">
                  <strong>9.2 Resolução de Disputas:</strong> Qualquer disputa
                  decorrente destes Termos será resolvida preferencialmente por
                  mediação. Caso a mediação não seja bem-sucedida, as disputas
                  serão submetidas à arbitragem de acordo com as regras da
                  Câmara de Arbitragem de São Paulo, com sede em São Paulo, SP.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                10. Alterações aos Termos
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos a qualquer
                  momento. Notificaremos você sobre mudanças significativas por
                  e-mail ou através de um aviso na Plataforma. O uso contínuo da
                  Plataforma após tais modificações constituirá sua aceitação
                  dos novos Termos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                11. Informações de Contato
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos, entre em contato
                  conosco:
                </p>
                <p className="leading-relaxed">
                  <strong>E-mail:</strong> legal@nias.com.br
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-zinc/20">
              <p className="leading-relaxed italic text-foreground/60">
                Ao utilizar nossa Plataforma, você reconhece que leu,
                compreendeu e concorda em estar vinculado a estes Termos de Uso.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
