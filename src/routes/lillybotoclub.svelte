<script>
  import '../styles/global.css';
  import { fly } from 'svelte/transition';

  import Footer from '../components/footer.svelte';
  import Header from '../components/Header.svelte';
  import MainDescription from '../components/MainDescription.svelte';
  import Pricing from '../components/Pricing.svelte';
  import MoreInfo from '../components/MoreInfo.svelte';
  import Legal from '../components/Legal.svelte';
  import Prefooter from '../components/Prefooter.svelte';

  // setup
  const data = {
    slug: 'lillybotoclub',
    club: 'Lilly Boto Club',
    bgColor: 'var(--color-gold-1)',
    titleColor: 'var(--color-gold-3)',
    description:
      'No Lilly Boto Club, o cliente se associa, paga mensalidades fixas e aplica toxina botulínica, de primeiríssima qualidade uma ou duas vezes por ano, em uma, duas ou três regiões. São 6 planos de excelente custo benefício e que possibilitam o tratamento de rugas dinâmicas linhas de expressão.',
    moreInfoTitle: 'Áreas de tratamento',
    moreInfoSpecs: [
      'Testa • Pés de galinha',
      'Nariz de coelho • Ponta do Nariz',
      'Linhas periorais • Rugas frontais',
      'Sobrancelhas • Sorriso gengival',
      'Efeito Nefertiti • Corporais',
      'Rejuvenescimento facial'
    ],
    pricingTitle: 'Conheça os planos',
    pricing: [
      {
        name: 'Lilly Boto Club • 1 sessão/1 região',
        taxes: 'Grátis',
        membership: 'R$ 39,90'
      },
      {
        name: 'Lilly Boto Club • 1 sessão/2 regiões',
        taxes: 'Grátis',
        membership: 'R$ 69,90'
      },
      {
        name: 'Lilly Boto Club • 1 sessão/3 regiões',
        taxes: 'Grátis',
        membership: 'R$ 89,90'
      },
      {
        name: 'Lilly Boto Club • 2 sessão/1 região',
        taxes: 'Grátis',
        membership: 'R$ 54,90'
      },
      {
        name: 'Lilly Boto Club • 2 sessão/2 regiões',
        taxes: 'Grátis',
        membership: 'R$ 109,90'
      },
      {
        name: 'Lilly Boto Club • 2 sessão/3 regiões',
        taxes: 'Grátis',
        membership: 'R$ 154,90'
      }
    ],
    legalText:
      'Preços válidos para compra em 12x no crédito parcelado ou à vista',
    legalExpirationDate: 'Validade: 31 de Março de 2022'
  };
</script>

<div
  in:fly={{ x: 200, duration: 200, delay: 300 }}
  out:fly={{ x: 200, duration: 200 }}
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
    margin-top: -24px;
    padding: 32px 32px 160px 32px;
    border-radius: 16px 16px 0 0;
    background: var(--color-base);
    box-shadow: var(--shadow-1);
  }
</style>
