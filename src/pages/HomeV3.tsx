import React from 'react';
import { Link } from 'react-router-dom';
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
import Logo from '../components/Logo';

const processSteps = [
  {
    id: '01',
    title: 'Diagnostico de Funil',
    text: 'Mapeamos de onde vem o lead, como e atendido e por que nao fecha. Primeiro voce precisa saber onde sangra.',
  },
  {
    id: '02',
    title: 'Arquitetura de Midia',
    text: 'Montamos campanhas por intencao de compra, com criterio de escala e teto de custo. Crescer investimento sem saber o retorno nao e escala, e aposta.',
  },
  {
    id: '03',
    title: 'CRM de Conversao',
    text: 'Conectamos WhatsApp, qualificacao e follow-up para que o lead nao esfrie entre o primeiro contato e a proposta.',
  },
  {
    id: '04',
    title: 'Rotina de Otimizacao',
    text: 'Toda semana: CAC, taxa de resposta, valor por oportunidade. O que nao move o numero sai.',
  },
];

const stackItems = [
  {
    icon: Target,
    title: 'Midia de Alta Intencao',
    text: 'Meta e Google com criativos por etapa de funil. O objetivo e gerar oportunidade, nao clique.',
  },
  {
    icon: MessageSquareMore,
    title: 'Orquestracao Comercial',
    text: 'SLA, templates e automacoes para o time responder rapido e fechar melhor. Sem depender de cada um fazer do seu jeito.',
  },
  {
    icon: CircleDollarSign,
    title: 'Painel de Receita',
    text: 'Investimento, oportunidades e vendas em um lugar so. Leitura rapida para quem decide.',
  },
  {
    icon: Workflow,
    title: 'Playbooks de Escala',
    text: 'O que funciona vira regra. O que drena verba, para.',
  },
];

export default function HomeV3() {
  return (
    <div className="v3-root min-h-screen selection:bg-brand-primary selection:text-black">
      <div className="v3-noise" aria-hidden="true" />
      <div className="v3-rings" aria-hidden="true" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-bg/92">
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
            <div className="v3-enter">
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
                A RN entra na sua operacao como time de performance: cuida de midia, CRM e rotina comercial
                para que leads virem venda. Com numero real de CAC, nao estimativa.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5575981642126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(250,95,42,0.36)] motion-reduce:transform-none motion-reduce:transition-none"
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
            </div>

            <div className="v3-enter v3-enter-delay v3-panel relative rounded-3xl p-6 md:p-8">
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
            </div>
          </div>
        </section>

        <section id="sinais" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Sinais de Vazamento</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">
                  Se voce vive isso,
                  <span className="text-brand-primary"> seu funil esta aberto.</span>
                </h2>
              </div>
              <Radar className="hidden h-20 w-20 text-brand-primary/60 lg:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                'Leads chegam, o comercial nao responde, e ninguem sabe explicar por que.',
                'Voce nao consegue ligar o que gasta em midia ao que entra de receita.',
                'A equipe mexe na campanha sem criterio - cada um com o seu.',
              ].map((item, idx) => (
                <article key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 font-display text-xl text-brand-secondary">0{idx + 1}</div>
                  <p className="text-base leading-relaxed text-white/80">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-dark-surface px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Metodo RN</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Processo em 4 sprints de performance</h2>
              <p className="mt-4 text-lg text-white/70">4 sprints. Cada um tampa um buraco diferente. Quando todos rodam juntos, a operacao para de depender de improviso.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <article key={step.id} className="rounded-3xl border border-white/10 bg-black/25 p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl uppercase text-brand-primary/80">{step.id}</span>
                    <Gauge className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Stack de Crescimento</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Tudo conectado para vender mais</h2>
              </div>
              <Layers3 className="h-16 w-16 text-brand-primary/70" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {stackItems.map((item, idx) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <item.icon className="h-8 w-8 text-brand-primary" />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-primary/15 via-black/30 to-brand-secondary/10 p-10 text-center md:p-16">
            <div>
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
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:bg-brand-primary motion-reduce:transform-none motion-reduce:transition-none"
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
            </div>
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
            <Link to="/v5" className="hover:text-brand-secondary transition-colors">Versao v5</Link>
            <Link to="/privacidade" className="hover:text-brand-secondary transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-secondary transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

