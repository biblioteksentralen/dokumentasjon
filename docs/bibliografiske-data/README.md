# Bibliografiske data

Bibliografiske data, også kalt metadata, om alle utgivelser vi katalogiserer, kan hentes på to ulike formater.
[MARC](https://bibliotekutvikling.no/kunnskapsorganisering/marc-utvekslingsformat-for-bibliografiske-data/) er det tradisjonelle formatet for utveksling av bibliografiske data.
Det er også et ganske tungt format å jobbe med, så vi tilbyr i tillegg en forenklet datarepresentasjon på et mer utviklervennlig JSON-format.

## MARC-XML fra SRU eller OAI-PMH

Fullstendige [MarcXchange](https://www.loc.gov/standards/iso25577/)-poster kan enten hentes fra [SRU-tjenesten](./sru) (egnet for søk, returnerer inntil 10&nbsp;000 treff) eller [OAI-PMH-tjenesten](./oai-pmh) (egnet for høsting med inkrementelle oppdateringer).

Begge tjenestene leverer data fra to datastrømmer:

* [Åpne data for Nasjonalbibliotekets metadataleveranse (`mlnb`)](./mlnb/) omfatter forhåndsposter og fullstendige katalogposter for alt materiale utgitt i Norge siden 1. november 2020.

* Bibbi-katalogen (`bibbi`) inkluderer i tillegg historiske poster og fullstendige katalogposter for utenlandsk materiale. Denne krever [abonnement på Bibbi-data](https://www.bibsent.no/metadata/abonnement-paa-bibbi-data).

NBs metadataleveranse er et delsett av Bibbi-katalogen, så det er ingen forskjell i innholdet i postene, kun i mengden poster. På sikt håper vi at vi kan tilby en enda større mengde poster som åpne data.

## JSON-data fra REST-API

REST-API-et vårt tilbyr forenklede data på et Schema.org-basert JSON-skjema. Vi anbefaler generelt dette API-et for integrasjoner som ikke er avhengige av MARC.

* [Les mer](./rest)
