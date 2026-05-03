export function ProgressBar10({ value, total = 10 }: { value: number; total?: number }) {
  const v    = Math.max(0, Math.min(total, value));
  const pct  = v / total;
  const fill = v === 0 ? { width: '6px' } : { width: `calc(6px + (100% - 6px) * ${pct})` };
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ marginBottom: 4, fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: 12, color: 'rgb(140,140,150)', letterSpacing: 0.1 }}>
        {v} из {total}
      </div>
      <div style={{ position: 'relative', width: '100%', height: 16, background: 'rgba(47,47,69,0.2)', borderRadius: 999 }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          ...fill,
          background: 'rgb(16,200,78)', borderRadius: 999,
          transition: 'width .55s cubic-bezier(.2,.7,.3,1)',
        }} />
      </div>
    </div>
  );
}
