
const qs = require('qs');
const frisby = require('frisby'); 
const testURL = 'http://localhost:3000/api/s/1/color' 
//import get from 'lodash/get'
//import useLazyState from 'react-storefront/hooks/useLazyState'
//const product = get(state, 'pageData.product') || {}
const Mycolor = "red"

describe('view products of a specific color', function(doneFn) {
    beforeEach(() => {})
    it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('select a specific color', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
      const query = qs.stringify({ color: Mycolor /*, size.id*/ }, { addQueryPrefix: true })
        fetchVariant('/api/p/${product.id}${query}')
          
        
    })
      .done(doneFn)
  });
});