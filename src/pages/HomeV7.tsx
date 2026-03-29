import React from 'react';
import './HomeV7.fonts.css';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from '../components/Logo';

// ─── palette ──────────────────────────────────────────────────────────────────
const C = {
  bg:      '#040810',
  surface: 'rgba(6,10,22,0.85)',
  lime:    '#C9FF00',
  orange:  '#FF5500',
  text:    '#F2EEE5',
  dim:     'rgba(242,238,229,0.55)',
  muted:   'rgba(242,238,229,0.32)',
  border:  'rgba(255,255,255,0.07)',
  bLime:   'rgba(201,255,0,0.2)',
} as const;

const SYNE  = "'Syne', sans-serif";
const MONO  = "'JetBrains Mono', monospace";
const BODY  = "'DM Sans', sans-serif";

// ─── data ─────────────────────────────────────────────────────────────────────
const scoreMetrics = [
  { label: 'Leads no CRM',      value: '210',      pct: 67 },
  { label: 'CAC medio',         value: 'R$350',     pct: 78 },
  { label: 'Vendas do mes',     value: '27',        pct: 55 },
  { label: 'Receita rastreada', value: 'R$50.600',  pct: 82 },
];

const quickSignals: [string, string][] = [
  ['Taxa de contato',    '71%'],
  ['Tempo de resposta',  '4m'],
  ['Leads qualificados', '185'],
  ['ROI projetado',      '4.2x'],
];

const painPoints = [
  { id: '01', title: 'Lead sem rastreamento',       subtitle: 'Voce nao sabe qual campanha gerou venda real',   metric: '48',      note: 'leads sem resposta na ultima semana' },
  { id: '02', title: 'Sem follow-up',               subtitle: 'Lead esfria porque ninguem foi atras',           metric: '57%',     note: 'leads sem contato consistente' },
  { id: '03', title: 'Custo por venda invisivel',   subtitle: 'Dinheiro saindo todo mes sem saber o CAC',       metric: 'R$2.400', note: 'investidos sem rastreio completo' },
  { id: '04', title: 'Campanha rodando, venda parada', subtitle: 'Marketing e vendas sem conversa entre si',    metric: '127',     note: 'leads que nao viraram cliente' },
];

const solutions = [
  { num: '01', tag: 'CRM & Automacao', text: 'CRM conectado ao WhatsApp com follow-up que roda sozinho. O lead nao esfria esperando alguem lembrar.' },
  { num: '02', tag: 'Rastreamento',    text: 'Voce sabe de onde veiu cada venda e onde o funil esta travando. Sem isso, qualquer decisao e chute.' },
  { num: '03', tag: 'Qualificacao',    text: 'Cada lead entra na etapa certa, com temperatura definida. O time comercial atua quando faz sentido, nao o tempo todo.' },
  { num: '04', tag: 'Otimizacao',      text: 'Ajuste semanal de campanha e processo com base no que os numeros mostram, nao no que parece estar funcionando.' },
];

const flow = [
  { id: '01', title: 'Diagnostico',   text: 'Antes de escalar investimento, a gente mapeia onde os leads somem: na geracao, no atendimento ou no fechamento.' },
  { id: '02', title: 'Estruturacao',  text: 'CRM, tracking e automacoes configurados. Marketing e vendas passam a falar a mesma lingua.' },
  { id: '03', title: 'Aquisicao',     text: 'Campanhas ativadas nas plataformas certas, com criativos que ja foram testados para gerar oportunidade real.' },
  { id: '04', title: 'Qualificacao',  text: 'O lead recebe contato no momento certo, na etapa certa. Sem spam, sem silencio.' },
];

// ─── motion helpers ───────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

// ─── sub-components ───────────────────────────────────────────────────────────
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
      <span style={{ fontFamily: MONO, fontSize: '10px', color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {num} · {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: C.border }} />
    </div>
  );
}

function LiveDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="animate-pulse"
      style={{ width: size, height: size, borderRadius: '50%', background: C.lime, boxShadow: `0 0 ${size}px ${C.lime}`, flexShrink: 0, display: 'inline-block' }}
    />
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: MONO, fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: C.lime, padding: '3px 8px', border: `1px solid ${C.bLime}`, borderRadius: '3px',
    }}>
      {children}
    </span>
  );
}

// ─── component ────────────────────────────────────────────────────────────────
export default function HomeV7() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: BODY }}>

      {/* ── atmosphere ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-25%', left: '-15%', width: '65%', height: '65%',
          background: 'radial-gradient(ellipse, rgba(201,255,0,0.055) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '0', right: '-15%', width: '55%', height: '55%',
          background: 'radial-gradient(ellipse, rgba(255,85,0,0.04) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 0.4px, transparent 0.4px)',
          backgroundSize: '3px 3px', opacity: 0.22,
        }} />
      </div>

      <div className="relative z-10">

        {/* ════════════════════════════════════════ NAV ═══════════════════════════════════════════ */}
        <nav style={{
          borderBottom: `1px solid ${C.border}`,
          background: 'rgba(4,8,16,0.88)',
          backdropFilter: 'blur(14px)',
          position: 'sticky', top: 0, zIndex: 50,
        }}>
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">

            <Link to="/v7" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Logo />
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted }}>
                Digital Midia
              </span>
            </Link>

            <div className="hidden md:flex items-center" style={{ gap: '36px' }}>
              {(['Problema', 'Solucao', 'Como funciona'] as const).map((label) => (
                <a key={label} href={`#${label.toLowerCase().replace(' ', '-')}`}
                  style={{ fontFamily: BODY, fontSize: '13px', color: C.muted, textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/5575981642126"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '9px 18px', borderRadius: '6px',
                background: C.lime, color: '#000',
                fontFamily: MONO, fontWeight: 700, fontSize: '10px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'opacity .2s',
              }}
            >
              Agendar diagnostico <ArrowRight size={12} />
            </a>

          </div>
        </nav>

        {/* ════════════════════════════════════════ HERO ══════════════════════════════════════════ */}
        <section style={{ padding: '72px 24px 80px' }}>
          <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* left: copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  marginBottom: '28px', padding: '6px 14px',
                  border: `1px solid ${C.bLime}`, borderRadius: '4px',
                  fontFamily: MONO, fontSize: '10px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: C.lime,
                }}
              >
                <LiveDot size={6} />
                Trafego, CRM e automacao
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: SYNE, fontWeight: 800,
                  fontSize: 'clamp(38px, 4.8vw, 58px)',
                  lineHeight: 1.06, letterSpacing: '-0.025em',
                  marginBottom: '24px', color: C.text,
                }}
              >
                Pare de gerar leads.{' '}
                <span style={{ color: C.lime }}>Comece a fechar clientes.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
                style={{ fontSize: '16px', lineHeight: 1.7, color: C.dim, maxWidth: '460px', marginBottom: '40px' }}
              >
                Mais cliques nao resolvem o problema. O que falta e um processo que acompanha o lead do primeiro contato ate o fechamento, sem depender de memoria ou improviso.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.55 }}
                style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
              >
                <a
                  href="https://wa.me/5575981642126"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px', borderRadius: '7px',
                    background: C.lime, color: '#000',
                    fontFamily: SYNE, fontWeight: 800, fontSize: '14px',
                    letterSpacing: '0.01em', textDecoration: 'none',
                    transition: 'opacity .2s, transform .15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  Agendar diagnostico <ArrowRight size={16} />
                </a>

                <a
                  href="#como-funciona"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px', borderRadius: '7px',
                    border: `1.5px solid rgba(242,238,229,0.16)`,
                    color: C.dim, fontFamily: SYNE, fontWeight: 600,
                    fontSize: '14px', textDecoration: 'none',
                    transition: 'border-color .2s, color .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.bLime; e.currentTarget.style.color = C.lime; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(242,238,229,0.16)'; e.currentTarget.style.color = C.dim; }}
                >
                  Ver como funciona
                </a>
              </motion.div>
            </div>

            {/* right: terminal panel */}
            <motion.aside
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                border: `1px solid ${C.bLime}`, borderRadius: '12px',
                background: 'linear-gradient(150deg, rgba(8,14,28,0.97) 0%, rgba(4,8,16,0.99) 100%)',
                overflow: 'hidden',
              }}
            >
              {/* panel header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 18px', borderBottom: `1px solid ${C.border}`,
                fontFamily: MONO, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase',
              }}>
                <span style={{ color: 'rgba(201,255,0,0.75)' }}>Score de crescimento</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: C.muted }}>
                  <LiveDot size={5} /> ao vivo
                </span>
              </div>

              {/* metrics */}
              <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {scoreMetrics.map((m, i) => (
                  <div key={m.label} style={{
                    padding: '10px 12px', borderRadius: '6px',
                    background: 'rgba(255,255,255,0.025)', border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '7px' }}>
                      <span style={{ fontFamily: MONO, fontSize: '9px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.label}</span>
                      <span style={{ fontFamily: MONO, fontSize: '9px', color: C.lime, letterSpacing: '0.06em' }}>{m.pct}%</span>
                    </div>
                    <div style={{ fontFamily: SYNE, fontWeight: 700, fontSize: '20px', color: C.text, marginBottom: '8px' }}>{m.value}</div>
                    <div style={{ height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.pct}%` }}
                        transition={{ delay: 0.6 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: '100%', background: `linear-gradient(90deg, ${C.orange}, ${C.lime})`, borderRadius: '2px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* quick signals grid */}
              <div style={{ margin: '0 18px', border: `1px solid ${C.border}`, borderRadius: '7px', overflow: 'hidden' }}>
                <div style={{
                  padding: '9px 12px', borderBottom: `1px solid ${C.border}`,
                  fontFamily: MONO, fontSize: '8px', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: C.muted,
                }}>
                  Leitura rapida do funil
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {quickSignals.map(([label, value], i) => (
                    <div key={label} style={{
                      padding: '10px 12px',
                      borderRight: i % 2 === 0 ? `1px solid ${C.border}` : undefined,
                      borderBottom: i < 2 ? `1px solid ${C.border}` : undefined,
                    }}>
                      <div style={{ fontFamily: MONO, fontSize: '8px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontFamily: SYNE, fontWeight: 700, fontSize: '18px', color: C.lime }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* meta progress */}
              <div style={{ padding: '14px 18px 18px' }}>
                <div style={{ padding: '10px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${C.border}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: MONO, fontSize: '8px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Meta do ciclo atual</span>
                    <span style={{ fontFamily: MONO, fontSize: '8px', color: 'rgba(242,238,229,0.55)' }}>R$ 90.000</span>
                  </div>
                  <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden', marginBottom: '8px' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '56%' }}
                      transition={{ delay: 1.1, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: '100%', background: `linear-gradient(90deg, ${C.orange}, #FFAA00, ${C.lime})`, borderRadius: '2px' }}
                    />
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: '8px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>56% da meta atingida</span>
                </div>
              </div>
            </motion.aside>

          </div>
        </section>

        {/* ══════════════════════════════════════ 01 PROBLEMA ═════════════════════════════════════ */}
        <section id="problema" style={{ padding: '72px 24px', background: 'rgba(4,7,18,0.6)' }}>
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp(0)}>
              <SectionLabel num="01" label="Problema de mercado" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              style={{
                fontFamily: SYNE, fontWeight: 800,
                fontSize: 'clamp(28px, 3.8vw, 46px)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '48px', maxWidth: '660px',
              }}
            >
              Seu problema nao e trafego.{' '}
              <span style={{ color: 'rgba(242,238,229,0.3)' }}>E receita que vaza no meio do funil.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {painPoints.map((item, i) => (
                <motion.article
                  key={item.id}
                  {...fadeUp(i * 0.08)}
                  style={{
                    padding: '24px',
                    borderRadius: '10px',
                    border: `1px solid ${C.border}`,
                    background: 'linear-gradient(150deg, rgba(10,14,26,0.8) 0%, rgba(4,8,16,0.9) 100%)',
                  }}
                >
                  <div style={{ fontFamily: MONO, fontSize: '11px', color: C.orange, letterSpacing: '0.1em', marginBottom: '16px' }}>{item.id}</div>
                  <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: '15px', color: C.text, marginBottom: '6px', lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: '12px', color: C.muted, lineHeight: 1.55, marginBottom: '20px' }}>{item.subtitle}</p>
                  <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '30px', color: C.lime, lineHeight: 1, marginBottom: '4px' }}>{item.metric}</div>
                  <div style={{ fontFamily: MONO, fontSize: '8px', color: 'rgba(242,238,229,0.28)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.note}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 02 SOLUCAO ══════════════════════════════════════ */}
        <section id="solucao" style={{ padding: '72px 24px' }}>
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp(0)}>
              <SectionLabel num="02" label="Solucao" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              style={{
                fontFamily: SYNE, fontWeight: 800,
                fontSize: 'clamp(28px, 3.8vw, 46px)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '48px', maxWidth: '640px',
              }}
            >
              Aqui nao e so trafego.{' '}
              <span style={{ color: C.lime }}>E o processo inteiro, do clique ao fechamento.</span>
            </motion.h2>

            {/* unified grid panel */}
            <div style={{ border: `1px solid ${C.border}`, borderRadius: '10px', overflow: 'hidden' }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {solutions.map((item, i) => (
                  <motion.article
                    key={item.tag}
                    {...fadeUp(i * 0.09)}
                    style={{
                      padding: '32px 28px',
                      background: 'rgba(6,10,22,0.85)',
                      borderRight: i % 2 === 0 ? `1px solid ${C.border}` : undefined,
                      borderBottom: i < 2 ? `1px solid ${C.border}` : undefined,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                      <span style={{ fontFamily: MONO, fontSize: '10px', color: 'rgba(242,238,229,0.18)', letterSpacing: '0.08em' }}>{item.num}</span>
                      <Tag>{item.tag}</Tag>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: C.dim }}>{item.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════ 03 COMO FUNCIONA ══════════════════════════════════ */}
        <section id="como-funciona" style={{ padding: '72px 24px 88px', background: 'rgba(4,7,18,0.6)' }}>
          <div className="mx-auto w-full max-w-7xl">
            <motion.div {...fadeUp(0)}>
              <SectionLabel num="03" label="Como funciona" />
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              style={{
                fontFamily: SYNE, fontWeight: 800,
                fontSize: 'clamp(28px, 3.8vw, 46px)',
                lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '48px',
              }}
            >
              Do primeiro clique ao cliente fechado
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">

              {/* steps 2x2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {flow.map((step, i) => (
                  <motion.article
                    key={step.id}
                    {...fadeUp(i * 0.1)}
                    style={{
                      padding: '26px',
                      borderRadius: '10px',
                      border: `1px solid ${C.border}`,
                      background: 'rgba(6,10,22,0.7)',
                    }}
                  >
                    <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '40px', color: 'rgba(201,255,0,0.12)', lineHeight: 1, marginBottom: '14px' }}>
                      {step.id}
                    </div>
                    <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: '17px', color: C.text, marginBottom: '10px' }}>{step.title}</h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.65, color: C.dim }}>{step.text}</p>
                  </motion.article>
                ))}
              </div>

              {/* live panel */}
              <motion.aside
                {...fadeUp(0.2)}
                style={{
                  border: `1px solid ${C.bLime}`, borderRadius: '10px',
                  background: 'linear-gradient(160deg, rgba(8,16,32,0.97) 0%, rgba(4,8,16,0.99) 100%)',
                  overflow: 'hidden',
                  position: 'sticky', top: '90px',
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '11px 16px', borderBottom: `1px solid ${C.border}`,
                  fontFamily: MONO, fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>
                  <span style={{ color: 'rgba(201,255,0,0.72)' }}>Painel em tempo real</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: C.muted }}>
                    <LiveDot size={5} /> ao vivo
                  </span>
                </div>

                <div style={{ padding: '20px 16px' }}>
                  <div style={{ fontFamily: MONO, fontSize: '8px', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>Oportunidades abertas</div>
                  <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '52px', color: C.lime, lineHeight: 1, marginBottom: '28px' }}>388</div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {([['Leads quentes', '185'], ['Resgate ativo', '94'], ['Agendamentos', '42']] as [string, string][]).map(([label, value], i, arr) => (
                      <div key={label} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : undefined,
                      }}>
                        <span style={{ fontFamily: MONO, fontSize: '10px', color: C.dim, letterSpacing: '0.06em' }}>{label}</span>
                        <span style={{ fontFamily: SYNE, fontWeight: 700, fontSize: '17px', color: C.text }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.aside>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ FOOTER ════════════════════════════════════════ */}
        <footer style={{ borderTop: `1px solid ${C.border}`, background: 'rgba(4,8,16,0.92)', padding: '36px 24px' }}>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
            <Link to="/v7" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Logo />
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted }}>
                Digital Midia
              </span>
            </Link>

            <p style={{ fontFamily: MONO, fontSize: '10px', color: C.muted, letterSpacing: '0.08em' }}>
              © 2026 RN Digital Midia. Todos os direitos reservados.
            </p>
            <div style={{ display: 'flex', gap: '22px', fontFamily: MONO, fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <Link to="/privacidade" style={{ color: C.muted, textDecoration: 'none', transition: 'color .2s' }}>Privacidade</Link>
              <Link to="/termos" style={{ color: C.muted, textDecoration: 'none', transition: 'color .2s' }}>Termos</Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
