<script>
  export let moreInfoTitle;
  export let titleColor;
  export let moreInfoSpecs;
</script>

<h2 style:color={titleColor}>{moreInfoTitle}</h2>
<ul>
  {#each moreInfoSpecs as item}
    <li>{item}</li>
  {/each}
</ul>
