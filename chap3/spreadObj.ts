namespace NamespaceA {
  class A {
    aname: string = 'Aaa';
  }
  class B {
    bname: string = 'Bbb';
  }

  const a = new A();
  const b = new B();

  const c = { ...a, ...b };
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.aname = 'a1';
  console.log(c);
  console.log(d);
}

namespace SpreadArray {
  const a = [1, 2, 3];
  const b = [4, 5, 6];

  const c = [...a, ...b];
  const d = a.concat(b);
  console.log('c before', c);
  console.log('d before', d);

  a.push(10);
  console.log('a', a);
  console.log('c after', c);
  console.log('d after', d);
}
