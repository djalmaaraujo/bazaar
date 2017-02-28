import Link from 'next/link'

export default () => (
  <footer className='footer'>
    Este Bazaar não efetua vendas online e serve como catálogo para vendas físicas e/ou doações. <br /> Maiores informações, entre em contato comigo no telefone/whatsapp: <strong><a href='whatsapp://send?abid=+81555555555&text=Contato%2C%20sobre%2C%20o%2C%20Bazar'>81555555555</a></strong>.

    <style jsx>{`
      footer {
        padding: 50px 0;
        text-align: center;
        font-size: 0.8em;
        opacity: 0.5;
      }
    `}</style>
  </footer>
)
