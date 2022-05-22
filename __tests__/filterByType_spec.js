
const qs = require('qs');
const frisby = require('frisby'); 
const testURL = 'http://localhost:3000/api/s/1/type'
const product = get(state, 'pageData.product') || {}
const type = get(state, 'pageData.type') || {}
const myType='used'

describe('view products of a specific type', function(doneFn) {
    beforeEach(() => {})
    it('expect status should match', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('select a specific type', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
      const query = qs.stringify({ type: myType}, { addQueryPrefix: true })
        fetchVariant('/api/p/${product.id}${query}')
          
        
    })
      .done(doneFn)
  });
});