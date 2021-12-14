---
id: 5
status: Planlagt iverksatt
sammendrag: I januar 2022 planlegger vi å ta i bruk 662-feltet for å .
steg:
  - status: Annonsert
    dato: 2021-12-14
  - status: Planlagt iverksatt
    dato: medio januar 2022

---

# BD5: Hierarkiske stedsemneord i 662
<BdStatus/>

Nasjonalbibliotekt har besluttet å begynne å registrere hierarkiske stedsemneord i marc-felt 662. I samband med det må vi også oppdatere praksis for hvordan vi registrerer stedsemner i 651, da praksis med å registere stedsemner med hierarkisk struktur i 651 ikke er korrekt i henhold til marc21.

## 662-delfelt

662 - Subject Added Entry-Hierarchical Place Name 
$a - Land eller overordnet geografisk entitet (R)
$b - Fylke eller annen førsteordens formell inndeling (NR)
$c - Kommune eller annen andreordens formell inndeling (R)
$d - By eller tettsted (NR)
$f - Del/område i en by eller tettsted (R). 
$g - Geografiske områder som ikke representerer noen formell inndeling (R)
$h - Utenomjordisk område (R)
$0 - Identifikator for emneord (R)
$1 - Real World Object URI (R)
$2 - Angivelse av kilde for emneord (NR)
$8 - Feltlenke (R)

## Endringer i 651

Dagens praksis for geografiske emneord, med overordnet enhet i 

<marc>
651 #7 $a Storbritannia 
</marc>

## Eksempel

<marc>
651 #7 $a Skogbygda (Nes) $2 norbok 
662 ## $a Norge $b Viken $c Nes $d Skogbygda $2 norbok 
</marc>
