const tarotCards = [
 {
   name: 'The Sun',
   description: '今日はお日さまが最高！窓辺でゴロゴロしながら、暖かい光をたっぷり浴びようにゃ。',
   image: 'https://www.dropbox.com/scl/fi/spjq27jdqsrxoabv93pb9/The-Sun.png?rlkey=3027ycbsek0flcvgg7h0zwi0j&st=37frhh5c&raw=1'
 },
 {
   name: 'The Moon',
   description: '夜は私たち猫の時間。静かに月を眺めながら、心の中のひらめきを楽しもう。',
   image: 'https://www.dropbox.com/scl/fi/tg89jdi20y64gqlhreu2q/The-Moon.png?rlkey=qx7ut7myjypnq1dss78j19rsn&st=nbintz3l&raw=1'
 },
 {
   name: 'The Star',
   description: '星空を見てると何だかワクワクしてくるにゃ。新しいことに挑戦しよう！',
   image: 'https://www.dropbox.com/scl/fi/qwokfrcodxziugosmv4gy/The-Star.png?rlkey=my2e9w6n7v5q6qaq5w3avwdmv&st=tnsy8oge&raw=1'
 },
 {
   name: 'The Fool',
   description: '冒険の予感がするにゃ！お気に入りの隙間や知らない場所に飛び込んでみよう！',
   image: 'https://www.dropbox.com/scl/fi/wl5tl0n5pz79ygfq6w5dd/The-Fool.png?rlkey=i9mj4bgnob2ng06u4fdujdbp5&st=pvgs0pgv&raw=1'
 },
 {
   name: 'The Magician',
   description: '今日はなんでもできる気分にゃ！糸玉を操る私の技をみんなに見せちゃおう！',
   image: 'https://www.dropbox.com/scl/fi/du7ah77kqrxv0ypaidkm6/The-Magician.png?rlkey=41jerq3kiknh74oi1rq47t8fh&st=01237o0k&raw=1'
 },
 {
   name: 'The High Priestess',
   description: '静かで賢い私の出番だにゃ。物事をじっくり考えると、新しい発見がありそう。',
   image: 'https://www.dropbox.com/scl/fi/du7ah77kqrxv0ypaidkm6/The-Magician.png?rlkey=41jerq3kiknh74oi1rq47t8fh&st=01237o0k&raw=1'
 },
 {
   name: 'The Empress',
   description: '愛情たっぷりの日にゃ。飼い主に甘えたり、仲間たちとリラックスしよう。',
   image: 'https://www.dropbox.com/scl/fi/rri43bdvxdzexx15brx8r/The-Empress.png?rlkey=nt2z6elkco9rosoupbw64t5q2&st=v9yjxru6&raw=1'
 },
 {
   name: 'The Emperor',
   description: '今日は家の王様気分。ど真ん中のソファで堂々とくつろいでみせるにゃ！',
   image: 'https://www.dropbox.com/scl/fi/5vq1g85ipvl33ewn3sr6h/The-Emperor.png?rlkey=dguh6uxkqp9q2lxwgwrssnb39&st=lkgh2nql&raw=1'
 },
 {
   name: 'The Chariot',
   description: '何かを追いかけたくなるにゃ！元気いっぱいで、どこまでも走れる気がする！',
   image: 'https://www.dropbox.com/scl/fi/ftlk7fkoqf5vaatz43twk/The-Chariot.png?rlkey=kyx82mt514t80he5eohxvzxcs&st=876ramio&raw=1'
 },
 {
   name: 'The Lovers',
   description: '愛と絆が私たちを包んでいるにゃ。大好きな人と一緒にいる時間が幸せだね！',
   image: 'https://www.dropbox.com/scl/fi/m7f2g9rrhm56a3bg2a9fj/The-Lovers.png?rlkey=8zh24g0m44lecdkz1b2kubuc3&st=jssy2zof&raw=1'
 },
 {
   name: 'Strength',
   description: '優しさが一番の強さにゃ。飼い主が変な帽子をかぶせても我慢してあげよう。',
   image: 'https://www.dropbox.com/scl/fi/vj3qk0tcud5spysq6y65q/Strength.png?rlkey=pc28vahyi1nogp9nkxoa6ird3&st=t2b0o4ot&raw=1'
 },
 {
   name: 'The Hermit',
   description: '今日は隠れたい気分にゃ。お気に入りの隠れ場所で、静かにリラックスしよう。',
   image: 'https://www.dropbox.com/scl/fi/ksq1h73hdae9widuf0zf9/The-Hermit.png?rlkey=wa41y31uo85c8th8q0tm3cg5e&st=vz4xnvr1&raw=1'
 },
 {
   name: 'Wheel of Fortune',
   description: '運命が回り始めるにゃ。好きなごはんがもらえる予感がする！',
   image: 'https://www.dropbox.com/scl/fi/hvu62t5am5cd3nmvakwd6/Wheel-of-Fortune.png?rlkey=x2nw1nni7pwxvcq7yxb2xb8av&st=w9ecwrfq&raw=1'
 },
 {
   name: 'Justice',
   description: 'バランスを大切にする日だにゃ。ご飯と遊びの時間をちゃんと守ろう！',
   image: 'https://www.dropbox.com/scl/fi/nnef7u5trkquwbi8e5c4j/Justice.png?rlkey=evpivebj2wbz3agjtwc1ubbat&st=l5flyyyt&raw=1'
 },
 {
   name: 'The Hanged Man',
   description: 'いつもと違う目線が大事にゃ。逆さまで見る世界は、ちょっと新鮮だね！',
   image: 'https://www.dropbox.com/scl/fi/pzj6eiu2jk4hl7lqwgxte/The-Hanged-Man.png?rlkey=6statpptp1ktx327vlv300up4&st=xoyzyk4a&raw=1'
 },
 {
   name: 'Death',
   description: '古いものを手放すと、新しいものが手に入るにゃ。おもちゃを入れ替えるのもいいかも！',
   image: 'https://www.dropbox.com/scl/fi/pfqlkoj6lorpcpv5wh9nf/Death.png?rlkey=2h6mxezclgxlok899xovm1o83&st=yqziqsh0&raw=1'
 },
 {
   name: 'Temperance',
   description: '今日はのんびりにゃ。急がずゆっくり過ごすことで、心も体もバランスが整うにゃ。',
   image: 'https://www.dropbox.com/scl/fi/c6id05225p0fe56crodj3/Temperance.png?rlkey=tos76vrjj7we9gqwakm3ldzqp&st=375wvzgq&raw=1'
 },
 {
   name: 'The Devil',
   description: 'キラキラしたおもちゃに夢中になるのは楽しいにゃ！でも遊びすぎないように注意だよ。',
   image: 'https://www.dropbox.com/scl/fi/y5gjzcsvwsemj1br2haqo/The-Devil.png?rlkey=77ngz5re04gq7ulec72r6nh2v&st=f46l1op1&raw=1'
 },
 {
   name: 'The Tower',
   description: '突然のトラブルも大丈夫にゃ！クッションの塔が崩れても、新しい遊び場ができるにゃ。',
   image: 'https://www.dropbox.com/scl/fi/5p8km5gg6ajryqur7i0a0/The-Tower.png?rlkey=qcnobs6iz1oozjkfnezut8ws4&st=w9dyu68g&raw=1'
 },
 {
   name: 'Judgement',
   description: '新しい日が始まるにゃ。今日は昨日よりもっと楽しいことが待っている気がする！',
   image: 'https://www.dropbox.com/scl/fi/dxftosuagz16lkzskucyr/Judgement.png?rlkey=wn8sc09bqbl0h8rfeycmewlf8&st=efsx9cnz&raw=1'
 },
 {
   name: 'The World',
   description: 'すべてが整った気分にゃ。お気に入りの場所で、完璧なひとときを楽しもう！',
   image: 'https://www.dropbox.com/scl/fi/p6dlsaqvls4eyf2prckz2/The-World.png?rlkey=52lg1coxo1cq5fa12mkata0ja&st=pjhkwwv4&raw=1'
 },
 {
   name: 'The Hierophant',
   description: '伝統やルールも大事だにゃ。今日は飼い主のいつものスケジュールに付き合ってあげよう。',
   image: 'https://www.dropbox.com/scl/fi/0bqwu6hd0uu3xjz39m8um/The-High-Priestess.png?rlkey=qq7vw5mxjx67f2w163iefiyxa&st=a0ltz0j6&raw=1'
 }
];

document.getElementById('petForm').addEventListener('submit', function (event) {
 event.preventDefault();
 const petName = document.getElementById('petName').value;
 const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];

 document.getElementById('cardName').textContent = `${petName}のカード: ${randomCard.name}`;
 document.getElementById('cardImage').src = randomCard.image;
 document.getElementById('cardDescription').textContent = randomCard.description;

 document.getElementById('result').style.display = 'block';
});

document.getElementById('retryButton').addEventListener('click', function () {
 document.getElementById('result').style.display = 'none';
 document.getElementById('petName').value = '';
});