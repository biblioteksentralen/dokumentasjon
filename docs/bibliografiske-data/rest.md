---
title: REST-API for metadata
---

# REST-API for metadata

Metadata for alle utgivelser katalogisert av Biblioteksentralen er tilgjengelig fra et åpent REST-API,
som tilbyr JSON-data etter et skjema basert på [Schema.org](https://schema.org/).
Ikke alle metadatafelt som eksporteres til MARC vil tilgjengeliggjøres i REST-API-et, men vi vurderer fortløpende å legge til felt etter behov.
Målet med API-et er at det skal levere data på en form som er enkel å konsumere.

API-et kan brukes fritt uten autentisering, men hvis du bruker det i en produksjonstjeneste ber vi om at du identifiserer klienten med en beskrivende [`User-Agent`-streng](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) med kontaktinformasjon, f.eks. `User-Agent: Lillesand bibliotek (biblioteket@lillesand.kommune.no)` eller `User-Agent: Mitt produkt (kontakt@mittprodukt.no)`.

<!-- Begin Mailchimp Signup Form 
### Abonner på informasjon om API-endringer

<form action="https://bibsent.us18.list-manage.com/subscribe/post?u=34571a5e1ef8aaa1d21da6de8&amp;id=1ed69e1829" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
  <label for="mce-EMAIL">E-post</label>
	<t-input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<!--  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_34571a5e1ef8aaa1d21da6de8_1ed69e1829" tabindex="-1" value=""></div>
  <submit-button name="subscribe" id="mc-embedded-subscribe">Abboner</submit-button>
</form>
<!--End mc_embed_signup-->

:::tip API-dokumentasjon
API-dokumentasjon finnes på <https://bibliografisk.bs.no/>.
:::
