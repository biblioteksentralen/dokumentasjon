---
permalink: /hente/bibliografiske-data/endringer/bd1-ntsf
redirectFrom: 
  - /hente/bibliografiske-data/endringer/2021-06-04-ntsf
  - /hente/bibliografiske-data/endringer/2021-06-04-ntsf.html
---

# BD1: Overgang til Norsk tesaurus for sjanger og form (NTSF)

Publisert: 2021-06-04  
Oppdatert:  2021-06-18

Vi går over fra å beskrive form/sjanger med begreper fra 
[Bibbi autoriteter](/hente/autoritetsdata) til å bruke begreper fra 
[Norsk tesaurus for sjanger og form](https://bibliotekutvikling.no/kunnskapsorganisering/kunnskapsorganisering/vokabularer-utkast/felles-autoritetsregister-for-personer-og-korporasjoner/) (NTSF).

De fleste begrep fra Bibbi autoriteter har blitt tatt med videre i NTSF, men termene har i mange tilfeller fått ny form.
I Bibbi autoriteter sto termene i entall, mens termene i NTSF er satt i flertall: for eksempel har «Roman» blitt til «Romaner».
Noen termer har også blitt skrevet mer ut, for eksempel har Bibbi-termen «Villmark» blitt til «Villmarksfortellinger» i NTSF. 

I noen tilfeller er NTSF mer spesifikk enn Bibbi. Bibbi-begrepet «Dagbøker» ble for eksempel brukt om både faktiske dagbøker og dagbokromaner, mens i NTSF skilles det mellom [«Dagbøker»](https://id.nb.no/vocabulary/ntsf/54) og [«Dagboksfortellinger»](https://id.nb.no/vocabulary/ntsf/536).

I MARC 21 blir form/sjanger-feltene merket med URI fra NTSF i `$0` og vokabularkoden «ntsf» i `$2`:

```
655 $a Villmarksfortellinger $0 https://id.nb.no/vocabulary/ntsf/326 $2 ntsf
```

Les mer om utviklingen av tesaurusen og overgangen i en [artikkel på bibliotekeneshus.no](https://www.bibliotekeneshus.no/nasjonal-tesaurus-for-sjanger-og-form-na-er-vi-i-gang/).

## Film- og dataspillsjangre

Siden Norsk tesaurus for sjanger og form foreløpig er begrenset til litteratursjangre, 
kommer vi til å fortsette å bruke Bibbi autoriteter for 
[film-](https://id.bs.no/bibbi/group/efbe2d4b-b3de-4194-b069-b764b1333a23).
og [dataspillsjangre](https://id.bs.no/bibbi/group/a3ac9412-c520-4b1e-b393-ab9b0fc690b7) inntil videre.

Tidligere har vi ikke konsekvent skilt mellom begreper for å beskrive litteratur, film og dataspill,
vi har f.eks. brukt det samme begrepet «Grøsser» for både litteratur, film og spill, 
men nå skiller vi mellom NTSF-begrepet [«Grøssere»](https://id.nb.no/vocabulary/ntsf/118) (for skjønnlitteratur) og
Bibbi-begrepene [«Grøssere (film)»](https://id.bs.no/bibbi/1203108) og [«Grøssere (spill)»](https://id.bs.no/bibbi/1203115) for film og spill.

Selv om film- og dataspillsjangrene foreløpig ligger utenfor NTSF, går vi over til flertallsform også for disse, og kommer til å jobbe for å dem innlemmet i NTSF på sikt.

## Oppdatering av eksisterende poster

Vi har oppdatert alle postene i Bibbi-katalogen og vil eksportere disse til
[SRU-](/hente/bibliografiske-data/sru) og [OAI-PMH](/hente/bibliografiske-data/oai-pmh)-tjenestene våre samt Bibbi-basene i Mikromarc så snart som mulig (dato kommer). Da vil de også bli høstet inn i MARC 21-fellesbasen i Bibliofil.
Bare [ta kontakt](/hei.html) hvis du ønsker mer informasjon om dette.

Mappingtabellen vår gir en oversikt over hvilke termer som har blitt endret, og kan være et hjelpemiddel hvis du vil oppdatere egne poster med søk og erstatt. Tabellen består av 8 kolonner:

- *Bibbi-ID*: Identifikatoren for Bibbi-begrepet vi har brukt tidligere. Det er imidlertid kun de siste årene vi har levert denne med postene (i `$4` i NORMARC og `$0` i MARC 21).
- *Bibbi-term*: Termen vi har brukt tidligere.
- *Evt. ekstra kriterium*: For tilfeller der ett Bibbi-begrep er erstattet av to eller flere begreper fra NTSF. F.eks. for Bibbi-begrepet «Dystopier» skal film og dataspill ikke overføres til NTSF-begrepet [«Dystopier»](https://id.nb.no/vocabulary/ntsf/68).
- *Ny term*: Ny term, enten fra NTSF (for litteratur) eller fra Bibbi (for film og dataspill).
- *NTSF-URI*: URI fra NTSF, hvis den nye termen er fra NTSF.
- *Evt. ny Bibbi-ID*: Ny Bibbi-ID for begreper som har blitt delt opp i to eller flere begreper (gjelder kun film og spill) 
- *Antall katalogposter*: Hvor mange bibliografiske poster i Bibbi-katalogeen det nye form/sjanger-begrepet har blitt tatt i bruk på.
- *Kommentar*: Eventuell forklarende kommentar.

Versjon 2 av mappingtabellen ble publisert 2021-06-17 med følgende endringer:

- «Dystopiske filmer» ble endret til «Dystopier (film)»
- «Dystopisk (spill)» ble endret til «Dystopier (spill)»
- Kolonne 6 (*Evt. ny Bibbi-ID*) og 8 (*Kommentar*) ble lagt til.

Det kan hende systemleverandøren din kan være behjelpelig med å oppdatere poster.

[⬇ Last ned mappingtabellen (versjon 2)](/vedlegg/2021-06-17-bibbi-ntsf-mapping-v2.xlsx)
