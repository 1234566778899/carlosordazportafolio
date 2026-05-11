import { useState } from 'react';
import { PROJECTS } from '../data/portfolio';

const accent = 'var(--accent)';

function statusColor(status: string) {
  if (status === 'live') return accent;
  if (status === 'beta') return '#ffd166';
  if (status === 'en desarrollo') return '#9aa0ff';
  return 'var(--dim)';
}

function ProjectsIndex() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div style={{ borderTop: '1px solid var(--line)' }}>
      <div
        className="projhead"
        style={{
          display: 'grid',
          gridTemplateColumns: '80px minmax(0,1.4fr) minmax(0,2fr) minmax(0,1fr) 90px',
          gap: 16,
          padding: '10px 0',
          borderBottom: '1px solid var(--line)',
          fontSize: 10,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--dim)',
        }}
      >
        <span>#</span>
        <span>nombre</span>
        <span>descripción</span>
        <span>stack</span>
        <span style={{ textAlign: 'right' }}>year</span>
      </div>

      {PROJECTS.map((p, i) => {
        const active = hovered === i;
        const sc = statusColor(p.status);
        return (
          <a
            key={p.no}
            href={p.repo === 'privado' ? '#' : `https://${p.repo}`}
            target={p.repo === 'privado' ? undefined : '_blank'}
            rel={p.repo === 'privado' ? undefined : 'noopener noreferrer'}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="projrow"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px minmax(0,1.4fr) minmax(0,2fr) minmax(0,1fr) 90px',
              gap: 16,
              padding: '26px 0',
              borderBottom: '1px solid var(--line)',
              background: active ? '#0e0e0e' : 'transparent',
              transition: 'background .15s',
              cursor: p.repo === 'privado' ? 'not-allowed' : 'pointer',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span style={{ color: active ? accent : 'var(--dim)', fontSize: 13 }}>{p.no}</span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 'clamp(18px,1.7vw,22px)', fontWeight: 500, letterSpacing: '-.01em', color: active ? accent : 'var(--fg)', transition: 'color .15s' }}>
                {p.name}
              </span>
              <span style={{ fontSize: 11, color: 'var(--dim)' }}>
                <span style={{ color: sc }}>●</span> {p.status} · {p.role}
              </span>
            </span>
            <span style={{ color: '#cfcfcf', fontSize: 13, lineHeight: 1.55, alignSelf: 'center' }}>{p.blurb}</span>
            <span style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignContent: 'center', alignSelf: 'center' }}>
              {p.tags.map((t) => (
                <span key={t} style={{ fontSize: 10, color: 'var(--dim)', border: '1px solid var(--line-hi)', padding: '2px 6px' }}>{t}</span>
              ))}
            </span>
            <span style={{ textAlign: 'right', color: 'var(--dim)', fontSize: 13, alignSelf: 'center' }}>
              {p.year}{' '}
              <span style={{ color: active ? accent : 'var(--line-hi)', marginLeft: 6 }}>↗</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}

function ProjectsBento() {
  const positions = [
    { col: 'span 4', row: 'span 2' },
    { col: 'span 2', row: 'span 2' },
    { col: 'span 3', row: 'span 1' },
    { col: 'span 3', row: 'span 1' },
    { col: 'span 3', row: 'span 1' },
    { col: 'span 3', row: 'span 1' },
  ];
  return (
    <div
      className="bento"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridAutoRows: 'minmax(200px, auto)',
        gap: 0,
        border: '1px solid var(--line)',
      }}
    >
      {PROJECTS.map((p, i) => {
        const pos = positions[i] || { col: 'span 3', row: 'span 1' };
        const sc = statusColor(p.status);
        const big = i === 0;
        return (
          <a
            key={p.no}
            href={p.repo === 'privado' ? '#' : `https://${p.repo}`}
            target={p.repo === 'privado' ? undefined : '_blank'}
            rel={p.repo === 'privado' ? undefined : 'noopener noreferrer'}
            style={{
              gridColumn: pos.col,
              gridRow: pos.row,
              padding: big ? 36 : 24,
              borderRight: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              background: '#0c0c0c',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              transition: 'background .15s',
              textDecoration: 'none',
              color: 'inherit',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#101010')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#0c0c0c')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 11, color: 'var(--dim)' }}>
              <span style={{ color: accent }}>/{p.no}</span>
              <span>{p.year}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: big ? 'clamp(28px,3.4vw,44px)' : 'clamp(18px,1.6vw,22px)', fontWeight: 500, letterSpacing: '-.01em' }}>
              {p.name}
            </h3>
            <p style={{ margin: 0, color: '#cfcfcf', fontSize: big ? 14 : 12, lineHeight: 1.55, flex: 1 }}>{p.blurb}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, color: 'var(--dim)' }}>
                <span style={{ color: sc }}>●</span> {p.status}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {p.tags.slice(0, big ? 4 : 2).map((t) => (
                  <span key={t} style={{ fontSize: 10, color: 'var(--dim)', border: '1px solid var(--line-hi)', padding: '2px 6px' }}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

interface Props {
  layout?: 'index' | 'bento';
}

export default function Proyectos({ layout = 'index' }: Props) {
  return (
    <section id="proyectos" data-screen-label="05 Proyectos">
      <header className="sec-head">
        <div>
          <div className="sec-tag"><b>05</b>/ proyectos.md</div>
          <h2 className="sec-title">Proyectos<em style={{ fontStyle: 'normal', color: accent }}>.</em></h2>
        </div>
        <div className="sec-meta">
          {PROJECTS.length} entradas<br />2023 — 2026
        </div>
      </header>
      {layout === 'bento' ? <ProjectsBento /> : <ProjectsIndex />}
    </section>
  );
}
