import Image from 'next/image';

const Logo = () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/cc_logo.jpg" // Path to your image in the public directory
        alt="Logo"
        width={36}
        height={36}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Combined Curiosity
      </span>
    </div>
  </>
);

export default Logo;
