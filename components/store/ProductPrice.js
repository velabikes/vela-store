import { compose, withProps } from 'recompose'
import Price from 'components/Price'
import InstallmentPrice from 'components/store/InstallmentPrice'
import { velaRed, offBlack } from 'style/colors'

const ProductPrice = ({ baseValue, maxValue, compareAt }) =>
  <div className='ProductPrice'>
    {compareAt && <span className='compare'>
      <Price value={compareAt} />
    </span>}
    <span className='min'>
      <Price value={baseValue} />
    </span>
    {maxValue && <span className='max'>
      {' - '} <Price value={maxValue} />
    </span>}
    <div className='istallment'>
      <small><InstallmentPrice count={12} value={baseValue} /></small>
    </div>
    <style jsx>{`
      .ProductPrice {
        color: ${offBlack};
      }
      .compare {
        text-decoration: line-through;
        margin-right: .5em;
      }
      .min, .max {
        color: ${compareAt ? velaRed : 'inherit'};
        font-weight: 700;
      }
      .installment {
        font-size: .75em;
      }
    `}</style>
  </div>

export default compose(
  withProps(
    ({ product, variant }) => {
      const prices = product.variants.edges.map(({node: {priceV2: {amount}}}) => amount)
      const minPrice = Math.min.apply(null, prices)
      const maxPrice = Math.max.apply(null, prices)
      const selectedPrice = variant && variant.node.priceV2.amount

      return {
        baseValue: selectedPrice || minPrice,
        maxValue: minPrice !== maxPrice && !selectedPrice && maxPrice,
        compareAt: variant && variant.node.compareAtPriceV2 && variant.node.compareAtPriceV2.amount
      }
    }
  )
)(ProductPrice)

