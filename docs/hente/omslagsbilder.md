# Omslagsbilder

URL-er til omslagsbilder leveres med MARC21-postene i to størrelser:

* Originalbilde (`$3 Omslagsbilde`)
* Miniatyrbilde (`$3 Miniatyrbilde`) med høyde 450px

Bildene kan være mindre hvis vi har fått tak i større filer.

Eksempel:

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Omslagsbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/original.jpg</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>

    <datafield tag="856" ind1="4" ind2="1">
        <subfield code="a">aja.bs.no</subfield>
        <subfield code="3">Miniatyrbilde</subfield>
        <subfield code="u">https://aja.bs.no/b093e14c-1630-5a57-9530-197fedb51df1/cover/thumbnail.jpg</subfield>
        <subfield code="n">Biblioteksentralen, Oslo</subfield>
        <subfield code="q">image/jpeg</subfield>
    </datafield>
