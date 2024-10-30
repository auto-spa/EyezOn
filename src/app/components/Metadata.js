"use client"; 


import { usePathname } from 'next/navigation';
import { useMetadata } from './MetaDataContext';


const Metadata = () => {
  const metadata = useMetadata();
  const pathname = usePathname();

  const currentMeta = metadata[pathname] || metadata["/"];

  return (
    <>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      {/* Add other meta tags here if needed */}
    </>
  );
};

export default Metadata;
