export interface LegalObject{
  emri: string,   // titulli specifik i prones
  cenonKritereteMoscenimit: boolean, // krieteret e nenit 18 ligji 20/2020
  siperfaqja: number, //siperfaqja e prones ne metra katror,
  //genplani: any, //genplani i ndertimit
  eshteObjektNeShkeljeTeLejesSeNdertimit: boolean, // vkm 1080 2.a
  eshtePosedues: boolean, //vkm 1080
  zoneInformaleApoUrbane: "Informale" | "Urbane", //vkm 1040
  eshteVijeBregdetare: boolean, // vkm 1040
  kurifiRrugor: number, // vkm 1040
  rrugeKombetareApoJoKombetare: "Kombetare" | "JoKombetare",
  plotesonCilesineNdertimore: boolean,
  eshteTrashegimiKulturore: boolean,
  shkelBrezinMbrojtesTeGazsjellesit: boolean,
  cenonIntegritetinEParkutArkeologjik: boolean,
  eshteZoneESigurise: boolean,
  cenonPamjenEJashtmeTeMonumentitTeKultures: boolean,
  cenonTerritorinENdertesavePublike: boolean,
  shkelTruallininERrugesEkzistuese: boolean,
  cenonVijenBlu: boolean,
  eshteNdertuarMinimalishtnjeKat: boolean,
  gjendetNerrethanateMoslekalizimitSipasligjit20_2020: boolean
  eshteObjektApoShtese: "Objekt" | "Shtese",
  result?: any,
  output?: 0 | 1
}
