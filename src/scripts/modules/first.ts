console.log('a');

//esm ES2015 ES2016 ES2017 ES2018 ES2019 ES2020 ES2021
//javascript Node.js Swiper jQuery
//window ブラウザの用意したJavaScript API

let cat = '三毛猫';
console.log(cat);
cat = 'ロシアンブルー';
console.log(cat);

const dog = 'コーギー';
console.log(dog);

const myfunc = () => {
  console.log('myfunc');
}

const box = [
  '🍊',
  '🍊',
  '🍊',
  '🍊',
  '🍊',
  ['🍎','🍎','🍎','🍎','🍎', ['🍌','🍌','🍌','🍌','🍌','🍌']],
  {
    'ringo': ['🍎','🍎','🍎','🍎','🍏'],
    'banana': ['🍌']
  }
] as const;

console.log(box[6]['ringo'][4]);
console.log(box[6].ringo[4]);

// box[0] = 1;
console.log(box[0]);
// box[1] = 'aa';
console.log(box[1]);
// box[2] = dog = 'コーギー';
console.log(box[2]);

const box2 = {
  mikan: '🍊',
  ringo: '🍎',
  banana: '🍌',
  momo: '🍑',
  ichigo: '🍓'
};

console.log(box2.mikan);
// box2.mikan = box2['mikan'];
const みかん = 'mikan';
// box2[みかん] = box2[みかん = 'mikan']
console.log(box2.ringo);
console.log(box2.banana);
console.log(box2.momo);
console.log(box2.ichigo);

const box3 = {
  mikan: [
    {
      name: '🍊温州みかん',
      price: 200
    },
    {
      name: '🍊ネーブル',
      price: 300
    },
    {
      name: '🍊はっさく',
      price: 400
    },
  ],
  ringo: [
    {
      name: '🍎さんフジ',
      price: 250
    },
    {
      name: '🍎紅玉',
      price: 350
    },
    {
      name: '🍎世界一',
      price: 450
    }
  ]
} as const;
//紅玉の値段を表示せよ

console.log(box3.ringo[1].name + 'の値段は' + box3.ringo[1].price + '円');

Object.entries(box3).forEach(([_,values]) => {
  values.forEach((value) => {
    console.log(value.name + 'の値段は' + value.price + '円');
  })
});