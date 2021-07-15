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
