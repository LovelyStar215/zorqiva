export type TrustedCompanyLogo = {
  name: string;
  src: string;
  contentScale?: number;
};

export const TRUSTED_COMPANY_LOGOS: TrustedCompanyLogo[] = [
  { name: "WM", src: "/logos/clients/wm.svg", contentScale: 0.499 },
  { name: "Qualcomm", src: "/logos/clients/qualcomm.svg", contentScale: 0.499 },
  { name: "Cisco", src: "/logos/clients/cisco.svg", contentScale: 0.92 },
  { name: "Warner Bros", src: "/logos/clients/warner-brothers.svg", contentScale: 0.499 },
  { name: "Twilio", src: "/logos/clients/twillio.svg", contentScale: 1.2 },
  { name: "Boston Scientific", src: "/logos/clients/boston-scientific.svg", contentScale: 0.499 },
  { name: "VMware", src: "/logos/clients/vmware.svg", contentScale: 1.816 },
  { name: "Camping World", src: "/logos/clients/camping-world.svg", contentScale: 0.499 },
  { name: "Tryg", src: "/logos/clients/tryg.svg", contentScale: 1.02 },
  { name: "Good Sam", src: "/logos/clients/good-sam.svg", contentScale: 0.72 },
  { name: "Bank of America", src: "/logos/clients/bank-of-america.svg", contentScale: 0.858 },
  { name: "Krafton", src: "/logos/clients/krafton.svg", contentScale: 0.499 },
  {
    name: "American Credit Acceptance",
    src: "/logos/clients/american-credit-acceptance.svg",
    contentScale: 0.777,
  },
  { name: "Skybound", src: "/logos/clients/skybound.svg", contentScale: 0.499 },
  { name: "Mitsubishi", src: "/logos/clients/mitsubishi.svg", contentScale: 0.951 },
  { name: "Renesas", src: "/logos/clients/renesas.svg", contentScale: 1.205 },
  { name: "Fujifilm", src: "/logos/clients/fujifilm.svg", contentScale: 1.735 },
  { name: "Hyundai Glovis", src: "/logos/clients/hyundai-glovis.svg", contentScale: 1 },
  { name: "Red Bull", src: "/logos/clients/redbull.svg", contentScale: 1 },
  { name: "Cameo", src: "/logos/clients/cameo.svg", contentScale: 1.033 },
  { name: "Valara", src: "/logos/clients/valara.webp", contentScale: 0.465 },
  { name: "WWF", src: "/logos/clients/wwf.webp", contentScale: 0.465 },
  { name: "Animoca Brands", src: "/logos/clients/animoca.webp", contentScale: 0.465 },
  { name: "PredictionStrike", src: "/logos/clients/prediction-strike.webp", contentScale: 0.465 },
  { name: "WHO", src: "/logos/clients/who.webp", contentScale: 0.465 },
  { name: "Mural", src: "/logos/clients/mural.webp", contentScale: 0.465 },
];
