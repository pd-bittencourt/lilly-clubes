<script>
  import '../styles/global.css';
  import { fly } from 'svelte/transition';

  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import MainDescription from '../components/MainDescription.svelte';
  import Pricing from '../components/Pricing.svelte';
  import MoreInfo from '../components/MoreInfo.svelte';
  import Legal from '../components/Legal.svelte';
  import Prefooter from '../components/Prefooter.svelte';

  // setup
  const data = {
    slug: 'lillylaseclub',
    club: 'Lilly Laser Club',
    bgColor: 'var(--color-blue-1)',
    titleColor: 'var(--color-blue-3)',
    description:
      'Clube para depilação a laser definitiva. Os membros pagam uma mensalidade fixa e faz 30 minutos de depilação a laser, nas áreas onde quiser, a cada 45 dias. E mais: descontos exclusivos nos outros tratamentos da Lilly.',
    moreInfoTitle: 'Vantagens do club',
    moreInfoSpecs: [
      'Liberdade de não ter mais pelos',
      'Pele suave, macia e lisa definitivamente',
      'Fim da foliculite',
      'Clareamento da pele',
      'Todas as áreas do corpo (exceto sobrancelhas)',
      'Feminino e masculino'
    ],
    pricingTitle: 'Conheça os planos',
    pricing: [
      {
        name: 'Lilly Laser Club • 1 sessão a cada 45 dias',
        taxes: 'Grátis',
        membership: 'R$ 129,90'
      },
      {
        name: 'Lilly Laser Club • 2 sessões a cada 45 dias',
        taxes: 'Grátis',
        membership: 'R$ 199,90'
      }
    ],
    legalText:
      'Preços válidos para compra em 12x no crédito parcelado ou à vista',
    legalExpirationDate: 'Validade: 31 de maio de 2022'
  };
</script>

<div
  in:fly={{ x: 200, duration: 200, delay: 300 }}
  out:fly={{ x: 200, duration: 200 }}
  style:background={data.bgColor}
>
  <Header
    title={data.club}
    bgColor={data.bgColor}
    titleColor={data.titleColor}
  />

  <main>
    <MainDescription description={data.description} />
    <MoreInfo
      titleColor={data.titleColor}
      moreInfoSpecs={data.moreInfoSpecs}
      moreInfoTitle={data.moreInfoTitle}
    />
    <Pricing
      titleColor={data.titleColor}
      pricingTitle={data.pricingTitle}
      clubes={data.pricing}
    />
    <Legal
      legalText={data.legalText}
      legalExpirationDate={data.legalExpirationDate}
      legalExceptions={data.legalExceptions}
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
