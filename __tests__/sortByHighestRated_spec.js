const frisby = require('frisby');
const testURL = 'http://localhost:3000/api/s/2?sort=rating'
describe('Checking the status of Sort By Highest Rated', function(doneFn) {
  it('expect status should match for Sort By Highest Rated', function(doneFn) {
    frisby.get(testURL)
      .expect('status',200)
      .done(doneFn)
  });
  it('Check the sort option to be Highest Rated', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
        var data = res.body
        console.log(res)
        var obj = JSON.parse(data)
        
        var sort=obj['pageData']['sort']
        expect(sort).toBe('rating')
      })
      .done(doneFn)
  });
  it('Check isSorted', function(doneFn) {
    frisby.get(testURL)
      .expect(function(res) {
        var data = res.body
        var obj = JSON.parse(data)
        var prod=obj['pageData']['products']
        console.log(prod)
        var ls=[]
        for (var i = 0; i < prod.length; i++) {
          ls.push(prod[i]['rating'])
        }
        prev = JSON.parse(JSON.stringify(ls)) 
        ls.sort()
        ls.reverse()
        isSorted=(ls===prev)
        expect(isSorted).toBe(true)
      })
      .done(doneFn)
  });
});