import dynamic from 'next/dynamic';
import Link from 'next/link';

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);

export default function Home() {
  const maxBounds = [
    [21.4207341578, -17.0204284327], // southwest [lat, lng]
    [35.7599881048, -1.12455115397], // northeast [lat, lng]
  ];

  return (
    <>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link href="/">Home</Link> |{' '}<Link href="/about">About</Link> |{' '}<Link href="/goal">Goal</Link> |{' '}<Link href="/apps">Apps</Link>
      </nav>
      <div style={{ height: 'calc(100vh - 60px)', width: '100%' }}>
        <MapContainer
          center={[31.7917, -7.0926]}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          maxBounds={maxBounds}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
}
