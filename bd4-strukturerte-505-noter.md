---
id: 4
status: iverksatt
sammendrag: Novelleanalytter i 700-felt erstattes av strukturerte 505-noter
steg:
  - status: Iverksatt
    dato: 2021-10-25
---
# BD4: Novelleanalytter flyttes fra 700 til 505
<BdStatus/>

Vi har i mange år levert novelleanalytter på manifestasjonstittel i 700-felt, men Nasjonalbiblioteket ønsker nå at tittelinførsler i 700-felt kun skal brukes for [autoriserte søkeinnganger for verk og uttrykk](https://rdakatalogisering.unit.no/70x-75x-bi-innforsler/).
For å levere poster i tråd med dette har vi som midlertidlig løsning:

1. slått av utsendelse av 700-analytter i `marc21`-formatet. 700-analytter vil fortsatt bli levert med legacy-formatet `marc21nor` (marc21 med 019).
2. begynt å generere strukturerte 505-noter som kan brukes som søkeinngang for novelletitlene.

På sikt vil noveller bli inkludert i verksregisteret som vi holder på å utvikle.

## Eksempel 1: Novellesamling med enkeltforfatter

For novellesamlinger med én enkeltforfatter eller flere forfattere med felles ansvar for hele samlingen registreres 505-noten med titler uten forfatterangivelse:

<marc>
*1001#$aNakajima, Kyoko$0(NO-TrBIB)1634286304949$4aut$811$81
*24510$aThings remembered and things forgotten$cKyoko Nakajima ; translated from the Japanese by Ian McCullough MacDonald and Ginny Tapley Takemori

*50500$tThings remembered and things forgotten --$tWhen my wife was a shiitake --$tThe life story of a sewing machine --$tGlobal positioning system --$tKirara's paper plane --$tA special day --$tThe pet civet --$tChildhood friends --$tThe last obon
</marc>

## Eksempel 2: Novelleantologi med flere forfattere

For antologier, samlinger av noveller med flere ulike forfattere der hver enkeltforfatter har ansvar kun for sin "egen" novelle registreres 505-noten med tittel og forfatterangivelse:

<marc>
*24500$aOg alle ting vert nye$bnye nynorske noveller

*50500$tAlvar og Marija /$rRakel Solstad --$tAv fjell er du komen /$rErlend Kaasa --$tDer heile verda er /$rAnnlaug Selstø --$tOg alle ting vert nye /$rSusanne Skogstad --$tStein, gras, pinnar /$rAnne Lise Frøkedal --$tBortebuar /$rInger Bråtveit --$tDen litle med krøllar /$rOda Malmin --$tEin av desse dagane /$rTore Kvæven --$tHeim /$rAina Basso
</marc>
