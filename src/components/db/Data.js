const Data = [
  {
    id: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
    title: "title1",
    content: [
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 1-1",
        text:'SomeText 1-1'
      },
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 1-2",
        text:'SomeText 1-2'
      },
    ],
  },
  {
    id: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
    title: "title2",
    content: [
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 2-1",
        text:'SomeText 2-1'
      },
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 2-2",
        text:'SomeText 2-2'
      },
    ],
  },
  {
    id: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
    title: "title3",
    text:'SomeText 1-1',
    content: [
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 3-1",
        text:'SomeText 3-1'
      },
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 3-2",
        text:'SomeText 3-2'
      },
    ],
  },
  {
    id: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
    title: "title4",
    content: [
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 4-1",
        text:'SomeText 4-1'
      },
      {
        idContent: `f${(+new Date() + Math.random(1, 10000)).toString(16)}`,
        name: "SomeName 4-2",
        text:'SomeText 4-2'
      },
    ],
  },
];
export default Data;
