export const PWA_THEME = {
  background: "#020617",
  foreground: "#f1f5f9",
  accent: "rgba(241, 245, 249, 0.12)",
} as const;

export function PwaIconImage({ size }: { size: number }) {
  const inner = Math.round(size * 0.625);
  const radius = Math.round(size * 0.125);
  const barHeight = Math.max(2, Math.round(size * 0.05));
  const gap = Math.round(size * 0.07);
  const pad = Math.round(size * 0.12);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: PWA_THEME.background,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          borderRadius: radius,
          background: PWA_THEME.accent,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: pad,
          gap,
        }}
      >
        <div
          style={{
            width: "100%",
            height: barHeight,
            borderRadius: barHeight,
            background: PWA_THEME.foreground,
          }}
        />
        <div
          style={{
            width: "75%",
            height: barHeight,
            borderRadius: barHeight,
            background: PWA_THEME.foreground,
          }}
        />
        <div
          style={{
            width: "100%",
            height: barHeight,
            borderRadius: barHeight,
            background: PWA_THEME.foreground,
          }}
        />
      </div>
    </div>
  );
}
