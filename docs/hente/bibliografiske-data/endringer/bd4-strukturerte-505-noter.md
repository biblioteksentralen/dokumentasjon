---
id: 4
status: iverksatt
sammendrag: Fra oktober 2021 er manifestasjonstitler for noveller i novellesamlinger omgjort fra 700-analytter til strukturerte 505-noter. Nye 700-analytter basert på verkstitler kommer så fort verksregisteret vårt er klar for det.
steg:
  - status: Iverksatt
    dato: 2021-10-25
---
# BD4: Manifestasjonstitler for noveller omgjøres fra 700-analytter til 505-noter
<BdStatus/>

Vi har i mange år levert novelleanalytter basert på manifestasjonstittel i 700-felt, men Nasjonalbiblioteket ønsker nå at tittelinførsler i 700-felt kun skal brukes for [autoriserte søkeinnganger for verk og uttrykk](/hente/bibliografiske-data/endringer/bd3-verk-og-uttrykk.html).
For å levere poster i tråd med dette har vi som midlertidlig løsning:

1. slått av utsendelse av 700-analytter i `marc21`-formatet inntil videre. De vil fortsatt bli levert med legacy-formatet `marc21nor` (marc21 med 019).
2. begynt å generere strukturerte 505-noter som kan brukes som søkeinngang for novelletitlene.

På sikt vil noveller bli inkludert i verksregisteret som vi holder på å utvikle. Vi vil da begynne å levere 700-analytter for noveller basert på foretrukket tittel for verk (se eksempel 3 under). Manifestasjonstittel vil kun bli levert i 505.

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

## Eksempel 3: Oversatt novellesamling med foretrukket tittel-analytter i 700 (planlagt) 

Når noveller har blitt inkludert i verksregisteret vårt, kommer vi til å begynne å leverere analytter med foretrukket tittel for verk. I dette eksempelet, en oversatt novellesamling, blir da de norske titelene – manifestasjonstitlene til novellene – registrert i `505 $t`, og det lages to 700-innførsler, én for uttrykk og én for verk, for hver novelle.

<marc>
*100 1# $a Riordan, Rick $d 1964-$0(NO-TrBIB)9068118 $4 aut $8 1
*240 00 $a Demigods & magicians
*245 10 $a Halvguder og magikere $b Percy og Annabeth møter Carter og Sadie Kane $c Rick Riordan ; oversatt av Torleif Sjøgren-Erichsen
*505 00 $t Sobeks sønn -- $t Serapis' stav -- $t Ptolemaios' krone
*700 12 $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The son of Sobek $l Norsk
*700 1# $i Oversettelse av: $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The son of Sobek $l Engelsk
*700 12 $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The staff of Serapis $l Norsk
*700 1# $i Oversettelse av: $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The staff of Serapis $l Engelsk
*700 12 $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The crown of Ptolemy $l Norsk
*700 1# $i Oversettelse av: $a Riordan, Rick $d 1964- $0 (NO-TrBIB)9068118 $t The crown of Ptolemy $l Engelsk
</marc>
