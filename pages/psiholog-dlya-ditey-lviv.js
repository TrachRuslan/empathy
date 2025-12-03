import Head from "next/head";
import Layout from "../components/layout";

export default function PsihologDlyaDiteyLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/psiholog-dlya-ditey-lviv`;

  return (
    <Layout>
      <Head>
        <title>Психолог для дітей і підлітків у Львові | Павло Підгородний</title>
        <meta
          name="description"
          content="Психолог для дітей і підлітків у Львові – допомога при страхах, замкнутості, агресії, шкільних труднощах, адаптації після змін у сім'ї."
        />
        <meta
          name="keywords"
          content="психолог для дітей Львів, психолог для підлітків Львів, дитячий психолог Львів, шкільні труднощі, адаптація дитини"
        />
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Психолог для дітей і підлітків у Львові – професійна допомога"
        />
        <meta
          property="og:description"
          content="Допомога дітям і підліткам у складних емоційних ситуаціях, шкільних проблемах, конфліктах у сім'ї."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/mind.svg`} />
      </Head>

      <section className="row">
        <h1 className="section-title">Психолог для дітей і підлітків у Львові</h1>

        <p>
          Дитина або підліток може не завжди прямо сказати, що їй погано. Це проявляється
          у поведінці: замкнутість, агресія, сльозливість, небажання вчитися, конфлікти з
          однолітками. У таких випадках потрібен <strong>дитячий психолог</strong>.
        </p>

        <h2 className="section-title">Коли варто звернутися?</h2>
        <ul>
          <li>дитина перестала ділитися з вами, закривається;</li>
          <li>з’явилися страхи, нічні кошмари, нав’язливі думки;</li>
          <li>булінг у школі або агресія до інших;</li>
          <li>важка адаптація після переїзду, розлучення батьків;</li>
          <li>зниження успішності, відмова ходити до школи;</li>
          <li>замкнутість, надмірна сором’язливість або «вибухи» злості.</li>
        </ul>

        <p>
          На консультаціях я працюю не лише з дитиною, а й з батьками – даю рекомендації,
          як змінити взаємодію в сім’ї, щоб підтримати дитину.
        </p>

        <p>
          Запис на прийом:
          <br />
          <a href="tel:+380632404508">063 240 45 08</a> /{" "}
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>
      </section>
    </Layout>
  );
}
