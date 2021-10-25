---
id: 4
status: iverksatt
sammendrag: I oktober 2021 ble novelleanalytter flyttet fra 700-innførsler til strukturerte 505-noter.
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
*100 1# $a Nakajima, Kyoko $0 (NO-TrBIB)1634286304949 $4 aut $8 11 $8 1
*245 10 $a Things remembered and things forgotten $c Kyoko Nakajima ; translated from the Japanese by Ian McCullough MacDonald and Ginny Tapley Takemori
*505 00 $t Things remembered and things forgotten -- $t When my wife was a shiitake -- $t The life story of a sewing machine -- $t Global positioning system -- $t Kirara's paper plane -- $t A special day -- $t The pet civet -- $t Childhood friends -- $t The last obon
</marc>

## Eksempel 2: Novelleantologi med flere forfattere

For antologier, samlinger av noveller med flere ulike forfattere der hver enkeltforfatter har ansvar kun for sin "egen" novelle registreres 505-noten med tittel og forfatterangivelse:

<marc>
*245 00 $a Og alle ting vert nye $b nye nynorske noveller
*505 00 $t Alvar og Marija / $r Rakel Solstad -- $t Av fjell er du komen / $r Erlend Kaasa -- $t Der heile verda er / $r Annlaug Selstø -- $t Og alle ting vert nye / $r Susanne Skogstad -- $t Stein, gras, pinnar / $r Anne Lise Frøkedal -- $t Bortebuar / $r Inger Bråtveit -- $t Den litle med krøllar / $r Oda Malmin -- $t Ein av desse dagane / $r Tore Kvæven -- $t Heim / $r Aina Basso
</marc>
