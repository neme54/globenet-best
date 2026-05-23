import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Globenet Web Development Agency in Awka Anambra Nigeria'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A56DB 0%, #2563EB 50%, #3B82F6 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              fontWeight: 900,
              color: '#1A56DB',
            }}
          >
            G
          </div>
          <span style={{ fontSize: 72, fontWeight: 900, color: 'white' }}>
            Globenet
          </span>
        </div>
        <p style={{ fontSize: 32, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
          Web Development Agency in Awka, Anambra, Nigeria
        </p>
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.75)',
            marginTop: 16,
            fontStyle: 'italic',
          }}
        >
          Think It, We&apos;ll Build It...
        </p>
      </div>
    ),
    { ...size }
  )
}
