import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Layers3,
  MessageSquareMore,
  Radar,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import Logo from '../components/Logo';

const solutionItems = [
  {
    icon: Target,
    title: 'Meta, Google, TikTok & LinkedIn Ads',
    text: 'Campanhas ativas nas plataformas certas para o seu publico e com estrategia integrada.',
  },
  {
    icon: MessageSquareMore,
    title: 'CRM Proprio + WhatsApp',
    text: 'CRM integrado ao WhatsApp para centralizar conversas, organizar etapas e automatizar o atendimento.',
  },
  {
    icon: Workflow,
    title: 'Automacao de Follow-up',
    text: 'Nenhum lead esfria. Follow-up semi-automatico, qualificacao inteligente e avisos de temperatura.',
  },
  {
    icon: Gauge,
    title: 'Acompanhamento do Funil',
    text: 'Cada lead monitorado do primeiro clique ate a venda fechada, ou recuperado se travar no meio do caminho.',
  },
  {
    icon: Radar,
    title: 'Rastreamento Real',
    text: 'Tracking completo de cada lead ate a venda. Voce sabe exatamente de onde vem cada cliente e quanto custou.',
  },
  {
    icon: BarChart3,
    title: 'Painel de Acompanhamento',
    text: 'Visao clara de campanhas, leads, custo e vendas em tempo real. Dados reais, menos achismo.',
  },
];

const processSteps = [
  {
    id: '01',
    title: 'Estruturacao',
    text: 'Antes de subir qualquer anuncio, configuramos CRM, tracking, integracoes e funil. So depois ligamos a torneira.',
  },
  {
    id: '02',
    title: 'Geracao de Leads',
    text: 'Ativamos campanhas nas plataformas certas para o seu publico, com segmentacao precisa e criativos testados.',
  },
  {
    id: '03',
    title: 'Qualificacao Automatica',
    text: 'Os leads passam por filtros, mensagens inteligentes e sao organizados no CRM por etapa e temperatura.',
  },
  {
    id: '04',
    title: 'Acompanhamento de Vendas',
    text: 'Cada lead e monitorado ate virar cliente ou ser recuperado. Nenhuma oportunidade cai no esquecimento.',
  },
  {
    id: '05',
    title: 'Otimizacao Continua',
    text: 'Decisoes baseadas em dados reais, nao em achismo. Ajustamos campanhas, funis e processos todo mes.',
  },
];

const forWho = [
  'Ja investe ou quer investir em trafego',
  'Negocios que dependem de leads para vender',
  'Quer previsibilidade de crescimento',
  'Cansado de investir sem entender o que esta acontecendo',
];

export default function HomeV5() {
  return (
    <div className="v3-root min-h-screen selection:bg-brand-primary selection:text-black">
      <div className="v3-noise" aria-hidden="true" />
      <div className="v3-rings" aria-hidden="true" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-bg/92">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link to="/v5" className="flex items-center gap-3">
            <Logo />
            <div className="hidden text-xs uppercase tracking-[0.22em] text-white/60 md:block">
              Performance Lab
            </div>
          </Link>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 md:flex">
            <a href="#problema" className="hover:text-brand-secondary transition-colors">Realidade do Mercado</a>
            <a href="#solucao" className="hover:text-brand-secondary transition-colors">A Solucao</a>
            <a href="#como" className="hover:text-brand-secondary transition-colors">Como Funciona</a>
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
                Trafego pago · CRM · Automacao
              </div>

              <h1 className="mt-6 font-display text-5xl uppercase leading-[0.93] text-white md:text-7xl">
                Mais clientes
                <span className="text-brand-secondary"> qualificados.</span>
                <br />
                Todos os dias
                <span className="text-brand-primary">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Gerar lead e facil. O problema e o que acontece depois. A gente cuida do processo inteiro,
                do primeiro clique ao fechamento.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5575981642126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(250,95,42,0.36)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  Quero mais leads qualificados
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#como"
                  className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/75 transition-all hover:border-brand-secondary hover:text-brand-secondary"
                >
                  Ver como funciona
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-4">
                {[
                  ['R$12M+', 'investidos em ads'],
                  ['80+', 'clientes ativos'],
                  ['4.8x', 'ROAS medio'],
                  ['97%', 'taxa de retencao'],
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
                <span>Funil de Conversao</span>
                <span>Live</span>
              </div>

              <div className="space-y-5">
                {[
                  ['Lead sem rastreamento', 'Sem origem clara', 'down'],
                  ['Custo por venda invisivel', 'Sem CAC real', 'down'],
                  ['Funil travado', 'Leads esfriando', 'down'],
                  ['Decisoes no achismo', 'Sem dados reais', 'down'],
                ].map(([name, value, status]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{name}</span>
                      <span className={status === 'down' ? 'text-brand-primary' : 'text-emerald-300'}>{status === 'down' ? 'Risco' : 'OK'}</span>
                    </div>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="font-display text-2xl uppercase leading-none text-white">{value}</div>
                      <div className="h-2 w-28 rounded-full bg-white/10">
                        <div className="h-full w-2/5 rounded-full bg-brand-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">01 · Realidade do Mercado</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">
                  Voce investe em anuncios.
                  <span className="text-brand-primary"> Os leads chegam. Mas nao viram venda.</span>
                </h2>
              </div>
              <Radar className="hidden h-20 w-20 text-brand-primary/60 lg:block" />
            </div>

            <p className="max-w-3xl text-white/75">
              A maioria das empresas investe em trafego, recebe leads, e ai... nada. O pior: voce nao sabe de onde veio cada lead,
              quanto custou cada venda, nem onde o funil esta travando.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                'Lead sem rastreamento: voce nao sabe de onde veio cada lead nem qual campanha gerou venda real.',
                'Custo por venda invisivel: investe todo mes sem saber quanto custa adquirir um cliente.',
                'Funil travado: os leads chegam mas somem sem follow-up estruturado.',
                'Decisoes no achismo: sem dados reais, as otimizacoes viram apostas.',
              ].map((item, idx) => (
                <article key={item} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 font-display text-xl text-brand-secondary">0{idx + 1}</div>
                  <p className="text-base leading-relaxed text-white/80">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solucao" className="bg-dark-surface px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">02 · A Solucao</p>
              <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Aqui voce nao contrata so gestao de trafego</h2>
              <p className="mt-4 text-lg text-white/70">Voce entra no processo inteiro, do clique ao fechamento.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {solutionItems.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-black/25 p-7">
                  <item.icon className="h-8 w-8 text-brand-primary" />
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como" className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">03 · Como funciona</p>
                <h2 className="mt-3 font-display text-4xl uppercase text-white md:text-6xl">Do primeiro clique ao cliente fechado</h2>
              </div>
              <Layers3 className="h-16 w-16 text-brand-primary/70" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {processSteps.map((step) => (
                <article key={step.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl uppercase text-brand-primary/80">{step.id}</span>
                    <Gauge className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-white/70">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-primary/15 via-black/30 to-brand-secondary/10 p-10 text-center md:p-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">05 · Diferencial</p>
              <h2 className="mt-4 font-display text-4xl uppercase text-white md:text-6xl">
                A maioria das agencias para no lead.
                <br />
                <span className="text-brand-secondary">Aqui o foco e a venda.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
                Se o lead nao vira cliente, a gente ajusta o processo. Se o funil trava, a gente corrige.
                Se a campanha nao performa, a gente otimiza.
              </p>

              <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
                {forWho.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5575981642126"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition-all hover:-translate-y-1 hover:bg-brand-primary motion-reduce:transform-none motion-reduce:transition-none"
              >
                Pare de depender de tentativa e erro
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-dark-bg/95 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left">
          <Link to="/v5" className="flex items-center gap-3">
            <Logo />
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">RN Digital Midia V5</span>
          </Link>

          <p className="text-sm text-white/50">© 2026 RN Digital Midia. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.12em] text-white/65">
            <a href="/v1/" className="hover:text-brand-secondary transition-colors">Versao v1</a>
            <Link to="/" className="hover:text-brand-secondary transition-colors">Versao v2</Link>
            <Link to="/v3" className="hover:text-brand-secondary transition-colors">Versao v3</Link>
            <Link to="/v4" className="hover:text-brand-secondary transition-colors">Versao v4</Link>
            <Link to="/privacidade" className="hover:text-brand-secondary transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-brand-secondary transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
