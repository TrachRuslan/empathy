import Head from "next/head";
import Layout from "../components/layout";

export default function OnlaynPsihologLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/onlayn-psiholog-lviv`;

  return (
    <Layout>
      <Head>
        <title>Онлайн психолог Львів – індивідуальні та сімейні консультації</title>
        <meta
          name="description"
          content="Онлайн психолог Львів – консультації по відеозв'язку для дорослих, підлітків і пар. Зручно, конфіденційно, з будь-якої точки світу."
        />
        <meta
          name="keywords"
          content="онлайн психолог Львів, онлайн консультація психолога, психолог по відеозв'язку, дистанційний психолог"
        />
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Онлайн психолог Львів – індивідуальні та сімейні консультації"
        />
        <meta
          property="og:description"
          content="Дистанційні консультації психолога. Допомога при депресії, тривозі, конфліктах та кризах, не виходячи з дому."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/poster-d.jpg`} />
      </Head>

      <section className="row">
        <h1 className="section-title">Онлайн психолог – консультації з будь-якого місця</h1>

        <p>
          Якщо ви зараз не у Львові, живете в іншій країні або вам складно приїхати на очний
          прийом, вам підійде <strong>онлайн психолог</strong>. Консультації проходять через
          відеозв’язок (Zoom, Viber, Telegram тощо).
        </p>

        <h2 className="section-title">Переваги онлайн-консультацій</h2>
        <ul>
          <li>можна звернутися з будь-якого міста чи країни;</li>
          <li>економія часу на дорогу;</li>
          <li>затишна атмосфера у власному просторі;</li>
          <li>той самий рівень професійної допомоги, що й офлайн.</li>
        </ul>

        <h2 className="section-title">З якими запитами можна звернутися?</h2>
        <ul>
          <li>депресивні стани, відсутність сил;</li>
          <li>тривога, страхи, панічні атаки;</li>
          <li>конфлікти в сім’ї чи стосунках;</li>
          <li>самооцінка, невпевненість, сором’язливість;</li>
          <li>адаптація після переїзду, еміграції, втрат.</li>
        </ul>

        <p>
          Щоб записатися на онлайн-консультацію, достатньо написати або зателефонувати:
          <br />
          <a href="tel:+380632404508">063 240 45 08</a> /{" "}
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>
      </section>
    </Layout>
  );
}
