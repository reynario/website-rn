import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  Target,
  LayoutDashboard,
  ShieldCheck,
  MousePointerClick,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Logo from './components/Logo';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const Home = () => {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#problema" className="hover:text-white transition-colors">Realidade do Mercado</a>
            <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#entrega" className="hover:text-white transition-colors">O que você recebe</a>
          </div>
          <a 
            href="https://wa.me/5575981642126" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-secondary hover:text-white transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-brand-secondary/10 blur-[100px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border-brand-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary">Foco Total em Vendas</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 max-w-4xl mx-auto"
          >
            Mais clientes qualificados todos os dias com <span className="gradient-text">controle total</span> do seu funil
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Unimos tráfego pago, CRM próprio e automações para transformar leads em vendas com previsibilidade.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/5575981642126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-secondary to-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group"
            >
              Quero mais leads qualificados
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Abstract Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-brand-primary/20 to-transparent blur-2xl rounded-[2rem] -z-10" />
            <div className="glass rounded-2xl p-4 overflow-hidden shadow-2xl border-white/10">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 space-y-4">
                  <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
                  <div className="h-48 bg-white/5 rounded-xl animate-pulse" />
                </div>
                <div className="col-span-9 space-y-4">
                  <div className="h-20 bg-gradient-to-r from-brand-primary/10 to-transparent rounded-xl flex items-center px-6 gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/20" />
                    <div className="space-y-2">
                      <div className="w-32 h-3 bg-white/20 rounded-full" />
                      <div className="w-20 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-white/5 rounded-xl" />
                    <div className="h-32 bg-white/5 rounded-xl" />
                    <div className="h-32 bg-brand-primary/10 rounded-xl border border-brand-primary/20" />
                  </div>
                  <div className="h-40 bg-white/5 rounded-xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: O Problema */}
      <section id="problema" className="py-24 bg-dark-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-widest mb-6">
                <AlertCircle className="w-4 h-4" />
                Realidade do Mercado
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Você investe em anúncios, os leads até chegam, mas...
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                A maioria não responde, não evolui e não vira venda. Você está jogando dinheiro no lixo porque não tem clareza do seu processo.
              </p>
              <ul className="space-y-4">
                {[
                  "De onde veio cada lead?",
                  "Quanto custa cada venda real?",
                  "Onde exatamente o funil está travando?"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 glass border-red-500/20 rounded-2xl">
                <p className="text-red-400 font-medium">
                  "No fim, parece que o problema é o tráfego. Mas quase sempre é o processo."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass border-white/5 p-8 flex flex-col justify-center gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Investimento em Ads</span>
                    <span className="text-white font-bold">R$ 10.000</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-brand-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Leads Gerados</span>
                    <span className="text-white font-bold">450</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-brand-secondary" />
                  </div>
                </div>
                <div className="space-y-4 opacity-40">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-red-400 font-bold">Vendas Realizadas</span>
                    <span className="text-white font-bold">?</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[5%] h-full bg-red-500" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">
                  <div className="bg-red-500 text-white px-6 py-2 rounded-lg font-black text-2xl shadow-2xl border-2 border-white/20">
                    GARGALO!
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: A Solução */}
      <section id="solucao" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-primary blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
              Aqui você não contrata só <span className="text-brand-secondary italic">gestão de tráfego</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Você entra em um sistema completo de geração e conversão de leads. Nós estruturamos tudo para você passar a enxergar o que antes era invisível.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Omnichannel Ads", desc: "Meta, Google, TikTok e LinkedIn Ads integrados." },
              { icon: LayoutDashboard, title: "CRM Próprio", desc: "Integrado ao WhatsApp para controle total." },
              { icon: Zap, title: "Automações", desc: "Atendimento e follow up automático 24/7." },
              { icon: BarChart3, title: "Tracking Real", desc: "Rastreamento real de cada lead até a venda." },
              { icon: MessageSquare, title: "Filtros Inteligentes", desc: "Qualificação automática antes de chegar no comercial." },
              { icon: ShieldCheck, title: "Previsibilidade", desc: "Decisões baseadas em dados, não em achismo." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="p-8 rounded-3xl glass hover:border-brand-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Como Funciona */}
      <section id="como-funciona" className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">O Caminho para a Escala</h2>
              <p className="text-white/60 text-lg">Um processo estruturado em 5 etapas para garantir que nenhum lead seja desperdiçado.</p>
            </div>
            <div className="text-brand-secondary font-display text-8xl font-black opacity-10 hidden lg:block uppercase">PROCESSO</div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Estruturação", desc: "Organizamos campanhas, tracking e funil completo." },
              { step: "02", title: "Geração", desc: "Ativamos campanhas nas plataformas certas." },
              { step: "03", title: "Qualificação", desc: "Filtros e mensagens inteligentes no CRM." },
              { step: "04", title: "Acompanhamento", desc: "Monitoramento de cada lead até virar cliente." },
              { step: "05", title: "Otimização", desc: "Decisões baseadas em dados reais." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors"
              >
                <span className="text-brand-primary font-display font-black text-4xl block mb-6 opacity-30">{item.step}</span>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                {i < 4 && <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 w-8 h-8 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: O que você recebe */}
      <section id="entrega" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Entrega Completa</h2>
            <p className="text-white/60 text-lg">Tudo o que você precisa para dominar o seu mercado.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Gestão de tráfego completa", desc: "Meta Ads, Google Ads, TikTok e LinkedIn.", icon: MousePointerClick },
              { title: "CRM Próprio", desc: "Controle total dos leads e histórico de atendimento.", icon: LayoutDashboard },
              { icon: MessageSquare, title: "Integração WhatsApp", desc: "Histórico de conversas e envio de compra para o meta." },
              { icon: Zap, title: "Automação de leads", desc: "Follow up semi-automático e qualificação do lead." },
              { icon: BarChart3, title: "Painel de acompanhamento", desc: "Visual claro de campanhas, leads e ROI." },
              { icon: Target, title: "Gestão de funil", desc: "Do clique até o fechamento com visão completa.", highlight: true }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${item.highlight ? 'border-brand-primary bg-brand-primary/5' : 'border-white/5 glass'}`}>
                <item.icon className={`w-10 h-10 mb-6 ${item.highlight ? 'text-brand-secondary' : 'text-white/40'}`} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Diferencial */}
      <section className="py-24 bg-brand-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(45deg, #3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                A maioria das agências <span className="text-white/40">para no lead</span>.
              </h2>
              <div className="text-6xl md:text-7xl font-display font-black gradient-text mb-8">
                Aqui o foco é a venda.
              </div>
              <div className="space-y-6 text-xl text-white/70">
                <p>Se o lead não vira cliente, a gente ajusta o processo.</p>
                <p>Se o funil trava, a gente corrige.</p>
                <p>Se a campanha não performa, a gente otimiza.</p>
                <div className="pt-4 flex items-center gap-3 text-brand-secondary font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                  Tudo conectado.
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-3xl glass border-brand-primary/30 p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-[inherit] bg-dark-bg flex items-center justify-center overflow-hidden">
                   <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 space-y-4">
                         <div className="h-4 bg-white/5 rounded-full w-full" />
                         <div className="h-4 bg-white/5 rounded-full w-3/4" />
                         <div className="h-4 bg-brand-primary/40 rounded-full w-1/2" />
                         <div className="h-4 bg-white/5 rounded-full w-full" />
                      </div>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-brand-secondary/30 shadow-2xl animate-bounce">
                <div className="text-brand-secondary font-black text-3xl">+42%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">Conversão Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Para quem é */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Para quem é este sistema?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Empresas que já investem ou querem investir em tráfego",
                  "Negócios que dependem de leads para vender",
                  "Empresas que querem previsibilidade de crescimento",
                  "Quem está cansado de investir sem saber o que está acontecendo"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
                    <span className="text-lg text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-24 text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
              Pare de depender de tentativa e erro.
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Comece a ter controle real das suas vendas hoje mesmo.
            </p>
            <a 
              href="https://wa.me/5575981642126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-black text-xl hover:bg-brand-secondary hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group"
            >
              Quero estruturar meu funil
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-8 text-white/40 text-sm font-medium">
              Fale com nosso time agora.
            </p>
          </motion.div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-white/60 text-sm">© 2026 RN Digital Mídia. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="/v1/" className="hover:text-white transition-colors">Versao v1</a>
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

