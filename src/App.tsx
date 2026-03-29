import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  Layers3,
  MessageSquareMore,
  Radar,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import HomeV2 from './pages/HomeV2';
import HomeV4 from './pages/HomeV4';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Logo from './components/Logo';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55 },
};

const processSteps = [
  {
    id: '01',
    title: 'Diagnostico de Funil',
    text: 'Mapeamos origem, atendimento e fechamento para descobrir onde voce perde receita.',
  },
  {
    id: '02',
    title: 'Arquitetura de Midia',
    text: 'Estruturamos campanhas por intencao de compra com regras de escala e protecao de margem.',
  },
  {
    id: '03',
    title: 'CRM de Conversao',
    text: 'Conectamos WhatsApp, qualificacao e follow-up para reduzir o tempo entre lead e proposta.',
  },
  {
    id: '04',
    title: 'Rotina de Otimizacao',
    text: 'Ajustes semanais guiados por CAC, taxa de resposta e valor por oportunidade real.',
  },
];

const stackItems = [
  {
    icon: Target,
    title: 'Midia de Alta Intencao',
    text: 'Meta, Google e criativos orientados por etapa de funil, nao por vaidade de clique.',
  },
  {
    icon: MessageSquareMore,
    title: 'Orquestracao Comercial',
    text: 'SLA, templates e automacoes para o time responder rapido e converter melhor.',
  },
  {
    icon: CircleDollarSign,
    title: 'Painel de Receita',
    text: 'Visao consolidada de investimento, oportunidades e vendas com leitura executiva.',
  },
  {
    icon: Workflow,
    title: 'Playbooks de Escala',
    text: 'Regras claras para duplicar o que funciona e cortar o que drena verba.',
  },
];

const HomeV3 = () => {
  return (
    <div className="v3-root min-h-screen selection:bg-brand-primary selection:text-black">
      <div className="v3-noise" aria-hidden="true" />
      <div className="v3-rings" aria-hidden="true" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <Logo />
            <div className="hidden text-xs uppercase tracking-[0.22em] text-white/60 md:block">
              Performance Lab
            </div>
          </Link>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 md:flex">
            <a href="#sinais" className="hover:text-brand-secondary transition-colors">Sinais de Vazamento</a>
            <a href="#metodo" className="hover:text-brand-secondary transition-colors">Metodo</a>
            <a href="#stack" className="hover:text-brand-secondary transition-colors">Stack</a>
          </div>

          <a
            href="https://wa.me/5575981642126"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary transition-all hover:-translate-y-0.5 hover:bg-brand-primary hover:text-black"
          >
            Falar com Time
          </a>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
          <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-white/5 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                <Sparkles className="h-3.5 w-3.5" />
                V3 \ War Room de Performance
              </div>

              <h1 className="mt-6 font-display text-5xl uppercase leading-[0.93] text-white md:text-7xl">
                Menos
                <span className="text-brand-secondary"> achismo.</span>
                <br />
                Mais previsibilidade
                <span className="text-brand-primary"> de receita.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                A RN opera como um time de performance plugado no seu negocio: midia, CRM e rotina comercial
                para transformar leads em venda com controle real de CAC.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5575981642126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(250,95,42,0.36)]"
                >
                  Quero Escalar com Margem
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#metodo"
                  className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/75 transition-all hover:border-brand-secondary hover:text-brand-secondary"
                >
                  Ver Metodo
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ['+38%', 'media de ganho em conversao'],
                  ['-27%', 'queda de custo por oportunidade'],
                  ['100%', 'visibilidade do funil comercial'],
                ].map(([value, label]) => (
                  <div key={label} className="metric-card rounded-2xl border border-white/10 p-4">
                    <div className="font-display text-3xl uppercase leading-none text-brand-secondary">{value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.11em] text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              className="v3-panel relative rounded-3xl p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-white/65">
                <span>Revenue Control Board</span>
                <span>Live</span>
              </div>

              <div className="space-y-5">
                {[
                  ['Leads novos', '312', 'up'],
                  ['Taxa de resposta', '71%', 'up'],
                  ['Oportunidades quentes', '96', 'up'],
                  ['CAC atual', 'R$ 84', 'down'],
                ].map(([name, value, status]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{name}</span>
                      <span className={status === 'up' ? 'text-emerald-300' : 'text-brand-primary'}>{status === 'up' ? 'OK' : 'Ajuste'}</span>
                    </div>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="font-display text-4xl uppercase leading-none text-white">{value}</div>
                      <div className="h-2 w-28 rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${status === 'up' ? 'w-4/5 bg-emerald-300' : 'w-2/5 bg-brand-primary'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sinais" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Sinais de Vazamento</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">
                  Se voce vive isso,
                  <span className="text-brand-primary"> seu funil esta aberto.</span>
                </h2>
              </div>
              <Radar className="hidden h-20 w-20 text-brand-primary/60 lg:block" />
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                'Leads chegam e somem sem resposta do comercial.',
                'Voce nao consegue ligar investimento ao faturamento real.',
                'A equipe ajusta campanha sem criterio unico de receita.',
              ].map((item, idx) => (
                <motion.article key={item} {...fadeUp} transition={{ duration: 0.5, delay: idx * 0.08 }} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 font-display text-xl text-brand-secondary">0{idx + 1}</div>
                  <p className="text-base leading-relaxed text-white/80">{item}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-dark-surface px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Metodo RN</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Processo em 4 sprints de performance</h2>
              <p className="mt-4 text-lg text-white/70">Cada etapa trava uma fuga de receita. Quando soma, a operacao fica escalavel.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <motion.article key={step.id} {...fadeUp} transition={{ duration: 0.52, delay: idx * 0.06 }} className="rounded-3xl border border-white/10 bg-black/25 p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl uppercase text-brand-primary/80">{step.id}</span>
                    <Gauge className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{step.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-12 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Stack de Crescimento</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Tudo conectado para vender mais</h2>
              </div>
              <Layers3 className="h-16 w-16 text-brand-primary/70" />
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {stackItems.map((item, idx) => (
                <motion.article key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: idx * 0.07 }} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <item.icon className="h-8 w-8 text-brand-primary" />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-primary/15 via-black/30 to-brand-secondary/10 p-10 text-center md:p-16">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Posicionamento RN</p>
              <h2 className="mt-4 font-display text-4xl uppercase text-white md:text-6xl">
                Nao entregamos
                <span className="text-brand-primary"> trafego isolado.</span>
                <br />
                Entregamos sistema de vendas.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
                Se o lead nao vira proposta, nao e performance. Se nao vira venda, nao e crescimento.
              </p>

              <a
                href="https://wa.me/5575981642126"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:bg-brand-primary"
              >
                Agendar Diagnostico
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/65">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Operacao orientada por receita
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Time de marketing + comercial
                </span>
                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-brand-primary" />
                  Dashboard executivo de performance
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-dark-bg/95 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left">
          <Link to="/" className="flex items-center gap-3">
            <Logo />
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">RN Digital Midia V3</span>
          </Link>

          <p className="text-sm text-white/50">© 2026 RN Digital Midia. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.12em] text-white/65">
            <a href="/v1/" className="hover:text-brand-secondary transition-colors">Versao v1</a>
            <Link to="/" className="hover:text-brand-secondary transition-colors">Versao v2</Link>
            <Link to="/v4" className="hover:text-brand-secondary transition-colors">Versao v4</Link>
            <Link to="/privacidade" className="hover:text-brand-secondary transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-secondary transition-colors">Termos</Link>
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
        <Route path="/" element={<HomeV2 />} />
        <Route path="/v3" element={<HomeV3 />} />
        <Route path="/v4" element={<HomeV4 />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}
