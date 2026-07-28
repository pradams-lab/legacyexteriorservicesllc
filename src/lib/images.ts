// Reliable, CDN-hosted placeholder photography (absolute URLs so they render
// identically on Lovable previews and external deployments).
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroFenceDriveway: u("photo-1600585154340-be6161a56a0c"),
  fenceStaining: u("photo-1607400201515-c2c41c07d307"),
  pressureWashing: u("photo-1558618666-fcd25c85cd64"),
  cleanConcreteDriveway: u("photo-1583608205776-bfd35f0d9f83"),
  woodRestoration: u("photo-1595872018818-97555653a011"),
  stonePatio: u("photo-1621905251189-08b45d6a269e"),
};