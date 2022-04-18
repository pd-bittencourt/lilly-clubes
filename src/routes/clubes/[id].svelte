<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('../../data.json');
    const clubs = await res.json();
    return {
      props: {
        clubs
      }
    };
  }
</script>

<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  import '../../styles/global.css';
  import Footer from '../../components/Footer.svelte';
  import Header from '../../components/Header.svelte';
  import MainDescription from '../../components/MainDescription.svelte';
  import Pricing from '../../components/Pricing.svelte';
  import MoreInfo from '../../components/MoreInfo.svelte';
  import Legal from '../../components/Legal.svelte';
  import Prefooter from '../../components/Prefooter.svelte';

  export let clubs;
  const pageId = $page.params;
  const Id = parseFloat(Object.values(pageId)[0]);
  const club = clubs[Id];
</script>

<div
  in:fly={{ x: 200, duration: 200, delay: 300 }}
  out:fly={{ x: 200, duration: 200 }}
  style:background={club.bgColor}
>
  <Header
    title={club.club}
    bgColor={club.bgColor}
    titleColor={club.titleColor}
  />

  <main>
    <MainDescription description={club.description} />
    <MoreInfo
      titleColor={club.titleColor}
      moreInfoSpecs={club.moreInfoSpecs}
      moreInfoTitle={club.moreInfoTitle}
    />
    <Pricing
      titleColor={club.titleColor}
      pricingTitle={club.pricingTitle}
      clubes={club.pricing}
    />
    <Legal
      legalText={club.legalText}
      legalExpirationDate={club.legalExpirationDate}
      legalExceptions={club.legalExceptions}
    />
    <Prefooter />
  </main>

  <Footer />
</div>

<style>
  main {
    margin-top: 100px;
    /* margin-top: -24px; */
    padding: 32px 32px 160px 32px;
    border-radius: 16px 16px 0 0;
    background: var(--color-base);
    box-shadow: var(--shadow-1);
  }
</style>
