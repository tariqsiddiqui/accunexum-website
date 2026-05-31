import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AccuNexum — Decision Governance for Enterprise AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #f0fdfa 100%)',
          padding: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: '#0f766e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Georgia, serif',
              fontSize: 56,
              fontWeight: 600,
              color: 'white',
            }}
          >
            A
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 40,
              fontWeight: 600,
              color: '#0f172a',
              letterSpacing: '-1px',
            }}
          >
            AccuNexum
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 72,
              fontWeight: 600,
              color: '#0f172a',
              letterSpacing: '-2px',
              lineHeight: 1.05,
            }}
          >
            Say yes to AI
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 72,
              fontWeight: 600,
              color: '#0f766e',
              letterSpacing: '-2px',
              lineHeight: 1.05,
            }}
          >
            without legal saying no.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: '#475569',
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Decision governance for enterprise AI. Decision Risk Map ·
            Autonomy Envelope Design · Fractional Chief AI Decision Officer.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '2px solid #e2e8f0',
            paddingTop: 24,
            fontSize: 22,
            color: '#64748b',
          }}
        >
          <div>accunexum.com</div>
          <div style={{ fontStyle: 'italic' }}>
            Decision Governance for Enterprise AI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
