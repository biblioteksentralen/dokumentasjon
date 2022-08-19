---
id: 2
status: iverksatt
sammendrag: 4. juni 2021 begynte vi å registrere produksjonsland i MARC-felt 257. Tidligere har vi registrert dette som del av form/sjangerstreng for enkelte filmsjangre.
steg:
  - status: Iverksatt
    dato: 2021-06-04
---
# BD2: Produksjonsland for filmer (257)
<BdStatus/>

Vi har tidligere registrert produksjonsland som del av form/sjangerstreng for enkelte overordnede filmsjangre, 
men går nå over til å registrere dette som en egen egenskap, som blir eksportert til 
[257-feltet](https://www.loc.gov/marc/bibliographic/bd257.html) i MARC 21.

Eksempel: Tidligere beskrev vi f.eks. [en russisk-japansk animasjonsfilm](https://en.wikipedia.org/wiki/First_Squad) med strengen «Animasjonsfilm - Japan - Russland», i MARC 21 uttrykt som:

<marc>
655 $a Animasjonsfilm $z Japan $z Russland $0 (NO-OsBA)1166024 $2 bibbi
</marc>

Med den nye praksisen blir det i stedet uttrykt slik:

<marc>
257 $a Japan $0 (NO-OsBA)1162704 $2 bibbi
257 $a Russland $0 (NO-OsBA)1162814 $2 bibbi
655 $a Animasjonsfilmer $0 (NO-OsBA)1165840 $2 bibbi
</marc>

Alle eksisterende poster i Bibbi-katalogen har blitt oppdatert, og vil snart bli eksportert så det vil være mulig å hente oppdaterte utgaver fra
[SRU](/hente/bibliografiske-data/sru.html) og [OAI-PMH](/hente/bibliografiske-data/oai-pmh.html)-tjenestene våre,
samt fra Bibbi-basen (Mikromarc) og MARC 21-fellesbasen i Bibliofil.

For en oversikt over alle filmsjangre som brukes av Biblioteksentralen i dag, se [Biblioteksentralens vokabulartjeneste](https://id.bs.no/bibbi/group/efbe2d4b-b3de-4194-b069-b764b1333a23).
