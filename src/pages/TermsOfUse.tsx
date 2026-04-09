import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-brand-primary selection:text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl border-white/10"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">TERMOS DE USO</h1>
          <p className="text-white/50 mb-12">Última atualização: 28/03/26</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do site rndigitalmidia.com.br e dos serviços oferecidos pela RN Digital Mídia.
            </p>

            <p>
              Ao acessar este site ou utilizar nossos serviços, você declara que leu, entendeu e concorda com estes Termos.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Objeto</h2>
              <p>
                A RN Digital Mídia disponibiliza por meio deste site informações institucionais, conteúdos, formulários de contato, canais de atendimento e, quando aplicável, apresentação e oferta de serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Uso do site</h2>
              <p className="mb-4">Ao utilizar este site, você concorda em:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4">
                <li>Utilizar as informações de forma lícita e responsável</li>
                <li>Não praticar atos que prejudiquem o funcionamento do site</li>
                <li>Não tentar acessar áreas restritas sem autorização</li>
                <li>Não inserir vírus, códigos maliciosos ou qualquer tecnologia prejudicial</li>
                <li>Não utilizar o site para fins fraudulentos, ilegais ou abusivos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cadastro e informações fornecidas</h2>
              <p className="mb-4">
                Ao preencher formulários, solicitar contato ou enviar informações, você se compromete a fornecer dados verdadeiros, completos e atualizados.
              </p>
              <p>
                A prestação de informações falsas poderá resultar na suspensão de contato, atendimento ou prestação de serviço, quando aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriedade intelectual</h2>
              <p className="mb-4">
                Todo o conteúdo disponível neste site é de propriedade da RN Digital Mídia ou de seus licenciadores, incluindo, mas não se limitando a:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4 mb-4">
                <li>Textos</li>
                <li>Imagens</li>
                <li>Vídeos</li>
                <li>Marcas</li>
                <li>Logotipos</li>
                <li>Layout</li>
                <li>Estrutura visual</li>
                <li>Materiais institucionais</li>
                <li>Conteúdos estratégicos e comerciais</li>
              </ul>
              <p>
                É proibida a reprodução, cópia, distribuição, modificação ou uso indevido, total ou parcial, sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitação de responsabilidade</h2>
              <p className="mb-4">
                A RN Digital Mídia busca manter as informações do site corretas e atualizadas, mas não garante que todo o conteúdo esteja sempre livre de erros, falhas, interrupções ou indisponibilidades.
              </p>
              <p className="mb-4">Não nos responsabilizamos por:</p>
              <ul className="list-disc list-inside space-y-1 text-white/60 ml-4">
                <li>Danos decorrentes do uso indevido do site</li>
                <li>Interrupções temporárias ou falhas técnicas</li>
                <li>Decisões tomadas com base exclusiva nas informações do site</li>
                <li>Problemas causados por terceiros, provedores ou integrações externas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Serviços e propostas comerciais</h2>
              <p className="mb-4">
                Quando houver apresentação de serviços, propostas, planos, condições comerciais ou materiais explicativos no site, essas informações poderão ser alteradas a qualquer momento, sem aviso prévio.
              </p>
              <p>
                A contratação de qualquer serviço poderá depender de análise, proposta formal, alinhamento comercial e aceite entre as partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Links e integrações com terceiros</h2>
              <p>
                Este site pode conter links, integrações ou redirecionamentos para plataformas de terceiros, como redes sociais, ferramentas de atendimento, CRM, automação, pagamento ou outros serviços externos. A RN Digital Mídia não se responsabiliza pelo conteúdo, funcionamento, disponibilidade ou políticas desses ambientes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacidade e proteção de dados</h2>
              <p>
                O tratamento de dados pessoais realizado em nosso site segue as diretrizes descritas em nossa Política de Privacidade, que deve ser lida em conjunto com estes Termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Alterações destes Termos</h2>
              <p className="mb-4">
                A RN Digital Mídia poderá alterar estes Termos de Uso a qualquer momento, visando melhorias, atualizações legais ou ajustes operacionais.
              </p>
              <p>
                As alterações entram em vigor a partir da publicação nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Legislação aplicável</h2>
              <p>
                Estes Termos serão regidos pelas leis da República Federativa do Brasil, especialmente pela legislação civil, consumerista, digital e de proteção de dados aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
              <p className="mb-4">Se você tiver dúvidas sobre estes Termos de Uso, entre em contato:</p>
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

export default TermsOfUse;
