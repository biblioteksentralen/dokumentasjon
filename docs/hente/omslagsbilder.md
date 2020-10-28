# Omslagsbilder

URL-er til omslagsbilder leveres med MARC21-postene i to størrelser:

* Stort bilde (`$3 Omslagsbilde`) med høyde 600px
* Mellomstort bilde (`$3 Miniatyrbilde`) med høyde 300px

Bildene kan være mindre hvis vi har fått tak i større filer.

Eksempel:

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Omslagsbilde</subfield>
        <subfield code="u">https://aja.bs.no/0540be13-d29b-526f-9f7c-360381274a6c/cover/large.jpg​​​​​​​​​​​​​​</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Miniatyrbilde</subfield>
        <subfield code="u">https://aja.bs.no/0540be13-d29b-526f-9f7c-360381274a6c/cover/medium.jpg​​​​​​​​​​​​​​</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>
