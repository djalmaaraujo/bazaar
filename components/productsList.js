import Link from 'next/link'

export default () => (
  <div className='container'>
    <section className='products'>
      <h2 className='section__title'>diliça de produtos</h2>
      <section className='row'>
        <div className='col-sm-6 col-md-4 col-lg-3 product'>
          <a href='#'>
            <img src='https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/bbudom2cjy1ljkgzwl72.jpg' />
            <span className='product__description'>
              <span className='product__descriptionTitle'>Vestido Feito à mão</span>
              <span className='product__descriptionPrice'>R$ 40,00<small> - tam p</small></span>
            </span>
          </a>
        </div>

        <div className='col-sm-6 col-md-4 col-lg-3 product'>
          <a href='#'>
            <img src='https://res-2.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/produto_1725700_2622b1b95e247f4d04c0.jpg' />
            <span className='product__description'>
              <span className='product__descriptionTitle'>Vestido Feito à mão</span>
              <span className='product__descriptionPrice'>R$ 40,00<small> - tam p</small></span>
            </span>
          </a>
        </div>

        <div className='col-sm-6 col-md-4 col-lg-3 product'>
          <a href='#'>
            <img src='https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/oosulplwxvypelynsprl.jpg' />
            <span className='product__description'>
              <span className='product__descriptionTitle'>Vestido Feito à mão</span>
              <span className='product__descriptionPrice'>R$ 40,00 <small>- tam p</small></span>
            </span>
          </a>
        </div>

        <div className='col-sm-6 col-md-4 col-lg-3 product'>
          <a href='#'>
            <img src='https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/izjvr3nlj1dcoalsgozy.jpg' />
            <span className='product__description'>
              <span className='product__descriptionTitle'>Vestido Feito à mão</span>
              <span className='product__descriptionPrice'>R$ 40,00<small> - tam p</small></span>
            </span>
          </a>
        </div>

        <div className='col-sm-6 col-md-4 col-lg-3 product'>
          <a href='#'>
            <img src='https://res-3.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_294,q_60,w_276/ba9v13rlqi2loxxtmdeq.jpg' />
            <span className='product__description'>
              <span className='product__descriptionTitle'>Vestido Feito à mão</span>
              <span className='product__descriptionPrice'>R$ 40,00<small> - tam p</small></span>
            </span>
          </a>
        </div>

      </section>
    </section>

    <style jsx>{`
      .products {
        padding: 50px 0;
        text-align: center;
      }

      .product {
        margin-bottom: 30px;
      }
      .product:hover {
        opacity: 0.8;
      }
      .product img {
        width: 100%;
        display: block;
        border-radius: 4px;
      }
      .product a, .product a:hover {
        text-decoration: none;
      }

      .product__description {
        display: block;
      }

      .product__descriptionTitle {
        font-size: 1.1em;
        color: #5b5855;
        display: block;
        margin-top: 20px;
      }

      .product__descriptionPrice {
        color: #f77274;
        font-size: 1em;
        font-weight: 700;
      }
      .product__descriptionPrice small {
        color: #cac5bf;
        font-weight: 300;
      }
    `}</style>
  </div>
)
