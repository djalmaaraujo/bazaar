import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'
import FontAwesome from 'react-fontawesome'

export default ({ children, title = 'BazaaR' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Roboto:300,400,500,700' rel='stylesheet' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' />
      <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
      <link rel='shortcut icon' href='/static/favicon.ico' />

      <style>{`
        html {
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }

        html, body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Amatic SC', cursive;
        }

        .section__title {
          font-size: 2em;
          margin-bottom: 30px;
          display: block;
          clear: both;
          content: "";
          font-weight: 700;
          color: #efb8b9;
        }
      `}</style>
    </Head>
    <header>
      <section className='container-fluid header'>
        <h1 className='header__title'>
          BazaaR
          <div className='header__whatsapp'><FontAwesome name='whatsapp' /> 81555555555</div>
        </h1>
        <nav className='header__navigation'>
          <Link href='/products/moças'><a>moças</a></Link>
          <Link href='/products/eletro'><a>info&eletro</a></Link>
          <Link href='/products/Música'><a>Música</a></Link>
          <Link href='/products/tal'><a>etc&tal</a></Link>
          <Link href='/products/Banho'><a>Cama, Mesa e Banho</a></Link>
          <Link href='/products/rapazes'><a>rapazes</a></Link>
          <Link href='/products/doações*'><a>free/doações*</a></Link>
        </nav>
      </section>
    </header>

    { children }

    <Footer />

    <style jsx>{`
      .header {
        text-align: center;
        position: relative;
      }

      .header__title {
        font-size: 4em;
        margin: 20px 0;
        padding: 0;
        color: #f77274;
      }

      .header__navigation {
        width: 100%;
        display: block;
        border-top: 1px solid #f3f1ee;
        padding: 20px 0;
      }

      .header__navigation a {
        font-size: 20px;
        color: #636363;
        font-weight: 400;
        letter-spacing: 0.015em;
        padding: 0 14px;
        transition: all 0.3s ease 0s;
        display: inline-block;
        text-decoration: none;
      }
      .header__navigation a:hover {
        color: #f77274;
      }

      .header__whatsapp {
        display: inline-block;
        margin-left: 40px;
        text-align: right;
        font-size: 0.5em;
        position: relative;
        top: -14px;
        color: #128C7E;
        font-family: 'Amatic SC', cursive;
      }
      .header__whatsapp .fa {
        color: #25D366;
      }
    `}</style>
  </div>
)
