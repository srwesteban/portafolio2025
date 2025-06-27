// WhatsAppButton.tsx

import Link from "next/link";

const WhatsAppButton = () => {
  const phoneNumber = "573215098953";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`
        fixed bottom-4 right-4 z-50
        p-2 sm:p-3 md:p-4
        bg-green-500 hover:bg-green-600
        rounded-full shadow-lg
        transition-all duration-300
        flex items-center justify-center
      `}
    >
      {/* Icono oficial */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
      >
        <path d="M16 .396c-8.837 0-16 7.163-16 16 0 2.823.737 5.598 2.133 8.033L0 32l7.709-2.018A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.19a13.1 13.1 0 01-6.687-1.83l-.48-.287-4.577 1.197 1.222-4.458-.312-.515a13.144 13.144 0 01-2.012-7.01c0-7.243 5.897-13.14 13.14-13.14s13.14 5.897 13.14 13.14S23.243 29.586 16 29.586z" />
        <path d="M24.308 19.884l-3.253-.93a1.01 1.01 0 00-1.002.259l-1.233 1.262a10.456 10.456 0 01-5.062-5.062l1.265-1.232a1.007 1.007 0 00.259-1.002l-.93-3.253a1.01 1.01 0 00-.952-.704c-2.27 0-4.115 1.846-4.115 4.115 0 .219.018.435.053.648.26 1.587 1.3 3.798 3.52 6.017 2.22 2.22 4.43 3.26 6.017 3.52.213.035.429.053.648.053 2.27 0 4.115-1.846 4.115-4.115a1.01 1.01 0 00-.705-.952z" />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;
