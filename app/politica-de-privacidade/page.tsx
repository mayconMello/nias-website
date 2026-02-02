import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Nias AI",
  description: "Política de Privacidade da plataforma Nias AI",
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidade
          </h1>
          <div className="text-foreground/60 mb-12 space-y-1">
            <p>Data de Vigência: 01/Out/2025</p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                1. Objetivo
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Esta Política de Privacidade tem como objetivo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Orientar nossos colaboradores, parceiros e prestadores de
                    serviços sobre as práticas de tratamento de dados pessoais.
                  </li>
                  <li>
                    Assegurar que o tratamento de dados pessoais seja realizado
                    de forma lícita, legítima e transparente.
                  </li>
                  <li>
                    Informar os titulares dos dados sobre seus direitos e como
                    exercê-los.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                2. Abrangência
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Esta política se aplica a todas as atividades de tratamento de
                  dados pessoais realizadas pela Nias, incluindo, mas não se
                  limitando a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dados de usuários e clientes da plataforma.</li>
                  <li>
                    Dados de colaboradores, parceiros e prestadores de serviços.
                  </li>
                  <li>
                    Qualquer outra parte que tenha seus dados processados pela
                    Nias.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                3. Definições
              </h2>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li>
                    <strong>Dado Pessoal:</strong> Qualquer informação
                    relacionada a uma pessoa natural identificada ou
                    identificável.
                  </li>
                  <li>
                    <strong>Dado Pessoal Sensível:</strong> Dados sobre origem
                    racial ou étnica, convicção religiosa, opinião política,
                    filiação a sindicato ou organização de caráter religioso,
                    filosófico ou político, dado referente à saúde ou à vida
                    sexual, dado genético ou biométrico.
                  </li>
                  <li>
                    <strong>Titular:</strong> Pessoa natural a quem se referem
                    os dados pessoais.
                  </li>
                  <li>
                    <strong>Controlador:</strong> Pessoa natural ou jurídica, de
                    direito público ou privado, a quem competem as decisões
                    referentes ao tratamento de dados pessoais.
                  </li>
                  <li>
                    <strong>Operador:</strong> Pessoa natural ou jurídica, de
                    direito público ou privado, que realiza o tratamento de
                    dados pessoais em nome do controlador.
                  </li>
                  <li>
                    <strong>Tratamento:</strong> Toda operação realizada com
                    dados pessoais, como coleta, produção, recepção,
                    classificação, utilização, acesso, reprodução, transmissão,
                    distribuição, processamento, arquivamento, armazenamento,
                    eliminação, avaliação ou controle da informação,
                    modificação, comunicação, transferência, difusão ou
                    extração.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                4. Coleta de Dados Pessoais
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Coletamos dados pessoais das seguintes formas:
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    a) Dados Fornecidos Diretamente
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Informações de Contato:</strong> Nome, e-mail,
                      telefone, endereço.
                    </li>
                    <li>
                      <strong>Informações de Identificação:</strong> CPF, RG,
                      data de nascimento, informações profissionais.
                    </li>

                    <li>
                      <strong>Comunicações e Feedback:</strong> Informações
                      fornecidas por meio de e-mails ou formulários de contato.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    b) Dados Coletados Automaticamente
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Informações de Uso:</strong> Páginas visitadas,
                      tempo de navegação, cliques, interações com a plataforma.
                    </li>
                    <li>
                      <strong>Dados de Dispositivo:</strong> Endereço IP, tipo
                      de navegador, sistema operacional, identificador de
                      dispositivo.
                    </li>
                    <li>
                      <strong>Cookies e Tecnologias Similares:</strong>{" "}
                      Utilizamos cookies para melhorar a experiência do usuário
                      e analisar padrões de uso.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    c) Dados Obtidos de Terceiros
                  </h3>
                  <p className="leading-relaxed ml-4">
                    Podemos receber dados de parceiros comerciais, provedores de
                    serviços e fontes públicas.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                5. Finalidades do Tratamento de Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Os dados pessoais coletados são utilizados para as seguintes
                  finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Fornecimento e Melhoria dos Serviços:</strong>{" "}
                    Processar documentos, gerar respostas, personalizar a
                    experiência do usuário.
                  </li>
                  <li>
                    <strong>Comunicação:</strong> Enviar notificações,
                    atualizações, newsletters e materiais promocionais (com
                    consentimento do titular).
                  </li>
                  <li>
                    <strong>
                      Cumprimento de Obrigações Legais e Contratuais:
                    </strong>{" "}
                    Responder a solicitações de autoridades, cumprir
                    regulamentações aplicáveis.
                  </li>
                  <li>
                    <strong>Análise e Desenvolvimento:</strong> Realizar
                    pesquisas, análises estatísticas e desenvolvimento de novos
                    produtos e serviços.
                  </li>
                  <li>
                    <strong>Proteção e Segurança:</strong> Prevenir fraudes,
                    garantir a segurança da plataforma e dos usuários.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                6. Compartilhamento de Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Podemos compartilhar dados pessoais nas seguintes situações:
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    a) Compartilhamento Interno
                  </h3>
                  <p className="leading-relaxed ml-4">
                    Dados podem ser compartilhados entre departamentos da Nias
                    para fins operacionais e de melhoria dos serviços.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    b) Prestadores de Serviços Terceirizados
                  </h3>
                  <p className="leading-relaxed ml-4">
                    Compartilhamos dados com prestadores de serviços que nos
                    auxiliam em atividades como hospedagem de dados,
                    processamento de pagamentos, análise de dados e suporte ao
                    cliente. Esses prestadores são contratualmente obrigados a
                    proteger os dados e utilizá-los apenas para as finalidades
                    especificadas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    c) Autoridades Governamentais
                  </h3>
                  <p className="leading-relaxed ml-4">
                    Podemos divulgar dados pessoais quando exigido por lei ou em
                    resposta a processos legais, como intimações ou ordens
                    judiciais.
                  </p>
                </div>

                <div></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                7. Segurança dos Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Implementamos medidas de segurança técnicas e administrativas
                  para proteger os dados pessoais contra acesso não autorizado,
                  alteração, divulgação ou destruição. Essas medidas incluem:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Criptografia:</strong> Dados em trânsito e em
                    repouso são criptografados utilizando protocolos de
                    segurança reconhecidos.
                  </li>
                  <li>
                    <strong>Controles de Acesso:</strong> Acesso aos dados é
                    restrito a colaboradores autorizados que necessitam dessas
                    informações para desempenhar suas funções.
                  </li>

                  <li>
                    <strong>Backup e Recuperação:</strong> Implementamos
                    procedimentos de backup para garantir a continuidade dos
                    serviços em caso de incidentes.
                  </li>
                  <li>
                    <strong>Treinamento de Equipe:</strong> Nossos colaboradores
                    são treinados regularmente sobre práticas de segurança da
                    informação e privacidade de dados.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                8. Retenção e Exclusão de Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>8.1 Período de Retenção:</strong> Mantemos os dados
                  pessoais apenas pelo tempo necessário para cumprir as
                  finalidades para as quais foram coletados, ou conforme exigido
                  por lei.
                </p>
                <p className="leading-relaxed">
                  <strong>8.2 Exclusão de Dados:</strong> Após o término do
                  período de retenção, os dados pessoais serão excluídos de
                  forma segura, a menos que sua retenção seja necessária para o
                  cumprimento de obrigações legais ou para a defesa de
                  interesses legítimos da Nias.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                9. Direitos dos Titulares de Dados
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Confirmação e Acesso:</strong> Confirmar a
                    existência de tratamento e acessar seus dados pessoais.
                  </li>
                  <li>
                    <strong>Correção:</strong> Solicitar a correção de dados
                    incompletos, inexatos ou desatualizados.
                  </li>
                  <li>
                    <strong>Anonimização, Bloqueio ou Eliminação:</strong>{" "}
                    Solicitar a anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade
                    com a LGPD.
                  </li>
                  <li>
                    <strong>Portabilidade:</strong> Solicitar a portabilidade
                    dos dados a outro fornecedor de serviço ou produto.
                  </li>
                  <li>
                    <strong>Informação sobre Compartilhamento:</strong> Obter
                    informações sobre as entidades públicas e privadas com as
                    quais compartilhamos seus dados.
                  </li>
                  <li>
                    <strong>Revogação do Consentimento:</strong> Revogar o
                    consentimento a qualquer momento, quando o tratamento for
                    baseado em consentimento.
                  </li>
                  <li>
                    <strong>Oposição ao Tratamento:</strong> Opor-se ao
                    tratamento realizado com base em uma das hipóteses de
                    dispensa de consentimento.
                  </li>
                  <li>
                    <strong>Revisão de Decisões Automatizadas:</strong>{" "}
                    Solicitar a revisão de decisões tomadas unicamente com base
                    em tratamento automatizado de dados pessoais.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Para exercer qualquer um desses direitos, entre em contato
                  conosco.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                10. Cookies e Tecnologias de Rastreamento
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Melhorar a funcionalidade e a experiência do usuário.</li>
                  <li>Analisar padrões de uso e desempenho da plataforma.</li>
                  <li>
                    Personalizar conteúdo e anúncios (com seu consentimento).
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Você pode gerenciar suas preferências de cookies através das
                  configurações do seu navegador. No entanto, desabilitar
                  cookies pode afetar a funcionalidade da plataforma.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                11. Privacidade de Menores
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Nossa plataforma não é destinada a menores de 18 anos. Não
                  coletamos intencionalmente dados pessoais de menores. Se
                  tomarmos conhecimento de que coletamos dados de um menor sem o
                  consentimento adequado, tomaremos medidas para excluir essas
                  informações.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                12. Alterações a Esta Política de Privacidade
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente
                  para refletir mudanças em nossas práticas ou por razões
                  operacionais, legais ou regulatórias. Notificaremos você sobre
                  alterações significativas por e-mail ou através de um aviso em
                  nossa plataforma. Recomendamos que você revise esta política
                  regularmente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                13. Informações de Contato
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Se você tiver dúvidas, preocupações ou desejar exercer seus
                  direitos relacionados à privacidade de dados, entre em contato
                  com nosso Encarregado de Proteção de Dados (DPO):
                </p>
                <div className="ml-4 space-y-2">
                  <p className="leading-relaxed">
                    <strong>Nome:</strong> Lucas Zampronha
                  </p>
                  <p className="leading-relaxed">
                    <strong>E-mail:</strong> lucas@nias.com.br
                  </p>
                  <p className="leading-relaxed">
                    <strong>Endereço:</strong> Avenida Brigadeiro Faria Lima,
                    1811, cj 1119, Jardim Paulistano, São Paulo, SP, 01.452-001
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-zinc/20">
              <p className="leading-relaxed italic text-foreground/60">
                Ao utilizar nossa Plataforma, você reconhece que leu,
                compreendeu e concorda com esta Política de Privacidade.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
