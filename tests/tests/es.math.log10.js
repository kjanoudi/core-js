QUnit.test('Math.log10', function (assert) {
  var log10 = Math.log10;
  assert.isFunction(log10);
  assert.name(log10, 'log10');
  assert.arity(log10, 1);
  assert.looksNative(log10);
  assert.nonEnumerable(Math, 'log10');
  assert.same(log10(''), log10(0));
  assert.same(log10(NaN), NaN);
  assert.same(log10(-1), NaN);
  assert.same(log10(0), -Infinity);
  assert.same(log10(-0), -Infinity);
  assert.same(log10(1), 0);
  assert.same(log10(Infinity), Infinity);
  assert.epsilon(log10(0.1), -1);
  assert.epsilon(log10(0.5), -0.3010299956639812);
  assert.epsilon(log10(1.5), 0.17609125905568124);
  assert.epsilon(log10(5), 0.6989700043360189);
  assert.epsilon(log10(50), 1.6989700043360187);
  assert.epsilon(log10(1000), 3);
});