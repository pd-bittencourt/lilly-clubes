<script>
  export let legalText;
  export let legalExpirationDate;
  export let legalExceptions;
</script>

<div id="texto-legal">
  <p>
    {legalText}
    <span class="weight-medium">{legalExpirationDate}</span>
  </p>
  {#if legalExceptions}
    <p class="style-italic">{legalExceptions}</p>
  {/if}
</div>

<style>
  #texto-legal {
    padding-top: var(--space-sm);
    padding-bottom: var(--space-lg);
    font-size: var(--size-xs);
  }
  #texto-legal p {
    margin: 0;
  }
</style>
