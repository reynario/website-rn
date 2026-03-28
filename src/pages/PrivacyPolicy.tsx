import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-brand-primary selection:text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl border-white/10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">POLÍTICA DE PRIVACIDADE</h1>
          <p className="text-white/50 mb-12">Última atualização: 28/03/26</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              Na RN Digital Mídia, a sua privacidade é levada a sério. Esta Política de Privacidade explica de forma clara como coletamos, usamos, armazenamos e protegemos os seus dados ao acessar o site rndigitalmidia.com.br, preencher formulários, entrar em contato conosco ou utilizar nossos serviços.
            </p>

            <p>
              Ao navegar em nosso site ou utilizar nossos serviços, você concorda com os termos desta Política de Privacidade.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Quais dados coletamos</h2>
              <p className="mb-4">Podemos coletar as seguintes informações:</p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-brand-secondary mb-2">1.1 Dados fornecidos por você</h3>
                  <p className="mb-2">Quando você entra em contato, preenche um formulário ou solicita atendimento, podemos coletar:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/60">
                    <li>Nome</li>
                    <li>Telefone</li>
                    <li>E-mail</li>
                    <li>Empresa</li>
                    <li>Cargo</li>
                    <li>Cidade/Estado</li>
                    <li>Informações enviadas por mensagem, formulário ou WhatsApp</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-secondary mb-2">1.2 Dados coletados automaticamente</h3>
                  <p className="mb-2">Ao navegar em nosso site, algumas informações podem ser coletadas automaticamente, como:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/60">
                    <li>Endereço IP</li>
                    <li>Tipo de dispositivo</li>
                    <li>Navegador utilizado</li>
                    <li>Páginas acessadas</li>
                    <li>Tempo de permanência no site</li>
                    <li>Origem de acesso</li>
                    <li>Cookies e identificadores de navegação</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como usamos suas informações</h2>
              <p className="mb-4">Seus dados podem ser utilizados para:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4">
                <li>Entrar em contato com você</li>
                <li>Responder dúvidas e solicitações</li>
                <li>Enviar propostas comerciais</li>
                <li>Prestar nossos serviços</li>
                <li>Melhorar a experiência no site</li>
                <li>Realizar análises de desempenho, marketing e campanhas</li>
                <li>Personalizar comunicações e conteúdos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de dados</h2>
              <p className="mb-4">A RN Digital Mídia não vende seus dados pessoais.</p>
              <p className="mb-4">Seus dados poderão ser compartilhados apenas quando necessário, com:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 mb-4">
                <li>Plataformas de anúncios e marketing</li>
                <li>Ferramentas de CRM e automação</li>
                <li>Plataformas de hospedagem e tecnologia</li>
                <li>Prestadores de serviço parceiros</li>
                <li>Autoridades legais, quando houver obrigação</li>
              </ul>
              <p>Todo compartilhamento será realizado apenas quando necessário para a operação dos nossos serviços ou cumprimento legal.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Uso de cookies e tecnologias de rastreamento</h2>
              <p className="mb-4">Nosso site pode utilizar cookies, pixels e tecnologias semelhantes para:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 mb-4">
                <li>Melhorar a navegação</li>
                <li>Medir audiência</li>
                <li>Analisar comportamento no site</li>
                <li>Personalizar anúncios e campanhas</li>
                <li>Entender a origem dos acessos e conversões</li>
              </ul>
              <p>Você pode, a qualquer momento, desativar os cookies nas configurações do seu navegador. No entanto, isso pode afetar algumas funcionalidades do site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Armazenamento e segurança dos dados</h2>
              <p className="mb-4">Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, uso indevido, alteração, divulgação ou destruição.</p>
              <p>Apesar dos nossos esforços, nenhum sistema é totalmente inviolável. Por isso, recomendamos que você também adote boas práticas de segurança digital.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Seus direitos como titular de dados</h2>
              <p className="mb-4">Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 mb-4">
                <li>Confirmação da existência de tratamento dos seus dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou exclusão de dados desnecessários</li>
                <li>Portabilidade dos dados, quando aplicável</li>
                <li>Revogação do consentimento</li>
                <li>Exclusão dos dados, quando legalmente possível</li>
              </ul>
              <p>Para exercer seus direitos, entre em contato pelo e-mail: <span className="text-brand-secondary">rndigitalmidia@gmail.com</span></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Retenção dos dados</h2>
              <p>Seus dados serão armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Links para sites de terceiros</h2>
              <p>Nosso site pode conter links para sites, ferramentas ou plataformas de terceiros. Não nos responsabilizamos pelas políticas de privacidade ou práticas adotadas por esses ambientes externos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Alterações nesta Política de Privacidade</h2>
              <p className="mb-4">Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir melhorias, adequações legais ou mudanças operacionais.</p>
              <p>Recomendamos que você revise esta página periodicamente.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contato</h2>
              <p className="mb-4">Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato conosco:</p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="font-bold text-white">RN Digital Mídia</p>
                <p>E-mail: <span className="text-brand-secondary">rndigitalmidia@gmail.com</span></p>
                <p>Site: <span className="text-brand-secondary">rndigitalmidia.com.br</span></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
