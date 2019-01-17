describe('Factory: Cylons', () => {
  beforeEach(module('todoozyApp'));

  let Cylons;

  beforeEach(inject((_Cylons_) => {
    Cylons = _Cylons_;
  }));

  it('runs the start and finish callback', () => {
    let startCounter = 0;
    let finishCounter = 0;
    const start = () => {
      startCounter = 123;
    };
    const finish = () => {
      finishCounter = 5;
    };
    Cylons.register('ok', start, finish);
    Cylons.start('ok');
    expect(startCounter).to.eq(123);
    Cylons.finish('ok');
    expect(finishCounter).to.eq(5);
  });

  it('runs multiple callbacks', () => {
    let startCounter = 0;
    const start = () => startCounter++;
    let finishCounter = 0;
    const finish = () => finishCounter++;
    Cylons.register('asdf', start, finish);
    Cylons.register('asdf', start, finish);
    Cylons.start('asdf');
    expect(startCounter).to.eq(2);
    Cylons.finish('asdf');
    expect(finishCounter).to.eq(2);
  });

  it('handles multiple names', () => {
    let foo = 0;
    const fooStart = () => foo++;
    let bar = 0;
    const barStart = () => bar++;
    const noop = () => undefined;

    Cylons.register('foo', fooStart, noop);
    Cylons.register('bar', barStart, noop);
    Cylons.register('bar', barStart, noop);

    Cylons.start('foo');
    Cylons.start('bar');
    Cylons.finish('bar');
    Cylons.finish('foo');

    expect(foo).to.eq(1);
    expect(bar).to.eq(2);
  });

  it('does not finish twice', () => {
    const noop = () => undefined;
    let foo = 0;
    const cb = () => {
      return foo++;
    };

    Cylons.register('twice', noop, cb);

    Cylons.finish('twice');
    Cylons.finish('twice');

    expect(foo).to.eq(1);
  });

  it('does not delete the cylon from registry if clear set to false', () => {
    const noop = () => undefined;
    let foo = 0;
    const cb = () => {
      return foo++;
    };

    Cylons.register('twice', noop, cb);

    Cylons.finish('twice', false);
    Cylons.finish('twice');

    expect(foo).to.eq(2);
  });

  it('starts immediately if active', () => {
    const noop = () => undefined;
    let foo = 0;
    const cb = () => {
      return foo++;
    };

    Cylons.start('q');
    Cylons.register('q', cb, noop);

    expect(foo).to.eq(1);
  });
});
