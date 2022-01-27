---
id: 5
status: Planlagt iverksatt
sammendrag: I februar 2022 planlegger vi å ta i bruk 662-feltet for å uttrykke hierarkisk struktur i geografiske emner.
steg:
  - status: Annonsert
    dato: 2021-01-24
  - status: Planlagt iverksatt
    dato: medio februar 2022

---

# BD5: Hierarkiske stedsemneord i 662
<BdStatus/>

Nasjonalbiblioteket har besluttet at hierarkiske stedsemneord skal registreres i MARC-felt 662. I samband med at vi begynner å registrere i 662 er vi også nødt til å oppdatere praksis for hvordan vi registrerer stedsemner i 651, da vår praksis med å registere stedsemner med hierarkisk struktur i 651 ikke er korrekt i henhold til MARC 21.

## 662 - Hierarkisk stedsemneord

Vi tar i bruk 662 med følgende delfelt:

* `$a` - Land eller overordnet geografisk entitet (R)
* `$b` - Fylke eller annen førsteordens administrativ inndeling (NR)
* `$c` - Kommune eller annen andreordens administrativ inndeling (R)
* `$d` - By eller tettsted (NR)
* `$f` - Del/område i en by eller tettsted, f.eks. bydel, nabolag, park (R).
* `$g` - Ikke-administrativ geografisk entitet, f.eks. elv, innsjø, øy, fjell (R)
* `$h` - Utenomjordisk område 🪐 (R)
* `$0` - Identifikator for autoritetspost i Bibbi (R)
* `$1` - URI som identifiserer den beskrevne entiteten (fremtidig). (R)
* `$2` - Kilde/vokabularkode. Vi bruker «bibbi». (NR)
* `$8` - Feltlenke. Vi bruker dette for å koble 651 og 662. (R)

## Endringer i 651

Dagens praksis for geografiske emneord er å legge overordnet geografisk enhet i `$a` og geografiske underavdelinger i `$z`:

<marc>
651 #7 $a Larvik $z Helgeroa $0 (NO-OsBA)1162699 $2 bibbi $9 nob
</marc>

Dette er en videreføring av NORMARC-standarder og er dessverre ikke korrekt i henhold til MARC 21. Nasjonalbiblioteket har derfor pålagt oss å endre praksis her. Ny praksis blir å legge den geografiske enheten for emnet i `$a`, med den videre geografiske enheten tilføyd i parentese:

<marc>
651 #7 $a Helgeroa (Larvik) $0 (NO-OsBA)1162699 $2 bibbi $9 nob
</marc>

## Eksempler på ny praksis

<marc>
651 #7 $a Helgeroa (Larvik) $0 (NO-OsBA)1162699 $2 bibbi $9 nob $8 1\u
662 ## $a Norge $b Vestfold og Telemark $c Larvik $d Helgeroa $0 (NO-OsBA)9999999 $2 bibbi $9 nob $8 1\u
</marc>

<marc>
651 #7 $a Møhlenpris (Bergen) $x Historie $0 (NO-OsBA)1149008 $2 bibbi $9 nob $8 1\u
662 ## $a Norge $b Vestland $c Bergen $d Bergen $f Møhlenpris $0 (NO-OsBA)9999999 $2 bibbi $9 nob $8 1\u
</marc>
