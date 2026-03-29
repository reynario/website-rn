import React from 'react';
import { Link } from 'react-router-dom';

const painPoints = [
  {
    id: '01',
    title: 'Lead sem rastreamento',
    subtitle: 'Sem visao da origem real',
    metric: '48',
    note: 'leads sem resposta na ultima semana',
  },
  {
    id: '02',
    title: 'Sem follow-up',
    subtitle: 'Leads esfriam no meio do funil',
    metric: '57%',
    note: 'leads sem contato consistente',
  },
  {
    id: '03',
    title: 'Custo por venda invisivel',
    subtitle: 'Investimento sem clareza de CAC',
    metric: 'R$2.400',
    note: 'investidos sem rastreio completo',
  },
  {
    id: '04',
    title: 'Campanha otimizada, venda nao',
    subtitle: 'Marketing e vendas desconectados',
    metric: '127',
    note: 'leads que nao viraram cliente',
  },
];

const solutions = [
  {
    tag: 'CRM & Automacao',
    text: 'CRM proprio conectado ao WhatsApp com trilhas de follow-up para nao perder oportunidades.',
  },
  {
    tag: 'Rastreamento',
    text: 'Tracking de ponta a ponta para saber de onde veio cada venda e onde o funil trava.',
  },
  {
    tag: 'Qualificacao',
    text: 'Leads entram por etapa e temperatura, com regras claras para time comercial atuar no momento certo.',
  },
  {
    tag: 'Otimizacao',
    text: 'Decisoes com base em dados reais, nao achismo. Ajuste semanal de campanhas e processo comercial.',
  },
];

const flow = [
  {
    id: '01',
    title: 'Diagnostico',
    text: 'Mapeamos gargalos de geracao, atendimento e fechamento antes de escalar investimento.',
  },
  {
    id: '02',
    title: 'Estruturacao',
    text: 'Configuramos CRM, tracking, automacoes e integraremos marketing com vendas.',
  },
  {
    id: '03',
    title: 'Aquisicao',
    text: 'Ativamos campanhas com segmentacao precisa e criativos orientados a oportunidade real.',
  },
  {
    id: '04',
    title: 'Qualificacao',
    text: 'Leads recebem fluxo inteligente ate chegar no momento certo para conversao.',
  },
];

export default function HomeV6() {
  return (
    <div className="min-h-screen bg-[#070a10] text-white selection:bg-brand-primary selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(250,95,42,0.25),transparent_42%),radial-gradient(circle_at_78%_18%,rgba(39,195,143,0.15),transparent_38%),linear-gradient(180deg,#070a10_0%,#060910_60%,#070a10_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.07)_0.4px,transparent_0.4px)] [background-size:3px_3px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-black/35 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
            <Link to="/v6" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-brand-primary/45 bg-white/5 px-2 font-display text-xl text-brand-secondary">RN</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">RN Digital Midia V6</span>
            </Link>

            <a
              href="https://wa.me/5575981642126"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-primary bg-brand-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-secondary transition-colors hover:bg-brand-primary hover:text-black"
            >
              Agendar diagnostico
            </a>
          </div>
        </header>

        <main>
          <section className="px-6 pb-16 pt-14 md:pt-20">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="rounded-3xl border border-white/12 bg-black/30 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary/90">Trafego, CRM e automacao</p>
                <h1 className="mt-4 font-sans text-4xl font-bold leading-tight text-white md:text-6xl">
                  Transforme leads em
                  <span className="text-brand-secondary"> vendas previsiveis</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  Voce nao precisa de mais cliques. Precisa de um sistema que acompanhe o lead do primeiro toque ate o fechamento.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/5575981642126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-secondary px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-black transition-colors hover:bg-brand-primary"
                  >
                    Agendar diagnostico
                  </a>
                  <a
                    href="#como-funciona"
                    className="rounded-full border border-white/18 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:border-brand-secondary hover:text-brand-secondary"
                  >
                    Ver como funciona
                  </a>
                </div>
              </div>

              <aside className="rounded-3xl border border-brand-primary/20 bg-[linear-gradient(160deg,rgba(250,95,42,0.14),rgba(8,12,18,0.9)_35%,rgba(8,12,18,0.95)_100%)] p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">Score de crescimento</p>
                <div className="mt-6 space-y-5">
                  {[
                    ['Leads no CRM', '210', '67%'],
                    ['CAC medio', 'R$350', '78%'],
                    ['Vendas do mes', '27', '55%'],
                    ['Receita rastreada', 'R$50.600', '82%'],
                  ].map(([label, value, bar]) => (
                    <div key={label} className="rounded-2xl border border-white/12 bg-black/35 p-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-white/65">
                        <span>{label}</span>
                        <span>{bar}</span>
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">{value}</div>
                      <div className="mt-3 h-1.5 rounded-full bg-white/12">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" style={{ width: bar }} />
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="px-6 py-14">
            <div className="mx-auto w-full max-w-7xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/85">01 · Problema de mercado</p>
              <h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
                Seu problema nao e trafego.
                <span className="text-brand-secondary"> E perda de receita no meio do funil.</span>
              </h2>

              <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {painPoints.map((item) => (
                  <article key={item.id} className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(250,95,42,0.1),rgba(12,17,25,0.9)_35%,rgba(8,12,18,0.95)_100%)] p-5">
                    <p className="text-lg font-black text-brand-primary">{item.id}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
                    <p className="mt-5 text-3xl font-black text-brand-secondary">{item.metric}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/45">{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-14">
            <div className="mx-auto w-full max-w-7xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/85">02 · Solucao</p>
              <h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
                Aqui nao entregamos so trafego.
                <span className="text-brand-secondary"> Conectamos marketing e vendas de ponta a ponta.</span>
              </h2>

              <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {solutions.map((item) => (
                  <article key={item.tag} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.13em] text-brand-secondary">{item.tag}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/72">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="como-funciona" className="px-6 pb-20 pt-14">
            <div className="mx-auto w-full max-w-7xl">
              <h2 className="font-display text-4xl uppercase text-white md:text-6xl">
                Do primeiro clique ao cliente fechado
              </h2>

              <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_320px]">
                <div className="grid gap-4 md:grid-cols-2">
                  {flow.map((step) => (
                    <article key={step.id} className="rounded-2xl border border-white/10 bg-black/28 p-5">
                      <p className="text-xl font-black text-brand-primary">{step.id}</p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/68">{step.text}</p>
                    </article>
                  ))}
                </div>

                <aside className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(39,195,143,0.12),rgba(10,14,20,0.95)_45%)] p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60">Painel em tempo real</p>
                  <div className="mt-5 rounded-xl border border-white/10 bg-black/35 p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-white/50">Oportunidades abertas</p>
                    <p className="mt-1 text-4xl font-black text-brand-secondary">388</p>
                    <div className="mt-4 space-y-3">
                      {[['Leads quentes', '185'], ['Resgate ativo', '94'], ['Agendamentos', '42']].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between border-b border-white/10 pb-2 text-sm">
                          <span className="text-white/65">{k}</span>
                          <span className="font-semibold text-white">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/35 py-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/55">© 2026 RN Digital Midia. Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-[0.12em] text-white/65">
              <a href="/v1/" className="transition-colors hover:text-brand-secondary">v1</a>
              <Link to="/" className="transition-colors hover:text-brand-secondary">v2</Link>
              <Link to="/v3" className="transition-colors hover:text-brand-secondary">v3</Link>
              <Link to="/v4" className="transition-colors hover:text-brand-secondary">v4</Link>
              <Link to="/v5" className="transition-colors hover:text-brand-secondary">v5</Link>
              <Link to="/v6" className="text-brand-secondary">v6</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
