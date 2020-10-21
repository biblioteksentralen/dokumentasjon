# OAI-PMH

Katalogposter for Nasjonalbibliotekets metadataleveranse kan høstes med OAI-PMH 2.0 fra endepunktet
[`https://oai.aja.bs.no/mlnb`](https://oai.aja.bs.no/mlnb).

## Parametre

### `metadataPrefix`

Følgende verdier er støttet: 

* [`marc21`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=marc21) gir fullstendige MARC21-poster i MarcXchange 1.1.
* [`oai_dc`](https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=oai_dc) gir grunnleggende Dublin Core-poster. Eksperimentelt.

Tjenesten leverer ikke NORMARC.

### `set`

Tjenesten har foreløpig ingen sett, men vi legger gjerne til noen hvis det er ønsker om å hente ut bestemte delmengder av dataene.

### `from` / `until`

Det er mulig å hente poster som har blitt opprettet eller oppdatert innenfor et bestemt tidsintervall ved å bruke `from` (startdato) og/eller `until` (sluttdato, inklusiv).
For eksempel kan du hente ut alle poster fra 1. november 2020 slik:

> https://oai.aja.bs.no/mlnb?verb=ListRecords&metadataPrefix=marc21&from=2020-11-01&until=2020-11-01

## Slettede poster

Tjenesten holder oversikt over sletting av poster. Eventuelle slettede poster returneres med `status="deleted"` per [2.5.1 Deleted records](http://www.openarchives.org/OAI/2.0/openarchivesprotocol.htm#deletion) i OAI-PMH-standarden.
