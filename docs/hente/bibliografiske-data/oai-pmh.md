---
permalink: /hente/bibliografiske-data/oai-pmh.html
redirectFrom: 
  - /hente/mlnb/oai-pmh.html
---
# OAI-PMH

OAI-PMH 2.0-tjenesten vår leverer to datastrømmer:

- [`https://oai.aja.bs.no/mlnb`](https://oai.aja.bs.no/mlnb) er et åpent endepunkt for bibliografiske poster frikjøpt gjennom [Nasjonalbibliotekets metadataleveranse](./mlnb).

- [`https://oai.aja.bs.no/bibbi`](https://oai.aja.bs.no/bibbi) er
et tilgangsbegrenset endepunkt som gir tilgang til hele Bibbi-katalogen for [abonnenter på Bibbi-data](https://www.bibsent.no/metadata/abonnement-paa-bibbi-data).

Det er ingen forskjeller i innholdet i postene fra de to endepunktene.
## Parametre

### `metadataPrefix`

Følgende verdier er støttet: 

* [`marc21`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=marc21) gir fullstendige [MARC 21](https://www.loc.gov/marc/bibliographic/)-poster som følger [MarcXchange 1.1](http://www.loc.gov/standards/iso25577/).
* [`marc21nor`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=marc21nor) gir MARC 21 med ekstra lokale felt 019 og 9XX fra BSMARC. Dette er et skjema vi støtter i en overgangsperiode etter ønske fra biblioteksystemleverandørene. Skjemaet planlegges å fjernes fra tjenesten 31. desember 2022.
* [`mods`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=mods) gir [MODS](http://www.loc.gov/standards/mods/)-poster, konvertert fra MARC 21-postene etter Library of Congress sitt [mappingskjema](https://www.loc.gov/standards/mods/mods-mapping.html).
* [`oai_dc`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=oai_dc) gir svært grunnleggende [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)-poster.

Tjenesten leverer ikke NORMARC eller BSMARC.

### `set`

Tjenesten har foreløpig ingen sett, men vi legger gjerne til noen hvis det er ønsker om å hente ut bestemte delmengder av dataene.

### `from` / `until`

Høstingen kan avgrenses til poster som har blitt oppdatert innenfor et bestemt tidsintervall ved hjelp av `from` (startdato) og/eller `until` (sluttdato, inklusiv).
Eksempel: For å hente ut alle poster som ble oppdatert 1. april 2021:

> https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=marc21&from=2020-04-01&until=2020-04-01

Avgrensningen baserer seg på verdien i `005`-feltet i MARC-posten.

## Slettede poster

Tjenesten holder oversikt over sletting av poster. Slettede poster returneres med `status="deleted"` per [2.5.1 Deleted records](http://www.openarchives.org/OAI/2.0/openarchivesprotocol.htm#deletion) i OAI-PMH-standarden.
