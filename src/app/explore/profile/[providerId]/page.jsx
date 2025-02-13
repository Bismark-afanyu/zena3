"use client"

import dynamic from "next/dynamic";

const ClientOnlyProviderProfile = dynamic(
  () => import("@/components/provider-profile"),
  {
    ssr: false,
  }
);

const ProvidersProfile = () => {
  return <ClientOnlyProviderProfile />
}

export default ProvidersProfile;


