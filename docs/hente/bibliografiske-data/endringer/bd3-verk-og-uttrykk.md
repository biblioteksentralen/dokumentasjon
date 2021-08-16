---
id: 3
status: planlagt
sammendrag: I september 2021 planlegger vi å begynne å ta i bruk NBs nye spesifikasjoner for registrering av foretrukket tittel (240/130) og søkeinnganger for verk og uttrykk i 700.
steg:
  - status: Annonsert
    dato: 2021-08-16
  - status: Planlagt iverksatt
    dato: medio september 2021
---

# BD3: Foretrukket tittel (240/130) og søkeinnganger for verk og uttrykk (700)
<BdStatus/>

Vi vil begynne å registrere informasjon om verk og uttrykk etter NB sine spesifikasjoner ("Veiledning til fullkatalogisering ved bruk av NB_Full bokmal, med RDA-referanser" Versjon 26.05.21, upublisert), som samsvarer med [Bibsys-konsortiets anbefalinger for autoriserte søkeinnganger for verk og uttrykk](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/) (Oppdatert 2021-05-05). Dette fører til to endringer i MARC 21-postene vi sender ut:

1. Vi har tidligere brukt felt 240 kun for å registrere *originaltittel*, men går nå over til å bruke dette for *foretrukket tittel for verk eller uttrykk*. Foretrukket tittel registreres uansett om dokumentet er oversatt fra et annet språk eller ei. Hvis dokumentet ikke har hovedansvarsgiver, registreres imidlertid foretrukket tittel i felt 130, ikke i 240.

2. Vi begynner å registrere autoriserte søkeinnganger for verk og uttrykk i 700-innførsler for dokumenter som har hovedansvarshaver.

Under følger eksempler på hvordan vi vil registrere dette fremover.
Se [Bibsys-konsortiets anbefalinger](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/) for flere eksempler.

## Eksempel 1: Ikke-oversatt manifestasjon, med hovedansvarshaver

Når et dokument har hovedansvarshaver (100-innførsel), registreres foretrukket tittel for verket i 240. Posten får også en autorisert søkeinngang for verket i 700:

<marc>
100 1# $a Hall, Kristian $d 1977- $0 (NO-TrBIB)9057090 $4 aut 
240 10 $a Tobias og den magiske nøkkelen
245 10 $a Tobias og den magiske nøkkelen $c Kristian Hall, Antonija Marinić
700 1# $a Hall, Kristian $d 1977- $0 (NO-TrBIB)9057090 $t Tobias og den magiske nøkkelen
</marc>

Tidligere ville denne posten ikke fått 240-innførsel, fordi det ikke er en oversettelse.

Merk at ID-en i `700 $0` viser til personen, ikke til verket.

## Eksempel 2: Oversatt manifestasjon, med hovedansvarshaver

For oversettelser registreres originaltittel fortsatt i 240, men innførselen får et nytt delfelt `$l` som beskriver
«språk som skillende element for uttrykket». For en norsk oversettelse av et tysk verk:

<marc>
100 1# $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $4 aut
240 10 $a Das falsche Gewicht $l Norsk 
245 14 $a Den falske vekten $b historien om en justermester $c Joseph Roth ; oversatt av Stein Dahl Mathisen
700 1# $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Norsk 
700 1# $i Oversettelse av: $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Tysk 
</marc>

Det første 700-feltet er en søkeinngang for det norske uttrykket, mens det andre angir en relasjon til den tyske originalen.
Dessverre er det ikke lagt opp til identifikatorer for verk og uttrykk i denne omgang,
vi håper dette kommer på plass i neste omgang.

## Eksempel 3: Ikke-oversatt manifestasjon, uten hovedansvarshaver

Når en post ikke har 100-innførsel (f.eks. redigert verk, ukjent opphavsperson, osv…), registreres foretrukket tittel for verket i 130, ikke i 240:

<marc>
130 10 $a Lek og kreativitet
245 10 $a Lek og kreativitet : $b i psykoterapi med barn og ungdom $c Line Indrevoll Stänicke, Unni Tanum Johns og Anders Flækøy Landmark (red.)
</marc>

Uten hovedansvarshaver får posten ingen 700-innførsel.

Merk at foretrukket tittel (130 eller 240) aldri inkluderer undertittel.

## Eksempel 4: Oversatt manifestasjon, uten hovedansvarshaver

Som i eksempel 2 får denne et nytt delfelt `$l` for «språk som skillende element for uttrykket»:

<marc>
130 0# $a Gute nacht, Peppa! $l Norsk
245 00 $a God natt, Peppa! $c oversatt av V.E. Grønn
</marc>

## Eksempel 5: Flere verk i samme manifestasjon

I dette tilfellet registreres ingen 240-innførsel, men hvert verk får to 700-innførsler av samme type som i eksempel 2:

<marc>
100 1# $a Ernaux, Annie $d 1940- $0 (NO-TrBib)90076575 $4 aut 
245 10 $a Far ; $b En kvinne $c Annie Ernaux ; oversatt fra fransk av [henholdsvis] Sissel Lie [og] Henninge Margrethe Solberg 
700 12 $a Ernaux, Annie $d 1940- $t La place $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t La place $l Fransk 
700 12 $a Ernaux, Annie $d 1940- $t Une Femme $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t Une Femme $l Fransk 
</marc>

## Eksempel 6: Originaltittel med undertittel

Foretrukket tittel inkluderer aldri originaltittel. Hvis undertittel til originaltittel er kjent og meningsbærende kan hele originaltittelen registreres som tittelvariant i 246.

<marc>
100 1# $a Saunders, Claire $0 (NO-TrBIB)1533887389387 $4 aut
240 0# $aThe power book $l Norsk
245 10 $a Boken om makt $b hva er det, hvem har det, og hvorfor? $c skrevet av Claire Saunders, Hazel Songhurst, Georgia Amson-Bradshaw, Minna Salami & Mik Scarlet ; illustrert av Joelle Avelino & David Broadbent ; oversatt av Simran Kaur
246 1# $iOriginaltittel: $a The power book $b what is it, who has it, and why?
700 1# $a Saunders, Claire $0 (NO-TrBIB)1533887389387 $aThe power book $l Norsk 
700 1# $i Oversettelse av: $a Saunders, Claire $0 (NO-TrBIB)1533887389387 $aThe power book $l Engelsk  
</marc>

