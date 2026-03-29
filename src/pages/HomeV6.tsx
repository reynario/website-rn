import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const painPoints = [
  {
    id: '01',
    title: 'Lead sem rastreamento',
    subtitle: 'Voce nao sabe qual campanha gerou venda real',
    metric: '48',
    note: 'leads sem resposta na ultima semana',
  },
  {
    id: '02',
    title: 'Sem follow-up',
    subtitle: 'Lead esfria porque ninguem foi atras',
    metric: '57%',
    note: 'leads sem contato consistente',
  },
  {
    id: '03',
    title: 'Custo por venda invisivel',
    subtitle: 'Dinheiro saindo todo mes sem saber o CAC',
    metric: 'R$2.400',
    note: 'investidos sem rastreio completo',
  },
  {
    id: '04',
    title: 'Campanha rodando, venda parada',
    subtitle: 'Marketing e vendas sem conversa entre si',
    metric: '127',
    note: 'leads que nao viraram cliente',
  },
];

const solutions = [
  {
    tag: 'CRM & Automacao',
    text: 'CRM conectado ao WhatsApp com follow-up que roda sozinho. O lead nao esfria esperando alguem lembrar.',
  },
  {
    tag: 'Rastreamento',
    text: 'Voce sabe de onde veio cada venda e onde o funil esta travando. Sem isso, qualquer decisao e chute.',
  },
  {
    tag: 'Qualificacao',
    text: 'Cada lead entra na etapa certa, com temperatura definida. O time comercial atua quando faz sentido, nao o tempo todo.',
  },
  {
    tag: 'Otimizacao',
    text: 'Ajuste semanal de campanha e processo com base no que os numeros mostram, nao no que parece estar funcionando.',
  },
];

const flow = [
  {
    id: '01',
    title: 'Diagnostico',
    text: 'Antes de escalar investimento, a gente mapeia onde os leads somem: na geracao, no atendimento ou no fechamento.',
  },
  {
    id: '02',
    title: 'Estruturacao',
    text: 'CRM, tracking e automacoes configurados. Marketing e vendas passam a falar a mesma lingua.',
  },
  {
    id: '03',
    title: 'Aquisicao',
    text: 'Campanhas ativadas nas plataformas certas, com criativos que ja foram testados para gerar oportunidade real.',
  },
  {
    id: '04',
    title: 'Qualificacao',
    text: 'O lead recebe contato no momento certo, na etapa certa. Sem spam, sem silencio.',
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
              <Logo />
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
                  Pare de gerar leads.
                  <span className="text-brand-secondary"> Comece a fechar clientes.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  Mais cliques nao resolvem o problema. O que falta e um processo que acompanha o lead do primeiro contato ate o fechamento, sem depender de memoria ou improviso.
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

              <aside className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-[linear-gradient(160deg,rgba(250,95,42,0.14),rgba(8,12,18,0.9)_35%,rgba(8,12,18,0.95)_100%)]" style={{ minHeight: 0 }}>
                <img
                  src="/funil-rn.png"
                  alt="Funil de conversao"
                  decoding="async"
                  fetchPriority="high"
                  className="block h-full w-full object-contain"
                />
              </aside>
            </div>
          </section>

          <section className="px-6 py-14">
            <div className="mx-auto w-full max-w-7xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/85">01 · Problema de mercado</p>
              <h2 className="mt-4 font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
                Seu problema nao e trafego.
                <span className="text-brand-secondary"> E receita que vaza no meio do funil.</span>
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
                Aqui nao e so trafego.
                <span className="text-brand-secondary"> E o processo inteiro, do clique ao fechamento.</span>
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
            <Link to="/v6" className="flex items-center gap-3">
              <Logo />
            </Link>

            <p className="text-sm text-white/55">© 2026. Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-[0.12em] text-white/65">
              <Link to="/privacidade" className="transition-colors hover:text-brand-secondary">Privacidade</Link>
              <Link to="/termos" className="transition-colors hover:text-brand-secondary">Termos</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
