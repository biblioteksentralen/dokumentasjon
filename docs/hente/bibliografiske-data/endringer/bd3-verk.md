# BD3: Registrering av verk/uttrykk i 240/130 + 700

Publisert: 2021-08-13

Vi kommer til å begynne å registrere informasjon om verk og uttrykk etter NB sine spesifikasjoner ("Veiledning til fullkatalogisering ved bruk av NB_Full bokmal, med RDA-referanser" Versjon 26.05.21), som ikke er publisert, men samsvarer med [Bibsys-konsortiets anbefalinger for autoriserte søkeinnganger for verk og uttrykk](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/) (Oppdatert 2021-05-05). Dette fører til to endringer i MARC 21-postene vi sender ut, som vil tre i kraft i september:

1. Vi har tidligere brukt felt 240 kun for å registrere *originaltittel*, men går nå over til å bruke dette for *foretrukket tittel for verk eller uttrykk*. Foretrukket tittel registreres uansett om dokumentet er oversatt fra et annet språk eller ikke. Hvis dokumentet ikke har hovedansvarsgiver, registreres foretrukket tittel i felt 130, ikke i 240.

2. Autoriserte søkeinnganger for verk og uttrykk vil bli registrert i nye 700-innførsler.

Under følger noen eksempler på hvordan vi vil registrere dette fremover.
Se [Bibsys-konsortiets anbefalinger](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/) for flere eksempler.

## Eksempel 1: Ikke-oversatt manifestasjon, med hovedansvarshaver (100-innførsel)

Når en post har 100-innførsel, registreres foretrukket tittel for verket i 240. Posten får også en autorisert søkeinngang for verket i 700:

```
100 1# $a Hall, Kristian $d 1977- $0 (NO-TrBIB)9057090 $4 aut 
240 10 $a Tobias og den magiske nøkkelen
245 10 $a Tobias og den magiske nøkkelen $c Kristian Hall, Antonija Marinić
700 1# $a Hall, Kristian $d 1977- $0 (NO-TrBIB)9057090 $t Tobias og den magiske nøkkelen
```

Tidligere ville denne posten ikke fått 240-innførsel.

Merk at ID-en i `700 $0` viser til personen, ikke til verket.

## Eksempel 2: Ikke-oversatt manifestasjon, uten hovedansvarshaver (f.eks. redigert verk, ukjent opphavsperson, …)

Når en post ikke har 100-innførsel, registreres foretrukket tittel for verket i 130, ikke i 240:

```
+130 10 $a Lek og kreativitet
*245 10 $a Lek og kreativitet : $b i psykoterapi med barn og ungdom $c Line Indrevoll Stänicke, Unni Tanum Johns og Anders Flækøy Landmark (red.)
```

Posten får ingen 700-innførsel.

Merk at foretrukket tittel (130 eller 240) aldri inneholder undertittel.

## Eksempel 3: Oversatt manifestasjon, med hovedansvarshaver (100-innførsel)

For oversettelser registreres originaltittel fortsatt i 240, men innførselen får et nytt delfelt `$l` som beskriver
«språk som skillende element for uttrykket». For en norsk oversettelse av et tysk verk:

```
100 1# $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $4 aut
240 10 $a Das falsche Gewicht $l Norsk 
245 14 $a Den falske vekten $b historien om en justermester $c Joseph Roth ; oversatt av Stein Dahl Mathisen
700 1# $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Norsk 
700 1# $i Oversettelse av: $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Tysk 
```

Det første 700-feltet er en søkeinngang for det norske uttrykket, mens det andre angir en relasjon til den tyske originalen.
Vi anser det som vanskelig å utnytte informasjonen i 700-feltene slik den er uttrykt nå uten identifikatorer for verk og uttrykk,
men håper dette kommer på plass på et senere tidspunkt.

## Eksempel 4: Oversatt manifestasjon, uten hovedansvarshaver (f.eks. redigert verk, ukjent opphavsperson, …):

```
130 0# $a Gute nacht, Peppa! $l Norsk
245 00 $a God natt, Peppa! $c oversatt av V.E. Grønn
```

## Eksempel 5: Flere verk i samme manifestasjon

I dette tilfellet registreres det ingen 240-innførsel, men hvert verk får en 700-innførsel:

```
100 1# $a Ernaux, Annie $d 1940- $0 (NO-TrBib)90076575 $4 aut 
245 10 $a Far ; $b En kvinne $c Annie Ernaux ; oversatt fra fransk av [henholdsvis] Sissel Lie [og] Henninge Margrethe Solberg 
700 12 $a Ernaux, Annie $d 1940- $t La place $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t La place $l Fransk 
700 12 $a Ernaux, Annie $d 1940- $t Une Femme $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t Une Femme $l Fransk 
```
