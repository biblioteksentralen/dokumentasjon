---
permalink: /hente/bibliografiske-data/sru.html
redirectFrom: 
  - /hente/mlnb/sru.html
---
# SRU

SRU 1.1-tjenesten vår leverer to datastrømmer:

- [`https://sru.aja.bs.no/mlnb`](https://sru.aja.bs.no/mlnb) er et åpent endepunkt for bibliografiske poster frikjøpt gjennom [Nasjonalbibliotekets metadataleveranse](./mlnb),
det vil si poster for materiale utgitt i Norge siden 1. november 2020.

- [`https://sru.aja.bs.no/bibbi`](https://sru.aja.bs.no/bibbi) er
et tilgangsbegrenset endepunkt som gir tilgang til hele Bibbi-katalogen for [abonnenter på Bibbi-data](https://www.bibsent.no/metadata/abonnement-paa-bibbi-data).

Det er ingen forskjeller i innholdet i postene en får fra de to endepunktene.

## Parametre

- `operation`: Alle SRU-operasjonene støttes.
- `query`: [CQL](https://www.loc.gov/standards/sru/cql/spec.html)-spørring. Oversikt over indekser og relasjoner finnes under.
- `sortKeys` (valgfri): Indeks som resultatene sorteres etter.
- `version` (valgfri): Kun versjon 1.1 er støttet.
- `recordSchema` (valgfri): Følgende skjemaer er støttet:
   - `marc21` (standard): [MARC 21](https://www.loc.gov/marc/bibliographic/) som følger [MarcXchange 1.1](http://www.loc.gov/standards/iso25577/) 
   - `marc21nor`: MARC 21 med ekstra lokale felt 019 og 9XX fra BSMARC. Dette er et skjema vi støtter i en overgangsperiode etter ønske fra biblioteksystemleverandørene. Skjemaet planlegges å fjernes fra tjenesten 31. desember 2022.
   - `mods`: [MODS](https://www.loc.gov/standards/mods/) konvertert fra MARC 21 etter Library of Congress sitt [mappingskjema](https://www.loc.gov/standards/mods/mods-mapping.html)
   - `dc`: Svært grunnleggende [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/).
- `recordPacking` (valgfri): Kun verdien `xml` er støttet.
- `startRecord` (valgfri): Første post som skal returneres fra treffmengden. Standardverdien er 1.
- `maximumRecords` (valgfri): Antall poster som leveres om gangen. Standarverdien er 10. Kan økes til maks 500.

Tjenesten støtter vanlig paginering (med bruk av `startRecord`), men ikke [persistente resultatmengder](https://www.loc.gov/standards/sru/sru-1-2.html#resultsets).

::: tip Eksempler

- Fritekstsøk i alle indekser: https://sru.aja.bs.no/mlnb?operation=searchRetrieve&query=Žižek
- Søk etter isbn: https://sru.aja.bs.no/mlnb?operation=searchRetrieve&query=dc.identifier=9788203365133

:::

::: details Avvik fra SRU Base Profile og NorZIG-profilen

Tjenesten har følgende kjente avvik fra [SRU Base Profile](http://www.loc.gov/standards/sru/companionSpecs/baseProfile.html):

| #   | SRU Base Profile                                                                                                                                                            | Vår SRU-tjeneste                                                                                                                                                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Explain Support: IndexInfo must be present and contain at least one set and one index element. Each such included index element must include at least one set and name map. | Vår `explain`-respons bruker ikke `set`. En indeks ser dermed slik ut: `<map><name>dc.title</name></map>`, ikke slik: `<map><name set="dc">title</name></map>`. Dette har ikke konsekvenser for selve søket, kun for dokumentasjonen, men er noe vi vurderer å fikse. |

Tjenesten har følgende kjente avvik fra [NorZIG Profile for SRU](http://norzig.no/sru/profile/1.2/):

| #   | NorZIG Profile for SRU                                                                                                                   | Vår SRU-tjeneste                                                                                                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | If an index used in a CQL query is not supported in the native database, the server must fail the search and return diagnostic number 16 | I denne situasjonen returnerer tjenesten vår bare en tom treffmengde.                                                                                                                                            |
| 2.  | Must choose `cql.anyIndexes` as the default index when responding to term-only CQL queries.                                              | Vår tjeneste bruker `cql.serverChoice`, som i [CQL Context Set version 1.2](http://www.loc.gov/standards/sru/cql/contextSets/cql-context-set-v1-2.html#indexes) er et alias for `cql.anyIndexes`.                |
| 3.  | Must support the full [NorZIG context set](http://norzig.no/cql/norzig/1.1/).                                                            | Søk med modifikator (`bib.role`) er ikke støttet. Det er noe vi vurderer å legge til hvis det kan utnyttes i biblioteksystemene.                                                                                 |
| 4.  | Indexes and modifiers from other context sets that must be supported.                                                                    | Søk med modifikatorer (`bib.classAuthority`, `bib.role`, `bib.identifierAuthority` eller `bib.subjectAuthority`) er ikke støttet. Det er noe vi vurderer å legge til hvis det kan utnyttes i biblioteksystemene. |
|     | Indeksen `bib.materialType` er foreløpig ikke støttet fordi det ikke er avklart hvordan denne skal brukes med MARC 21-poster.             |
|     | Indeksen `bib.audience` er foreløpig ikke støttet fordi det ikke er avklart hvordan denne skal brukes med MARC 21-poster.                 |
|     | Indeksen `norzig.possessingInstitution` virker ikke relevant på bibliografisk nivå.                                                      |

:::

## Søkeindekser

[Explain-responsen](https://sru.aja.bs.no/mlnb?operation=explain) er den autoritative dokumentasjonen for søkeindekser.
Tabellen under viser de viktigste søkeindeksene som støttes.

| Indeks                                | Beskrivelse                                                                                                     | Eksempel                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| (ingen) / cql.serverChoice            | Alle felt                                                                                                       | <sru-example base="mlnb" query="&quot;speilet og lyset&quot;" />                   |
| rec.identifier                        | Lokal identifikator (Bibbi-ID)                                                                                  | <sru-example base="mlnb" query="rec.identifier=0588861" />                         |
| rec.created                           | Tidsstempel da posten først ble opprettet                                                                       | <sru-example base="mlnb" query="rec.created = 2021-04-01" />                       |
| rec.modified                          | Tidsstempel da posten sist ble endret(`005`)                                                                    | <sru-example base="mlnb" query="rec.modified >= 2020-11-10" />                     |
| dc.identifier                         | ISBN, EAN eller Bibbi-ID                                                                                        | <sru-example base="mlnb" query="dc.identifier=97882419*" />                        |
| dc.language                           | Språkkode (`041$h`)                                                                                             | <sru-example base="mlnb" query="dc.language=nno" />                                |
| dc.date                               | Utgivelsesår (`008[7-10]`)                                                                                      | <sru-example base="mlnb" query="dc.date=2020" />                                   |
| dc.title                              | Tittel                                                                                                          | <sru-example base="mlnb" query="dc.title=&quot;speilet og lyset&quot;" />          |
| bib.titleSeries                       | Serietittel (`490$a`, `830$a`)                                                                                  | <sru-example base="mlnb" query="bib.titleSeries=&quot;Dyr i Norges natur&quot;" /> |
| bib.classification                    | Dewey-nummer fra Norsk WebDewey (`082$a`)                                                                       | <sru-example base="mlnb" query="bib.classification=59*" />                         |
| bib.genre                             | `0` for sakprosa, `1` for skjønnlitteratur (fra `008/33`)                                                       | <sru-example base="mlnb" query="bib.genre=0" />                                    |
| bib.nameCorporate                     | Korporasjonsnavn (`110` og `710`)                                                                               | -                                                                                  |
| bib.originPlace                       | Utgivelsesland (fra `008/15-17`)                                                                                | <sru-example base="mlnb" query="bib.originPlace=no" />                             |
| dc.subject                            | Emneord, inkludert omtalte personer og korporasjoner (`6XX`). Mulig å søke både etter term og identifikator[1]. | <sru-example base="mlnb" query="dc.subject=&quot;Fedre og sønner&quot;" /><br><sru-example base="mlnb" query="dc.subject=&quot;(NO-OsBA)1113073&quot;" />         |
| dc.creator / norzig.creatorNormalized | Forfattere og andre ansvarshavere (`1XX`, `7XX`).                                                               | <sru-example base="mlnb" query="dc.creator all &quot;Ole Peder Giæver&quot;" /><br><sru-example base="mlnb" query="dc.creator=&quot;(NO-TrBIB)5072405&quot;" />    |
| norzig.personalNameNormalized         | Personnavn (`100` og `700`)                                                                                     | -                                                                                  |
| norzig.nationality                    | Verdi fra Biblioteksentralens liste over nasjonaliteter [LENKE].                                                | <sru-example base="mlnb" query="norzig.nationality=am." />                         |
| bs.approved                           | Tidsstempel da posten først ble godkjent og publisert som fullkatalogisert post.                                | <sru-example base="mlnb" query="bs.approved >= 2021-04-01 AND bs.approved < 2021-05-01" /> |
| bs.electronic                         | `true` for elektroniske ressurser (`007/0="c"`) som e-bøker, e-lydbøker, videospill osv., `false` for fysiske ressurser. | <sru-example base="mlnb" query="bs.electronic=true" />     |
| bs.has_cover                          | `true` for ressurser som har omslagsbilder (865), `false` for ressurser som ikke har det.                            | <sru-example base="mlnb" query="bs.has_cover=false" />                    |
| bs.level                              | Beskrivelsesnivå (fra `LDR/17`): "full" for fullstendige poster (# eller 1), "preliminary" for forhåndsposter (5). | <sru-example base="mlnb" query="bs.level=&quot;preliminary&quot;" />          |
| bs.resource_type                      | Ressurstype/materialtype avledet fra `LDR/6`, `007/0-1` og `008/26`: "book", "audiobook", "video", "videogame", "other". Kan kombineres med `bs.electronic` for å skille mellom elektroniske og fysiske ressurser.             | <sru-example base="mlnb" query="bs.resource_type=&quot;book&quot; AND bs.electronic=false" />          |
| bs.set                                | Samlingskode, har alltid verdien `"mlnb"`.                                                                      | <sru-example base="mlnb" query="bs.set=&quot;mlnb&quot;" />                        |

[1] Personer (X00) og snart korporasjoner (X10) kommer med identifikatorer fra [Felles autoritetsregister](https://bibliotekutvikling.no/kunnskapsorganisering/kunnskapsorganisering/felles-autoritetsregister-for-personer-og-korporasjoner/),
mens generelle emneord (X50) og stedsnavn (X51) kommer med identifikatorer fra [Bibbi autoriteter](/hente/bibbi-autoriteter).

## Relasjonsoperatorer og jokertegn

Tjenesten støtter følgene relasjonsoperatorer:

- `=` gir treff når søketermen finnes i indeksen som en _frase_ (ordene må følge etter hverandre i samme rekkefølge), men er ikke eksluderende.
  Spørringen <sru-example base="mlnb" query="dc.title = &quot;kunst og håndverk&quot;" /> gir treff i tittelen «Bærekraftdidaktikk i kunst og håndverk», mens <sru-example base="mlnb" query="dc.title = &quot;kunst håndverk&quot;" /> ikke gjør det.
- `exact` fungerer omtrent som `=`, men behandler ikke `*` og `?` som jokertegn.
- `all` gir treff når alle ordene finnes i indeksen, uavhengig av rekkefølge.
  <sru-example base="mlnb" query="dc.title all &quot;kunst bærekraftdidaktikk&quot;" /> gir treff i tittelen «Bærekraftdidaktikk i kunst og håndverk».
- `any` gir treff når minst ett av ordene finnes i indeksen, uavhengig av rekkefølge.
  <sru-example base="mlnb" query="dc.title any &quot;*undervisning *didaktikk&quot;" /> gir treff i tittelen «Bærekraftdidaktikk i kunst og håndverk».
- `>`, `>=`, `<` og `<=` og `within` kan brukes med numeriske og temporale indekser, f.eks. for å finne utgivelser fra og med 2020 (<sru-example base="mlnb" query="dc.date >= 2020" />)
  eller dokumenter klassifisert med Dewey-numre i et visst spennn (<sru-example base="mlnb" query="bib.classification within [2020]" />)
- `<>` (negasjonsoperatoren) gir treff når indeksen *ikke* inneholder søketermen.

Relasjonsmodifikatoren `/fuzzy` kan brukes for å gi treff der søketermen er *nesten* lik den indekserte termen.
F.eks. vil <sru-example base="mlnb" query="dc.creator =/fuzzy &quot;Middelton&quot;" /> vil også gi treff i «Middelthon».
Hvor mange tegn som kan avvike ([Levenshtein-avstanden](https://en.wikipedia.org/wiki/Levenshtein_distance)) er 0, 1 eller 2, avhengig av søketermens lengde. Fungerer kun med ett ord.

I søketermen gir `?` treff i ett hvilket som helst tegn
(<sru-example base="mlnb" query="dc.title = &quot;h?ndverk&quot;" /> gir f.eks. treff i både «håndverk» og «handverk»),
mens `*` gir treff i 0 eller flere viøkårlige tegn (eks: <sru-example base="mlnb" query="dc.title = &quot;bærekraft*&quot;" />).
Merk at søketermen ikke kan *begynne* med jokertegn.



## Sortering

`sortKeys` kan brukes med flere av indeksene for å sortere resultatsettet.
Stigende rekkefølge er standard, så for å hente de eldste postene:

<sru-example base="mlnb" query="bs.set=&quot;mlnb&quot;" sortKeys="rec.modified" />

Legg på `,,0` for synkende rekkefølge (nyeste poster først):

<sru-example base="mlnb" query="bs.set=&quot;mlnb&quot;" sortKeys="rec.modified,,0" />

Mer informasjon om sortKeys finnes i [SRU-dokumentasjonen til LC](https://www.loc.gov/standards/sru/sru-1-1.html#sort).
Merk at vi ikke støtter nøklene `schema`, `caseSensitive` eller `missingValue`.
