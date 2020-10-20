

## SRU

Katalogposter for Nasjonalbibliotekets metadataleveranse kan søkes i gjennom en tjeneste som følger SRU 1.1-standarden,
åpent tilgjengelig på [`https://catmandu.aja.bs.no/mlnb/sru`](https://catmandu.aja.bs.no/mlnb/sru).

::: warning Omfang
SRU-tjenesten for metadataleveransen søker i katalogposter katalogisert fra 1. november 2020.
For å søke i eldre poster trenger du et [Bibbi-abonnement](../bibbi-abb).
Vi håper vi kan tilby en større mengde åpne data i fremtiden.
:::

### Parametre

* `operation`: Alle SRU-operasjonene støttes.
* `query`: Oversikt over indekser finnes under, samt i maskinlesbar form i [Explain-responsen](https://catmandu.aja.bs.no/mlnb/sru?operation=explain).
* `version` (valgfri): Kun versjon 1.1 er støttet.
* `recordSchema` (valgfri): Kun verdien `marc21` er støttet.
* `recordPacking` (valgfri): Kun verdien `xml` er støttet.
* `maximumRecords` (valgfri): Antall poster som leveres om gangen. Standarverdien er 10. Kan økes til maks 500.

Tjenesten støtter vanlig paginering, men ikke [persistente resultatmengder](https://www.loc.gov/standards/sru/sru-1-2.html#resultsets).


::: tip Eksempler
* Fritekstsøk i alle indekser: https://catmandu.aja.bs.no/mlnb/sru?operation=searchRetrieve&query=øyehaug
* Søk etter isbn: https://catmandu.aja.bs.no/mlnb/sru?operation=searchRetrieve&query=isbn=9788245601985
:::

::: details Avvik fra SRU Base Profile og NorZIG-profilen

Tjenesten har følgende kjente avvik fra [SRU Base Profile](http://www.loc.gov/standards/sru/companionSpecs/baseProfile.html):

#| SRU Base Profile | Vår SRU-tjeneste
----|---|----
1. | Explain Support: IndexInfo must be present and contain at least one set and one index element. Each such included index element must include at least one set and name map. | Vår `explain`-respons bruker ikke  `set`. En indeks ser dermed slik ut: `<map><name>dc.title</name></map>`, ikke slik: `<map><name set="dc">title</name></map>`. Dette har ikke konsekvenser for selve søket, kun for dokumentasjonen, men er noe vi vurderer å fikse.

Tjenesten har følgende kjente avvik fra [NorZIG Profile for SRU](http://norzig.no/sru/profile/1.2/):

#| NorZIG Profile for SRU | Vår SRU-tjeneste
----|---|----
1. | If an index used in a CQL query is not supported in the native database, the server must fail the search and return diagnostic number 16 | I denne situasjonen returnerer tjenesten vår bare en tom treffmengde.
2. | Must choose `cql.anyIndexes` as the default index when responding to term-only CQL queries. | Vår tjeneste bruker `cql.serverChoice`, som i [CQL Context Set version 1.2](http://www.loc.gov/standards/sru/cql/contextSets/cql-context-set-v1-2.html#indexes) er et alias for `cql.anyIndexes`.
3. | Must support the full [NorZIG context set](http://norzig.no/cql/norzig/1.1/). | Søk med modifikator (`bib.role`) er ikke støttet. Det er noe vi vurderer å legge til hvis det kan utnyttes i biblioteksystemene. 
4 | Indexes and modifiers from other context sets that must be supported. | Søk med modifikatorer (`bib.classAuthority`, `bib.role`, `bib.identifierAuthority` eller `bib.subjectAuthority`) er ikke støttet. Det er noe vi vurderer å legge til hvis det kan utnyttes i biblioteksystemene.
  | | Indeksen `bib.materialType` er foreløpig ikke støttet fordi det ikke er avklart hvordan denne skal brukes med MARC21-poster.
  | | Indeksen `bib.audience` er foreløpig ikke støttet fordi det ikke er avklart hvordan denne skal brukes med MARC21-poster.
:::


### Søkeindekser

CQL-indeksnavn | Feltbeskrivelse | Eksempler
----|----|----
(ingen) / cql.serverChoice | Alle felt | [øyehaug](https://catmandu.aja.bs.no/mlnb/sru?operation=searchRetrieve&query=øyehaug)<br>[cql.serverChoice=øyehaug](https://catmandu.aja.bs.no/mlnb/sru?operation=searchRetrieve&query=cql.serverChoice=øyehaug)
rec.identifier | Bibbi-ID for posten. | [rec.identifier=123](https://catmandu.aja.bs.no/mlnb/sru?operation=searchRetrieve&recordSchema=marc21&query=rec.identifier=123)
dc.identifier | Enten ISBN eller Bibbi-ID. | -
dc.language | Språkkode, fra 041$h | -
dc.date | Utgivelsesår (fra 008[7-10]) | -
dc.title | Tittel | -
bib.titleSeries | Serietittel, fra 490 (holder det?) | -
bib.classification | Dewey-nummer fra Norsk WebDewey | -
bib.genre | Verdi fra 008/33: 0 for sakprosa, 1 for skjønnlitteratur | -
bib.nameCorporate | Korporasjonsnavn fra 110 eller 710 | -
dc.subject | Emneord, inkludert omtalte personer (600) or korporasjoner (610). Mulig å søke både etter term og identifikator (fra Felles autoritetsregister for personer, fra Bibbi for emneord). | -
dc.creator / norzig.creatorNormalized | Forfatter og andre ansvarshavere fra 100, 110, 700 og 710-feltene. | -
norzig.personalNameNormalized | Personnavn fra 100 eller 700 | -
norzig.nationality | Verdi fra Biblioteksentralens liste over nasjonaliteter [LENKE]. | -

Flere eksempler:

* /fuzzy
* sortKeys
