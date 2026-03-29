import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Target,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';
import Logo from '../components/Logo';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const pillars = [
  {
    icon: Target,
    title: 'Midia com intencao',
    text: 'Campanhas desenhadas por etapa de funil para gerar oportunidade de venda, nao volume vazio.',
  },
  {
    icon: MessageSquare,
    title: 'CRM + WhatsApp',
    text: 'Leads distribuidos com regra, mensagens guiadas e follow-up para reduzir tempo de resposta.',
  },
  {
    icon: Workflow,
    title: 'Automacoes comerciais',
    text: 'Sequencias de contato e qualificacao para evitar que lead quente esfrie no caminho.',
  },
  {
    icon: BarChart3,
    title: 'Painel executivo',
    text: 'Visao de CAC, pipeline e receita em uma leitura unica para decisao rapida.',
  },
];

const steps = [
  ['01', 'Diagnostico', 'Encontramos onde o funil quebra: captacao, atendimento ou fechamento.'],
  ['02', 'Estruturacao', 'Ajustamos campanhas, tracking e CRM com meta clara de receita.'],
  ['03', 'Operacao', 'Rodamos ciclos semanais de testes, otimiza, valida e escala.'],
  ['04', 'Expansao', 'Duplicamos o que da margem e cortamos o que drena investimento.'],
];

export default function HomeV4() {
  return (
    <div className="theme-v4 v4-root min-h-screen selection:bg-brand-secondary selection:text-black">
      <div className="v4-grid" aria-hidden="true" />
      <div className="v4-blur" aria-hidden="true" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link to="/v4" className="flex items-center gap-3">
            <Logo />
            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/65 md:block">RN V4</span>
          </Link>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.13em] text-white/70 md:flex">
            <a href="#visao" className="hover:text-brand-secondary transition-colors">Visao</a>
            <a href="#metodo" className="hover:text-brand-secondary transition-colors">Metodo</a>
            <a href="#stack" className="hover:text-brand-secondary transition-colors">Stack</a>
          </div>

          <a
            href="https://wa.me/5575981642126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary transition-all hover:-translate-y-0.5 hover:bg-brand-primary hover:text-black focus-visible:ring-2 focus-visible:ring-brand-secondary motion-reduce:transform-none"
          >
            Falar com especialista
          </a>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <span className="inline-flex items-center rounded-full border border-brand-secondary/35 bg-white/5 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Agencia de Performance
              </span>

              <h1 className="mt-7 font-display text-5xl uppercase leading-[0.93] text-white md:text-7xl">
                Leads chegam.
                <br />
                <span className="text-brand-secondary">Receita avanca.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Nao entregamos apenas trafego. Conectamos anuncios, CRM e rotina comercial para transformar
                cada lead em oportunidade real de venda.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5575981642126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-secondary motion-reduce:transform-none"
                >
                  Quero escalar com previsibilidade
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#metodo"
                  className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/80 transition-all hover:border-brand-secondary hover:text-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-secondary"
                >
                  Ver metodo RN
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="v4-panel rounded-3xl p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.13em] text-white/65">
                <span>Painel de performance</span>
                <span>Atualizado</span>
              </div>

              <div className="space-y-4">
                {[
                  ['Investimento', 'R$ 28.400', '100%'],
                  ['Leads qualificados', '412', '78%'],
                  ['Oportunidades', '133', '64%'],
                  ['Vendas', '47', '35%'],
                ].map(([label, value, ratio], idx) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                      <span>{label}</span>
                      <span className="text-brand-secondary">{ratio}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <strong className="font-display text-4xl uppercase leading-none text-white">{value}</strong>
                      <Gauge className={`h-5 w-5 ${idx === 3 ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="visao" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Realidade do mercado</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">
                A maioria para no lead.
                <span className="text-brand-primary"> Nos vamos ate a venda.</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                'Voce investe em anuncio, mas nao sabe qual campanha gera faturamento.',
                'O time comercial demora para responder e lead quente esfria.',
                'As decisoes viram tentativa e erro sem dados conectados.',
              ].map((item, idx) => (
                <motion.article key={item} {...fadeUp} transition={{ duration: 0.52, delay: idx * 0.07 }} className="v4-card rounded-3xl p-7">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-secondary/15 text-sm font-bold text-brand-secondary">
                    0{idx + 1}
                  </span>
                  <p className="mt-4 leading-relaxed text-white/80">{item}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="bg-dark-surface/80 px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-12 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Stack de entrega</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Tudo conectado para performar</h2>
              </div>
              <Layers3 className="hidden h-16 w-16 text-brand-primary/70 md:block" />
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {pillars.map((pillar, idx) => (
                <motion.article key={pillar.title} {...fadeUp} transition={{ duration: 0.52, delay: idx * 0.06 }} className="v4-card rounded-3xl p-7">
                  <pillar.icon className="h-8 w-8 text-brand-secondary" />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-white/72">{pillar.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp} className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Metodo RN</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Processo em 4 etapas objetivas</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {steps.map(([n, title, text], idx) => (
                <motion.article key={n} {...fadeUp} transition={{ duration: 0.5, delay: idx * 0.07 }} className="v4-step rounded-3xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl text-brand-primary/90">{n}</span>
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-white/75">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-primary/20 via-black/40 to-brand-secondary/10 p-10 text-center md:p-16">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-4xl uppercase text-white md:text-6xl">
                Pare de investir no escuro.
                <br />
                <span className="text-brand-secondary">Tenha controle real da sua receita.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
                Se o lead nao vira cliente, a gente ajusta o processo. Esse e o jogo.
              </p>

              <a
                href="https://wa.me/5575981642126"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-secondary motion-reduce:transform-none"
              >
                Agendar diagnostico
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/68">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-secondary" />
                  Performance orientada por venda
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-secondary" />
                  Midia, CRM e comercial no mesmo fluxo
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-dark-bg/95 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left">
          <Link to="/v4" className="flex items-center gap-3">
            <Logo />
            <span className="text-xs uppercase tracking-[0.2em] text-white/62">RN Digital Midia V4</span>
          </Link>

          <p className="text-sm text-white/50">© 2026 RN Digital Midia. Todos os direitos reservados.</p>

          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.12em] text-white/65">
            <a href="/v1/" className="hover:text-brand-secondary transition-colors">Versao v1</a>
            <Link to="/" className="hover:text-brand-secondary transition-colors">Versao v2</Link>
            <Link to="/v3" className="hover:text-brand-secondary transition-colors">Versao v3</Link>
            <Link to="/privacidade" className="hover:text-brand-secondary transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-secondary transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
