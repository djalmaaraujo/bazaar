import Link from 'next/link'

export default (props) => (
  <div className='container'>
    <section className='products'>
      <h2 className='section__title'>diliça de produtos</h2>
      <section className='row'>
        { props.products.map((p) => {
          return <div key={p.id} className='col-sm-6 col-md-4 col-lg-3 product'>
            <a href='#'>
              <img src={p.image} />
              <span className='product__description'>
                <span className='product__descriptionTitle'>{p.name}</span>
                <span className='product__descriptionPrice'>{p.price}<small> - {p.size}</small></span>
              </span>
            </a>
          </div>
        })}
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
