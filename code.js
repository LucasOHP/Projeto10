var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["589d8ce7-19f3-4961-8f64-ea79c8daee32","6687291b-9740-4b9a-a946-07524e79695a","d661ec8c-1352-45c8-847c-ed4380c81eb0","2e4b9aa1-9953-4f55-a87d-ed9d394cc8f7"],"propsByKey":{"589d8ce7-19f3-4961-8f64-ea79c8daee32":{"name":"moeda","sourceUrl":null,"frameSize":{"x":25,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"1VFxqfYZOFI6MjSc_NpcOcQPw3YUML67","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":15},"rootRelativePath":"assets/589d8ce7-19f3-4961-8f64-ea79c8daee32.png"},"6687291b-9740-4b9a-a946-07524e79695a":{"name":"disco","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"H8T.ffOmZnTcyrBlhOm1JsckudywDGcV","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/6687291b-9740-4b9a-a946-07524e79695a.png"},"d661ec8c-1352-45c8-847c-ed4380c81eb0":{"name":"p1","sourceUrl":null,"frameSize":{"x":74,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"rQClVcjHntpdcOYLnvUNEIT_N9Kasx9P","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":10},"rootRelativePath":"assets/d661ec8c-1352-45c8-847c-ed4380c81eb0.png"},"2e4b9aa1-9953-4f55-a87d-ed9d394cc8f7":{"name":"p2","sourceUrl":null,"frameSize":{"x":74,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"fudqaNQ1rpZieHONnokIFhzh10A2t3xQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":10},"rootRelativePath":"assets/2e4b9aa1-9953-4f55-a87d-ed9d394cc8f7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var p1 = createSprite(200,370,80,10);
p1.shapeColor = 'gray';
p1.setAnimation("p1");

var p2 = createSprite(200,30,80,10);
p2.shapeColor = 'gray';
p2.setAnimation("p2");

var m1 = createSprite(200,330,15,15);
m1.setAnimation("moeda");

var d1 = createSprite(200,90,15,15);
d1.shapeColor = 'white';
d1.setAnimation("disco");

var s1 = 'pressione espaço para começar';

var t1 = 'use < > para se mover';

var t2 = 'use A D para se mover';

var edj = 'm'; 
 
function draw() {
  background('darkgreen');
  
  if(edj == 'm'){
    fill("yellow");
    textSize(30);
    textAlign(CENTER,CENTER);
    text('João e seu amigo viram uma',200,150);
    text('borboleta bonita e querem',200,200);
    text('a pegar, ajude-os a pega-la',200,250);
    fill('maroon');
    text('ENTER para começar',200,300);
    if(keyDown('ENTER')){
      edj = 'i';
    }
  }
  if(edj == 'i'){
  fill("blue");
  textAlign(CENTER,CENTER);
  textSize(20);
  text(s1,200,150);
  text(t1,115,330);
  text(t2,285,70);
  t1 = 'use < > para se mover';
  t2 = 'use A D para se mover';
  s1 = 'pressione espaço para começar';
  
  d1.x = 200;
  d1.y = 90;
  m1.x = 100;
  m1.y = 200;
  p1.x = 200;
  p2.x = 200;
  
  if(keyDown("space")){
    d1.setVelocity(7,5);
    s1 = '';
    t1 = '';
    t2 = '';
    edj = 'j';
     m1.setVelocity(1,0);
  }

  }
  if(edj == 'j'){
  d1.bounceOff(rightEdge);
  d1.bounceOff(leftEdge);
  d1.bounceOff(p1);
  d1.bounceOff(p2);
  p1.bounceOff(edges);
  p2.bounceOff(edges);
  m1.bounceOff(edges);
  
  if (d1.isTouching(m1)){
    
 
    edj = 'v';
  }
  if(d1.y > 400||d1.y < 0){
    edj = 'd';
  }
  if(keyDown("left")){
    p1.x = p1.x-7;
  }
  if(keyDown("right")){
    p1.x = p1.x+7;
  }
  if(keyDown("a")){
    p2.x = p2.x-7;
  }
  if(keyDown("d")){
    p2.x = p2.x+7;
  }
  }
  
  if(edj == 'v'){
    textAlign(CENTER,CENTER);
    textSize(35);
    fill("green");
    text('VOCÊ VENCEU',200,100);
    m1.setVelocity(0,0);
    d1.setVelocity(0,0);
    textSize(20);
    text('Pressione R para recomeçar',200,300);
    if(keyDown('r')){
      edj = 'i';
    }
  }
  if(edj == 'd'){
    fill("red");
    textAlign(CENTER,CENTER);
    textSize(35);
    text('VOCÊ PERDEU',200,100);
    textSize(20);
    text('Pressione R para recomeçar',200,300);
    m1.setVelocity(0,0)
    if(keyDown('r')){
      edj = 'i';
    }
  }
  
  createEdgeSprites();
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
