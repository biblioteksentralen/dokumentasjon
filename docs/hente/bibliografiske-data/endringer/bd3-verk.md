# BD3: Registrering av verk i 240/130+700

Publisert: 2021-08-13

Vi er nå i gang med utviklingsarbeidet med å registrere verk etter NB sine spesifikasjoner, som samsvarer med [Bibsys-konsortiets anbefalinger for autoriserte søkeinnganger for verk og uttrykk](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/). Dette fører til to endringer i MARC 21-postene vi sender ut, som vil tre i kraft XXXX-XX-XX:

1. Vi har tidligere brukt felt 240 for å registrere *originaltittel*, men går nå over til å bruke dette for *foretrukket tittel*. Foretrukket tittel registreres uansett om dokumentet er oversatt fra et annet språk eller ikke. Hvis dokumentet ikke har hovedansvarsgiver, registreres foretrukket tittel i stedet i felt 130. Originaltittel finnes nå i felt XXXX.

2. Autoriserte søkeinnganger for verk og uttrykk vil bli registrert i 700-felt.

Se [Bibsys-konsortiets anbefalinger](https://rdakatalogisering.unit.no/autoriserte-sokeinnganger-for-verk-og-uttrykk/) for flere eksempler.

## Eksempel 1: Ikke-oversatt manifestasjon, med hovedansvarshaver (100-innførsel)

```diff
100 1# $a Hall, Kristian $d 1977-$0(NO-TrBIB)9057090 $4 aut 
+240 10 $aTobias og den magiske nøkkelen
+700 1# $a Hall, Kristian $ d1977- $0 (NO-TrBIB)9057090 $t Tobias og den magiske nøkkelen $l Norsk
```

Tidligere ville denne ikke fått 240-felt, fordi det ikke er en oversettelse.

Merk at selv om 700-feltet er en verksinnførsel, viser ID-en i $0 til personen, ikke verket. 

## Eksempel 2: Ikke-oversatt manifestasjon, uten hovedansvarshaver (f.eks. redigerte verk, ukjent opphavsperson)

```diff
130 10 $a Lek og kreativitet 
```

## Eksempel 3: Oversatt manifestasjon, med hovedansvarshaver (100-innførsel)

```
100 1# $aRoth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $4 aut
240 10 $aDas falsche Gewicht $l Norsk 
700 1# $aRoth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Norsk 
700 1# $iOversettelse av: $a Roth, Joseph $d 1894-1939 $0 (NO-TrBIB)90090033 $t Das falsche Gewicht $l Tysk 
```

## Eksempel 4: Oversatt manifestasjon, uten hovedansvarshaver (f.eks. redigerte verk, ukjent opphavsperson):

```
130 0# $a Gute nacht, Peppa! $l Norsk
```

## Eksempel 5: Flere verk i samme manifestasjon får ikke 240-innførsel, men får 700-innførsel på hvert av de enkelte verkene

```
100 1# $a Ernaux, Annie $d1940- $0 (NO-TrBib)90076575 $4aut 
245 10 $a Far ; $b En kvinne $c Annie Ernaux ; oversatt fra fransk av [henholdsvis] Sissel Lie [og] Henninge Margrethe Solberg 
700 12 $a Ernaux, Annie $d 1940- $t La place $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t La place $l Fransk 
700 12 $a Ernaux, Annie $d 1940- $t Une Femme $l Norsk 
700 1# $i Oversettelse av: $a Ernaux, Annie $d 1940- $t Une Femme $l Fransk 
```

