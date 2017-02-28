import Link from 'next/link'

export default ({ title = 'BazaaR - Brands' }) => (
  <div>
    <div className='container-fluid'>
      <div className='brands'>
        <h2 className='section__title'>marquinhas tops</h2>
        <div className='row'>
          <div className='col-sm-2 brand'>
            <img src='//logo.clearbit.com/spotify.com?size=150&greyscale=true' />
          </div>

          <div className='col-sm-2 brand'>
            <img src='//logo.clearbit.com/nike.com?size=150&greyscale=true' />
          </div>

          <div className='col-sm-2 brand'>
            <img src='//logo.clearbit.com/zara.com?size=150&greyscale=true' />
          </div>

          <div className='col-sm-2 brand'>
            <img src='//logo.clearbit.com/arezzo.com.br?size=150&greyscale=true' />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .brands {
        text-align: center;
        padding: 50px 0;
        background-color: #f9f9f9;
      }

      .brand {
        display: inline-block;
        padding: 20px;
      }
      .brand img {
        width: 100%;
      }
    `}</style>
  </div>
)
