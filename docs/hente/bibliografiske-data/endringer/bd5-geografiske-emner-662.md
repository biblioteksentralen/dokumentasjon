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

Nasjonalbiblioteket har besluttet å begynne å registrere hierarkiske stedsemneord i marc-felt 662. I samband med det må vi også oppdatere praksis for hvordan vi registrerer stedsemner i 651, da vår praksis med å registere stedsemner med hierarkisk struktur i 651 ikke er korrekt i henhold til marc21.

## 662-delfelt

662 - Subject Added Entry-Hierarchical Place Name 
$a - Land eller overordnet geografisk entitet (R)
$b - Fylke eller annen førsteordens formell inndeling (NR)
$c - Kommune eller annen andreordens formell inndeling (R)
$d - By eller tettsted (NR)
$f - Del/område i en by eller tettsted (R). 
$g - Geografiske områder som ikke representerer noen formell inndeling (R)
$h - Utenomjordisk område 🛸 (R)
$0 - Identifikator for emneord (R)
$1 - Real World Object URI (R)
$2 - Angivelse av kilde for emneord (NR)
$8 - Feltlenke (R)

## Endringer i 651

Dagens praksis for geografiske emneord er å legge overordnet geografisk enhet i $a og Geografiske underavdelinger i $z:

<marc>
651 #7 $a Larvik $z Helgeroa $0 (NO-OsBA)1162699 $2 bibbi $9 nob
</marc>

Dette er en videreføring av Normarc-standarder og er dessverre ikke korrekt i henhold til marc21. Nasjonalbiblioteket har derfor pålagt oss å endre praksis her. Ny praksis blir å legge den geografiske enheten for emnet i $a, med den videre geografiske enheten tilføyd i parentese:

<marc>
651 #7 $a Helgeroa (Larvik) $0 (NO-OsBA)1162699 $2 bibbi $9 nob
</marc>

## Eksempel

<marc>
651 #7 $a Helgeroa (Larvik) $0 (NO-OsBA)1162699 $2 bibbi $9 nob
662 ## $a Norge $b Vestfold og Telemark $c Larvik $d Helgeroa $0 (NO-OsBA)9999999 $2 bibbi $9 nob
</marc>

<marc>
651 #7 $a Møhlenpris (Bergen) $x Historie $0 (NO-OsBA)1149008$2bibbi$9nob
662 ## $a Norge $b Vestland $c Bergen $d Bergen $f Møhlenpris $0 (NO-OsBA)9999999 $2 bibbi $9 nob
</marc>
