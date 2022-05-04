<script>
  export let pricingTitle;
  export let titleColor;
  export let clubes;
</script>

<h2 style:color={titleColor}>{pricingTitle}</h2>
{#each clubes as clube}
  <div>
    <h3>{clube.name}</h3>
    <hr />
    <div class="row taxa">
      <span>Taxa de associação</span>
      <span class="tax-value weight-black color-accent">{clube.taxes}</span>
    </div>
    <hr />
    <div class="row mensalidade">
      <span>Mensalidade</span>
      <span>{clube.membership}</span>
    </div>
    <hr />
    {#if clube.session}
      <div class="row sessao">
        <span>Sessão avulsa (cada)</span>
        <span>{clube.session}</span>
      </div>
      <hr />
    {/if}
  </div>
{/each}

<style>
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .row > span:first-child {
    flex: 1;
  }
  .row.mensalidade > span:nth-child(2) {
    font-weight: var(--weight-bold);
  }
  .tax-value {
    text-transform: uppercase;
  }
</style>
