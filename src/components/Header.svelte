<script>
  export let title = 'Placeholder';
  export let bgColor = 'var(--color-pink-1)';
  export let titleColor = 'var(--color-pink-3)';
</script>

<header style:background={bgColor}>
  <a class="icon-button" href="/">
    <svg
      width="15"
      height="26"
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.75 1.5L2.25 13L13.75 24.5" stroke="white" stroke-width="3" />
    </svg>
  </a>

  <h1 style:color={titleColor}>{title}</h1>
</header>

<style>
  header {
    /* background: var(--color-pink-1); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 12px;
    padding-right: 32px;
  }

  .icon-button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
