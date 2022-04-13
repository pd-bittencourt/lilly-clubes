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
    slug: 'lillyclub',
    club: 'Lilly Club',
    bgColor: 'var(--color-pink-1)',
    titleColor: 'var(--color-pink-3)',
    description:
      'Clube mais versátil da Lilly. Você se associa, paga mensalidades fixas e faz 1 ou 2 sessões por mês de 30 minutos de qualquer* tratamento e ainda tem descontos exclusivos nos outros tratamentos da Lilly.',
    moreInfoTitle: 'Os melhores tratamentos',
    moreInfoSpecs: [
      'Depilação a laser definitiva',
      'Remoção de tatuagens',
      'Clareamento de melasmas',
      'Hollywood Peel',
      'Rejuvenescimento facial e corporal',
      'Secagem de vasinhos',
      'Cicatrizes de acne',
      'Redução de estrias e gordura localizada'
    ],
    pricingTitle: 'Conheça os planos',
    pricing: [
      {
        name: 'Lilly Club • 1 sessão/mês',
        taxes: 'Grátis',
        membership: 'R$ 139,90',
        session: 'R$ 159,90'
      },
      {
        name: 'Lilly Club • 2 sessões/mês',
        taxes: 'Grátis',
        membership: 'R$ 199,90',
        session: 'R$ 129,90'
      }
    ],
    legalText:
      'Preços válidos para compra em 12x no crédito parcelado ou à vista',
    legalExpirationDate: 'Validade: 31 de Março de 2022',
    legalExceptions:
      '*Exceto Ultraformer, Criolipólise, Injetáveis e Musculares'
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
