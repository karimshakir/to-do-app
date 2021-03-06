var lib;
var images;
var createjs;
var ss;
(function (lib, img, cjs, ss) {
  let p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 800,
    height: 140,
    fps: 24,
    color: '#FFFFFF',
    opacity: 1.00,
    manifest: [],
  };
  lib.ssMetadata = [];


  // symbols:
  (lib.s013 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('ABxipQhrBbgDAEQgCACgaAaQgfAfgQAaQgLAUgQAaQgLAUgBAWQgEAxARAW');
    this.shape.setTransform(-26.2, 13.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AhCAMQAdgIAogEIBAgK');
    this.shape_1.setTransform(-26.9, 2.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AgFgZIAFAQQAFATABAR');
    this.shape_2.setTransform(-55.7, 18.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AghATQA9gdAGgI');
    this.shape_3.setTransform(-67.9, 24.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AAHjFIADAUQADAYAAAWQABATgJA7QgHBDgCAVQgBAagGA+QgEA2AHAV');
    this.shape_4.setTransform(-65.9, 36.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AAEgxQADArgLA4');
    this.shape_5.setTransform(-64.8, -8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AgtBvQAlgTAUgJIALgSQABggAEglQAHhMALge');
    this.shape_6.setTransform(-80.1, -9.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('Au1FtQAWghAXguQAXgzALgXQAohTAbgiQAOgQASgOQAWgOAMgJQgCg9AJg7QADgYAEglQACgVADgJQALgfATAJQAMAHAFAEQAFAFAMARQAKgiAKgOQAIgLAQAAQASABAMARQASAZAIAPQANAZADAfIAAATQAQgRAwguQAvgsArgcQA/goBDgOQBFgPBMAFQBAAEAuAPQAkALAiAUIAbARIABgPQADgTAJgVQAag3AUggQAvhHBGg2QBYhEBCgaQBOgfBrAAQBqAABVAxQBJApBJBXQgogCg8ABQg8gBgdABQgwADgbAUQgKAHhBA3Qg1AtggAUQg7AnhvA2QiPBEhiAXIgJgBQAEASgQAlQgQAkgQATQgbAjg3AsQgrAigfAVQgMAJgMAUQgIAPgIAlQgJAngOAbQgRAhgUAMQgNAHgUAAQgNAAgOgKQgOgJgEgKIgQgEQgRgIgFgPQgJgXgCgOQgDgWAHgWQAKgdAYghQAcgmAlgdIAQgOIgRgCQgVAAgRALQgNAJgmAVQghAVgQASQgMAOgVAaQgUAXgWASIgNAFQAFA2gDBJQgCA8gJBEQgLBJgKATQgLAUgMAIQgLAGgQAAQgOAAgJgFQgGgEgJgKIgQACQgRgBgHgRQgLgaAChEIAEi+IgiAQQgxAThJAPQhSASgNACQgSAChIADg');
    this.shape_7.setTransform(-10.4, -2.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(1, 1, 1).p('AgRAVQgIgOACgLQACgNAMgCQAVgDANAb');
    this.shape_8.setTransform(-83.7, 11.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('AgjATIAbgvQAIACALAIQAVAPAEAbIhHAFIAAgKg');
    this.shape_9.setTransform(-101.2, 31.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AhAA4QgMgCgJgFIAIg2QALgTADgCQACgCAOABQAfAbADAEQABADALgZIAIgbIAYgLIApAjIAOAiIgPAQQgTAQgSADQgRADgSgNQgJgHgHgHIgHAUQgNAMgTAAIgIAAg');
    this.shape_10.setTransform(-74.5, -18.9);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AiQBhQgHgTAFgVQghACAFgZQADgMAJgNQgKABgNgHIgLgGQgfgJARgYQAJgMAPgKIgoAAQgbgHAkgbQASgNAXgMIAfgEIBngCIBnAeIBjA9IBOBUIjFABQgFAAgvARIg+AzQgPADgMAAQgiAAgKgbg');
    this.shape_11.setTransform(60, -51);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgeBBIgRgOIgXgLIgTgoIgCgnIAOgpQACARAGANQANAbAbgRIAJgRQACAJAFAIQAKARAPADQAaAEAWgDQAbgDAFgMIgVA8QgEAJgXAeIgsAPg');
    this.shape_12.setTransform(-33.3, 23.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AgXAqIgQgDIgdgSIgHggIACgdQAJAFAIADQAPAGAJgFIADgYQADAIAIAGQAOAOARgBQAWgCAUgJQATgIACgIIgGAkIgZA7IglAQg');
    this.shape_13.setTransform(-63.9, 52.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('Ah7AAQARgfAJgMQAOgTAfgHQBmgYAyAFQAlADAPAEQAYAGABAOIAEAqIgsAZQh5A5gIgDQgGgBhIAOIhKAPIgkACQAjg6AWggg');
    this.shape_14.setTransform(-82.7, 24.7);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#F1F1F2').s().p('Ai+BxIgIgdIArguIAmguQAbgjAZgOQAjgUAUgHQAdgKAxgEQBHgHA8gHIgyAtIhlAQIgyAQIhIArIhmBpg');
    this.shape_15.setTransform(-35.9, 8.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AokJcQgGgEgJgKIgQACQgRgCgHgQQgLgaAChEIAEi+IgiAQQgxAShJAQQhSASgNACQgSAChIADQAWghAXgvIAihKQAohSAbgiQAOgQASgOIAigYQgCg8AJg7IAHg+QACgUADgJQALgfATAJQAMAHAFAEQAFAFAMARQAKghAKgOQAIgMAQAAQASACAMAQQASAZAIAPQANAZADAfIAAATQAQgRAwguQAvgsArgcQA/goBDgOQBFgPBMAFQBAAEAuAPQAkALAiAUIAbASIABgQQADgTAJgVQAag3AUgfQAvhJBGg1QBYhEBCgaQBOgfBrAAQBqAABVAxQBJApBJBYQgogDg8ACQg8gCgdACQgwACgbAUIhLA+Qg1AtggAUQg7AohvA0QiPBFhiAXIgJgBQAEASgQAlQgQAkgQATQgbAjg3AsQgrAigfAVQgMAJgMAUQgIAPgIAlQgJAngOAaQgRAigUALQgNAIgUAAQgNAAgOgKQgOgJgEgKIgQgFQgRgHgFgPQgJgYgCgNQgDgWAHgWQAKgdAYghQAcgnAlgdIAQgNIgRgCQgVAAgRALQgNAIgmAVQghAWgQARIghApQgUAXgWARIgNAGQAFA1gDBKQgCA7gJBEQgLBKgKATQgLAUgMAIQgLAGgQAAQgOAAgJgFg');
    this.shape_16.setTransform(-10.4, -2.5);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-106.5, -64.5, 192.2, 123.9);


  (lib.s012 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgnAEQAxgIAeAB');
    this.shape.setTransform(-21.3, -6.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AAdioQgIAGgKAPQgSAegJAvQgPBOAEAsQAGBKAyAr');
    this.shape_1.setTransform(-15.9, 2.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('ABNjKIgKAiQgNAogMAdQgIAVgiA5QghA2gMAfQgXA5gFATQgIAkAMAb');
    this.shape_2.setTransform(-73.9, 36.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AAwg3IgUAnQgcArguAe');
    this.shape_3.setTransform(-72.9, 20.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AgbBwQABgzAQg3QAJgaAJgnQAJgdAMgX');
    this.shape_4.setTransform(-83.8, -13.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AgfAbQAgggAfgV');
    this.shape_5.setTransform(-89.9, -2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AACgSQAAAIgBAIQgBARAAAE');
    this.shape_6.setTransform(-72.6, -9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('AwcGGQAWgmAchMQAsh5ADgHQAVg1ARgYQAVgcASgXQAVh4AbhJQASgyAUgGQAQgFAIAVQADgGAFgHQAMgOAPgHQAPgHAPAbQAMAWAEAeQAHArAAA+QAMgOAXgWQAsgrAxgmQB7heBUggQB6gvCHAPQA6AHAvAWQAgAPAWgJQAcgLAlgpQAVgXApgvQA+g9BCgoQBzhHBygBQCEgBBRASQBRASBIAvQA9AmApBMQAVAmAJAfQgOgIgWgIQgrgSgngGQhAgKgEgBQgagBguAJQgMAChPAVQg2APg2ACQhbACgsABQhNADgzAHQg/AJg0ASQg3AUgZAXQgWAUgMAJIgIAGQgFARgcAoQglAqgUAZQghAugBAmQgBAdgCAtQABAiASAiQANAaANAYQAHAOgFARQgEASgMAHQgIAFgRAAQgOAAgVgIQgUgIgIgHIgKAFQgNAFgMAAQgVAAgYgSQgggYgIgoQgKgsAFgmQAFgkAXgzIgMgJIg2AOQhAAXg1A3Qg/A/gsA3QgrA0gOAeQgJATgeA4QgdA4gPAvQgSA2gaAwQgYAugPAMQgQAMgTABQgVABgOgOIgSgCQgSgEgDgQQgEgUAHgjQAHgmARgmQAOgiAVhBIARg6IghARQgoAVgnAPQgpARgzAMQgWAFhiAUg');
    this.shape_7.setTransform(-4.3, -2.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(1, 1, 1).p('AgPAVQgJgOACgLQACgOANgBQAHgBAGAEQAJAGAIAQ');
    this.shape_8.setTransform(-91.2, 11.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('Ag6AzQgHgDgJgJIAFgPIAdgwIAQgGIANAOIAIgOIAegXIAcAXIAUAuIgXARQgbARgQAAQgQAAgHgFQgCgBgJgLQgJgKAEAbQgIAEgIAAQgGAAgGgDg');
    this.shape_9.setTransform(-80.4, -22.4);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AgiAKIATgnQALgBALAFQAYALAIAaIhNASg');
    this.shape_10.setTransform(-104.9, 33.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AjlBeQAHgTAPgTQglgEAOgwQAHgWAPgXQgQgEADgJQACgFAFgEQgygVAdgYQAOgNAYgIIBIAEIB1AUIB0A1IBbBWIAvBgIgngOIhcgYIhbgHIg2AKIhnAbIhAAIIgCAAQgqAAAMgkg');
    this.shape_11.setTransform(76.3, -50.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AASA9IgSgMIgWAMIgkgHIgfgXIgWghQAMAMAPAHQAeAPAUgdIgIgTQAFAFALAEQAUAHAegFQAfgGAIggIAAgfIAiBGIAOAoIgSAfIgbAIg');
    this.shape_12.setTransform(-13.6, 13.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AAAA2QgHAAgYgKIgjgMIgJggIAFgkIAKgRQACAIAFAGQAJANANgGQAWAKAWAGQAwANAPgSIg1BBIgKAFQgJAFgEAAIAAAAg');
    this.shape_13.setTransform(-77.6, 52.7);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AijBLQAOgeAJgYQAMggAIgSQANgfAPgJQATgMBLgOQBRgPApAEIA6AHIgYAsIhEBBIh9A8IiSAlQAEgBAOgfg');
    this.shape_14.setTransform(-86.3, 24.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#F1F1F2').s().p('AjVCmQACABAlhRQAphaAiggQA0gxAigZQArghAogKQAygOANgBQAWgDA7ACIgfA3Ig2AEIhVAbIhdA9IhgBwIg7BRg');
    this.shape_15.setTransform(-36.3, 4.5);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AsAJRIgSgCQgSgEgDgQQgEgUAHgjQAHgmARgmQAOgiAVhBIARg6IghARQgoAVgnAPQgpARgzAMQgWAFhiAUQAWgmAchMIAviAQAVg1ARgYIAngzQAVh4AbhJQASgyAUgGQAQgFAIAVQADgGAFgHQAMgOAPgHQAPgHAPAbQAMAWAEAeQAHArAAA+QAMgOAXgWQAsgrAxgmQB7heBUggQB6gvCHAPQA6AHAvAWQAgAPAWgJQAcgLAlgpIA+hGQA+g9BCgoQBzhHBygBQCEgBBRASQBRASBIAvQA9AmApBMQAVAmAJAfQgOgIgWgIQgrgSgngGIhEgLQgagBguAJIhbAXQg2APg2ACIiHADQhNADgzAHQg/AJg0ASQg3AUgZAXIgiAdIgIAGQgFARgcAoQglAqgUAZQghAugBAmIgDBKQABAiASAiIAaAyQAHAOgFARQgEASgMAHQgIAFgRAAQgOAAgVgIQgUgIgIgHIgKAFQgNAFgMAAQgVAAgYgSQgggYgIgoQgKgsAFgmQAFgkAXgzIgMgJIg2AOQhAAXg1A3Qg/A/gsA3QgrA0gOAeQgJATgeA4QgdA4gPAvQgSA2gaAwQgYAugPAMQgQAMgTABIgDAAQgTAAgNgNg');
    this.shape_16.setTransform(-4.3, -2.5);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-110.6, -64.1, 212.7, 123.3);


  (lib.s011 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgogDQA5ABAXAG');
    this.shape.setTransform(-18.8, -8.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AgMiIQgKAFgJAQQgTAhAGA7QAFA4ArA6QAWAdAVAR');
    this.shape_1.setTransform(-10, -0.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('Ag4DIQgRgVACgVQAAgWADgSQAEgfARgtQAWg5AfhCQAkhLAfgr');
    this.shape_2.setTransform(-79, 28.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AhSBEQAmgRAQgNQBOg5Aggv');
    this.shape_3.setTransform(-79.1, 14.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AhDB7QAGgLARgNQAQgMACgDQAHgIAEgOQAqiJApgv');
    this.shape_4.setTransform(-92.2, -16.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('Aw1FDQATgfAohVQAphaASgfQAegzADgDQAEgGAUgaQgFgJACgXQACgtAfhCQAhhGAXgZQAKgLAagNQAOgHACAMIgBAOQAUgbAUgKQAogUAAArQAAAdgDAsQgCAwgEAaQAagIAXgZQAcgeApgiQA6gwArgSQA+gbA0gMQBNgRBmAEQBeADA6AMQAvAOAXAEQAgAGAVgFQATgEASgPQALgJA8g6QA/g5AjgXQA9gmA8gRQBggcCRAAQCTAABhA+QAuAdB/B/IAAAJQgEABgtAAQgcAAgxAJQg9ANgjAHQhDAMgXACQgxAChogKQh2gPgigCQgvgEhCAPQhIAQhCAVQg4ASgaANQgFACgWAIQgFACgCAKQgOAbgNAaQgaA0gCArQgCAwALAeQAIAXAXAYQASARATAPQALAIARANQANAKADAJQAEAKgIANQgHAMgXAFQgVAFgbgEQgWgDgUgRQgJgIgGgHIgEAHQgGAHgLABQgYADgYgJQgogNgWgpQgXgqAAgqQABgWAMgyIgegGQgkgFgdAEQglAFhAAdQhDAbgbAZQgTASg0ArQguApgSAjQgOAbgmA/QghA6gKAiQgOAwgTAwQgVA3gNAPQgOAQgJADQgKADgKgIQgOgMgFgKIgIADQgKACgIgDQgMgEgJgWQgKgYACgdQACgYAQgiQAWgvACgGQAHgWAFgiIADgdIghAQQgpASgpAOQhgAghjADg');
    this.shape_5.setTransform(-8.7, -4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(1, 1, 1).p('AgRAUQgHgOAEgLQADgNANgBQASAAAJAc');
    this.shape_6.setTransform(-96.3, 3.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#758594').s().p('AADAzQgRgBgVgMQgMAFgZgQIAmgtIAZgKIAJAKIAHgEIAggYIAUgEIAHAJQAHAKgBACQgBADABBIIgbADQgWACgMAAIgIAAg');
    this.shape_7.setTransform(-84.9, -27.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#758594').s().p('AgmAbIAhg4QAIABAKAGQAWAOAEAaIg9AMg');
    this.shape_8.setTransform(-112.6, 25.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AjCBaQAAgWAIgXQg9gMAYg0QALgbAYgYQg4gOAhgaQAQgNAbgLIAiACIBVAOIBcAnIBeBKIBaBYQAIAHgIABIgwACIhqAOIhSARIiKALQguAAgBgtg');
    this.shape_9.setTransform(76.3, -44.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AAAA3QgIAAghgNIgdgkQAwAQASgcQAFgMgBgTIgEgRIBCA2IAJAaIgQAVQgtAIgKAAIAAAAg');
    this.shape_10.setTransform(0.2, 9.9);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgbASQAOABAIgVIAFgWIATAYIAJATIgcAHg');
    this.shape_11.setTransform(-9.8, 10.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgFA/IgQgUIgaACIgWgeIgHguIAKgoQAJANAHAHQAOAMARgGQARAKARAIQApAQAUgOIgcA+IgdAjg');
    this.shape_12.setTransform(-83.5, 43);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AibAPQACgJAJgOQANgZATgSQAWgUAWgIQAVgHAlgBQAdgCAdgEIAugGQBRgKAbAKIgvA6IhHAzIheAuIh2AlIhJAMg');
    this.shape_13.setTransform(-91.1, 17.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#F1F1F2').s().p('AjFAvQAfg0AXgUQAegZAigSQAogWAhgEQA5gIBwAIIA+AEIAAAZIhtgJIhFAEIhoAoIhxBPIg2AyQALgYAQgcg');
    this.shape_14.setTransform(-37.3, -1.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#D2DADB').s().p('AruIXQgOgMgFgKIgIADQgKACgIgDQgMgEgJgWQgKgYACgdQACgYAQgiIAYg1QAHgWAFgiIADgdIghAQQgpASgpAOQhgAghjADQATgfAohVQAphaASgfIAhg2IAYggQgFgJACgXQACgtAfhCQAhhGAXgZQAKgLAagNQAOgHACAMIgBAOQAUgbAUgKQAogUAAArQAAAdgDAsQgCAwgEAaQAagIAXgZQAcgeApgiQA6gwArgSQA+gbA0gMQBNgRBmAEQBeADA6AMQAvAOAXAEQAgAGAVgFQATgEASgPQALgJA8g6QA/g5AjgXQA9gmA8gRQBggcCRAAQCTAABhA+QAuAdB/B/IAAAJQgEABgtAAQgcAAgxAJIhgAUQhDAMgXACQgxAChogKQh2gPgigCQgvgEhCAPQhIAQhCAVQg4ASgaANIgbAKQgFACgCAKIgbA1QgaA0gCArQgCAwALAeQAIAXAXAYQASARATAPIAcAVQANAKADAJQAEAKgIANQgHAMgXAFQgVAFgbgEQgWgDgUgRQgJgIgGgHIgEAHQgGAHgLABQgYADgYgJQgogNgWgpQgXgqAAgqQABgWAMgyIgegGQgkgFgdAEQglAFhAAdQhDAbgbAZQgTASg0ArQguApgSAjQgOAbgmA/QghA6gKAiQgOAwgTAwQgVA3gNAPQgOAQgJADIgFABQgIAAgHgGg');
    this.shape_15.setTransform(-8.7, -4);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-117.5, -59.1, 217.7, 110.4);


  (lib.s010 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AjOhiQBZAHARAAQALAAADAAQADACAEACQACABAzAoQA1AtAeAQQAaAQAyAgQArAZAfAL');
    this.shape.setTransform(-3.7, 1.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AAUgKIgLAIQgNAIgPAF');
    this.shape_1.setTransform(-81.5, -21.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AheCHQAeghATgPQAMgJAKgRIAIgPQAMggASgkQAohNAogj');
    this.shape_2.setTransform(-93.6, -23.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AhbChQABgdAVguQARgmAyhLQA3hZAngs');
    this.shape_3.setTransform(-84.8, 17.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AhqBQQAfgIAlgUQApgZAxg0QASgUAHgHQANgOARgM');
    this.shape_4.setTransform(-83.5, 7.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AxgEQQAKgQBIiFQA3hjArg1QAFgXAKggQAWhAAcguQA+hmAUAAQANAAAEACQAIADAAAMQAcgeASgHQARgGAGAFQAIAGgCAgQgEAtgCASQgFAhgLAnQAigVAugYQBdgvA5gSQBHgWBhgDQBmgDBkASQBxAZAlAEQA6AFA8ggQBCgkBwgrQBpgoBLgUQBZgXAugIQBHgNBCADQBDACA2AUQAsARArAgQA0AnBOBOQgXAHgtAQQgpAUgdAKQgzAShNAGQiaAKiyggQhOgOhLgBQhNgBg6ANQhDAOgfAKQgpAMgPAPQgSATgCADQgFAFgBAIQgGAgAHAWQAGASAkAfQAsAjBCAiQBXAtAMAHQAaAQAIARQAJATgDAKQgDAKgQAJQgOAHgpgFIgmgHQgBADgFADQgMAGgaABQgdABg7gaQgzgYgsgdQgygjhThYIgtgGQg6gEg+AKQhaALhCAbQhXAjg5A+QgzA3gxBXQgaAugiA/QgXAjgSANQgSAOgYAAQgUAAgDgaIABgaIgPgCQgQgFgCgTQgHgbABgUQADghAhg5IgcAJQgoAKg9ALQhGAMgWACQgTACgWgDg');
    this.shape_5.setTransform(-8.3, -7.8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(1, 1, 1).p('AgTAOQACgMAGgGQAHgJAKAAQANAAABAS');
    this.shape_6.setTransform(-97.6, -4.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#758594').s().p('AgoAaIAgg2QAKABANAIQAYAOADAbIhEAEIgMADQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBABgBg');
    this.shape_7.setTransform(-116.3, 16.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#758594').s().p('AgjAlQgSgEgXAEIAKgaIAkgcIAygEIAkgWIAQACIAFAhIgEAzQgPgKgwAEQgXADgWAEg');
    this.shape_8.setTransform(-85.5, -35.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AibCEQgogDACgrQABgWAIgVQgogHAPgfQAHgNAQgOQghgEALgXQAGgMAMgKQg2gVAxgXQAZgLAjgHIARAAIBbANIBfAsIBkBRIAzAwIiXA6IhhASQgmAFgnAAQgYAAgZgCg');
    this.shape_9.setTransform(81.9, -38.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AgkAsQglgIASADQASADAMguQAGgXACgZIAeARIAmAeQALAZAAADQABADgSAWIgpAFIgogJg');
    this.shape_10.setTransform(20.2, 6.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AggBDIgFgUIABgWIgVgGIgMgTIgGgtIAHgeQAHAPAKAMQAWAYAVgPQAMASARAQQAiAeAPgPQAQgMgbAcIgdAiIgmAQg');
    this.shape_11.setTransform(-90.3, 29);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('Ai0A6QAkgzAFgFQAQgSAPgSQAfghAbgGQAZgFAogCIBHgEQAbgCAngMQAkgKAIABQAMAAAFAEIADAEIhrBtIhsA3IihAkIg3AHIAjgyg');
    this.shape_12.setTransform(-94.5, 8.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#F1F1F2').s().p('AkFBDQAMgQAQgQQAegeAigRQBgg0CegCQBTgBAmACQAWAAAUADQANABABAIQABAGgFAHQgDAEgqgBIgqgBIirAFIiQAhIhmBDg');
    this.shape_13.setTransform(-39.3, -4.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#D2DADB').s().p('AtYGiIABgaIgPgCQgQgFgCgTQgHgbABgUQADghAhg5IgcAJQgoAKg9ALQhGAMgWACQgTACgWgDQAKgQBIiFQA3hjArg1QAFgXAKggQAWhAAcguQA+hmAUAAQANAAAEACQAIADAAAMQAcgeASgHQARgGAGAFQAIAGgCAgQgEAtgCASQgFAhgLAnQAigVAugYQBdgvA5gSQBHgWBhgDQBmgDBkASQBxAZAlAEQA6AFA8ggQBCgkBwgrQBpgoBLgUQBZgXAugIQBHgNBCADQBDACA2AUQAsARArAgQA0AnBOBOQgXAHgtAQQgpAUgdAKQgzAShNAGQiaAKiyggQhOgOhLgBQhNgBg6ANQhDAOgfAKQgpAMgPAPIgUAWQgFAFgBAIQgGAgAHAWQAGASAkAfQAsAjBCAiQBXAtAMAHQAaAQAIARQAJATgDAKQgDAKgQAJQgOAHgpgFIgmgHQgBADgFADQgMAGgaABQgdABg7gaQgzgYgsgdQgygjhThYIgtgGQg6gEg+AKQhaALhCAbQhXAjg5A+QgzA3gxBXIg8BtQgXAjgSANQgSAOgYAAQgUAAgDgag');
    this.shape_14.setTransform(-8.3, -7.8);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-121.5, -53.2, 226.4, 90.9);


  (lib.s009 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AjEhkQBQASAkABQAkABAJgBQAHAaAeAjQBCBGCBAz');
    this.shape.setTransform(9.3, -5.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AhWBpQAggJASgVQAcgiAthGIAyhL');
    this.shape_1.setTransform(-86.1, -37.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AiFB5QgJgNAJgMQAGgNAGgJQAKgRAagTQA4gpAngfQBNg5Azgd');
    this.shape_2.setTransform(-92.1, 5.3);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AicBKQAhAABAgaQAegNBIgsQBLgvAngR');
    this.shape_3.setTransform(-87.4, -2.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AyoC9QAWgZA1hGQAzhEAfggQAogtAegZQAXgSAbgPQATgLAFgMQAEgLANgvQASgzANgYQAPgcATgKQAmgTAdALQAHgRAPgFQAOgGAGgCQALgEAHAGQAJAGADAbQAFAcgHATQgFAPgWApQgLAUgKARQAXgMB1goQBqgkBjgKQCGgOCZAdQBEAMCQAsQBDAVBDgSQAtgMBqgiQBOgYAsgIQBkgRBNgBQCFgCBmAoQBoApBIBUQA1A9AVA9QgDAKgFABQgHAChVgFQhkgHhOgJQhOgMh3gfQgQgEifgrQhCgShDgIQg/gGgfAFQhvAUgRARQgIAIgBANQAAAOgDADIgGAIIAmAnQAIAGAQALQAgAYAqAUQA8AcAaAOQAjAUAOAQQAQASADAQQADAPgKAQQgQAahMgQQgTgEgPgEIgLgDQABACgDACQgHAEgVAAQgaAAghgIQgkgJgcgPQgegQgygqQg3gug1g7QgNgGgZgGQg0gLhAgDQilgIhxAkQhAAVhPAwQhQAxgsAtQguAwghAbQglAfgqAWQhkA2gbgWQgMgLgBgJIACgHIgKgJQgJgMACgKQAIgpAvgnIg6AHQhJAChPgTg');
    this.shape_4.setTransform(-3.8, -15.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(1, 1, 1).p('AgVgBQAKgIAKgBQAJgCAJAIQAFAEgBABQAAACgIAI');
    this.shape_5.setTransform(-96.3, -17.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#758594').s().p('ABBAmQgKgKgPgFQgYgGgqARIAJgNQgDgJggACIgfACIAUgSIAjgPIAjADQAWgWADgBIAZgJIANAHIAOA1IgMAhg');
    this.shape_6.setTransform(-78.9, -45.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#758594').s().p('AAAAYIgkgHIAngxQAIABAMATQAPAVgBAYQgDgCgigHg');
    this.shape_7.setTransform(-119.1, 1.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('ACLCBIi2gPQgHACgSgDQgkgEg2gWQg3gWAdgyQAOgXAZgVQgdgbAigIIAegGQgLgFgGgLQgIgMAEgNQADgLAmgEQATgCASAAIA1AaIBnBPIBBBTIAbA5IgRAMg');
    this.shape_8.setTransform(95.9, -27.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AgjA1IgTgEQANgHAJgsQAHgeACgfIA7AkIAgAuIgHAeIgyAPIgugLgAg+AyQgNgFAVAEIgEABIgEAAgAg2AxIAAAAg');
    this.shape_9.setTransform(35.3, -0.3);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('Ag0A0IgLgbIgNgOIAAgdQAHggAGgBQAEgBATAMIATALIAKgIQAagHAYACQAxAFgOAqIgLAUIg/Acg');
    this.shape_10.setTransform(-99.5, 13);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AjTBPIgQgCQAFgHAegdQAgggAMgMQAVgeAKgNQATgXAWAAICrAAICFgJIgUASIihBdIhZAlIhPAJg');
    this.shape_11.setTransform(-94.4, -3.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#F1F1F2').s().p('AkuAfQArghAegKQA1gWAigLQA9gTBBAAIBsACQAoACAwAIICVAXQAVADgJANQgJANgKgBIjmgiQinAHgEABIiCAiIhbAuIgrAMIApgig');
    this.shape_12.setTransform(-32.2, -13.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#D2DADB').s().p('AvxFRQgMgLAAgJIABgHIgJgJQgKgMACgKQAJgpAugnIg5AHQhKAChPgTQAWgZA1hGQAzhEAfggQAngtAggZQAWgSAbgPQATgLAFgMQAEgLANgvQASgzANgYQAQgcASgKQAmgTAdALQAHgRAPgFIAUgIQALgEAHAGQAJAGAEAbQADAcgGATQgFAPgWApIgVAlQAXgMB1goQBqgkBjgKQCGgOCYAdQBEAMCRAsQBCAVBEgSQAtgMBqgiQBOgYAsgIQBjgRBOgBQCFgCBmAoQBnApBJBUQA1A9AVA9QgEAKgEABQgHAChVgFQhkgHhOgJQhOgMh4gfIiugvQhCgShDgIQg/gGgfAFQhvAUgRARQgIAIgBANQAAAOgDADIgHAIIAnAnQAHAGARALQAfAYArAUQA7AcAbAOQAjAUAOAQQAPASADAQQAEAPgKAQQgQAahMgQIgigIIgLgDQAAAAAAABQAAAAAAABQAAAAgBABQgBAAgBABQgGAEgVAAQgaAAgigIQgjgJgcgPQgegQgzgqQg2gug1g7QgNgGgagGQgzgLhAgDQilgIhxAkQhAAVhPAwQhQAxgrAtQgwAwgfAbQgmAfgqAWQhHAmgiAAQgOAAgIgGg');
    this.shape_13.setTransform(-3.8, -15.5);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-124.2, -50.9, 240.7, 70.8);


  (lib.s008 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AjqhcQBBAIAWAIQALADALAPQARATAaATQAjAYBHAgQBDAcApALQBAAQAnAC');
    this.shape.setTransform(28.5, -4.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AhtBiQAogOAXgIQAPgEAKgTQAJgWAGgKQA3hSA9gk');
    this.shape_1.setTransform(-85.7, -42);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AC+h0IgqALQgyAOgsARQgkAOg3AUQgsARgcARQgXAMgiASQgXAOAAAQQAAAXAFANQAFARANAK');
    this.shape_2.setTransform(-91.2, -0.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('Ag5AAQBLABAogB');
    this.shape_3.setTransform(-100.2, -5.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AzdBPQAhgTAngbQAzghAUgUQAgglAXgXQAqgqAwgYQATg7AfgvQAZgkAbgZQAcgaAWgFQASgEAWADQAVACABgBQAKgEAIgDQARgFAIABQALABAEAIQAFAKgDAaQgFAigEATQgHAdgNAaQBcgXBDgMQBQgOCbgEQDKgFBsAeQDNA4AfARQAMAHAHAMQAGALADAAQAJACBWAAQARAAA0gCQA3gCA1AFQByALA8ALQB7AUBaAlQBkApArAVQAmAVAYAZQAsAuAWAhQAtBEAHBJQAIBIgBABQAAABgCgEQgDgEgCACQgEAFgrgXQg2gcgRgGQgLgDhTgeQhKgbgngLQhCgUgugSQhFgbg0giQgdgShihAQhMgwgYgOQgjgUgOgGQgSgIgSAAQgcAAgOAAQgZAAgGAEQgTAMgFAJQgDAJgBAEQgDAHgLAEQgKAGAKAMQAFAGAHAFIARATQAaAWAqAOQBhAiBPAjQAeAMACAUQACARgOALQgLAJglAEQgmAEgogEQhLgHgYgEQhBgLgtgaQgugbgigiQgUgUgtg4Qg1gPhAgPQiEgchDACQhhADhhAOQh6AUhCAgQjRBpgiAeQgnAjgTAOQgpAfgnAKQhLAVgbgYQgNgMgGgKQgKgQACgUQAFgrAegWQANgKAcgOIAagNIgjACQgsgBgsgJQgsgKgXgKQgMgFgDgEg');
    this.shape_4.setTransform(0.1, -17.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(1, 1, 1).p('AgVgBQAVgSARAQQAFADgBABQAAACgIAI');
    this.shape_5.setTransform(-95.1, -24.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#758594').s().p('AgbAKIgGgIIAugdQAIAGAGAKQAMASgKAVg');
    this.shape_6.setTransform(-120.8, -9.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#758594').s().p('ABJAiQgJgHgSgFQgUgEgWAAQgdABgLAFQARgUgiABQgRABgVAFIAOgWIA2gTIArAGIAggNIAagDIAHALIAHANIgMA5IgHgHg');
    this.shape_7.setTransform(-77.5, -48.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('ABWB+IhjgwQgsgJhNgaQgxgRAegTQAPgIAZgGQgpgQAIgWQADgLAMgHQgngSAkgPQASgHAZgEQgQgTAZgHQAMgFAQAAQgQgXAiAAQASAAASAEIAZANIA3A6QAMAPAvBQIAUBPIAGBKIhPgkg');
    this.shape_8.setTransform(108, 2.1);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AgvAnQgegIAUAAQAVAAAJglQAIgigHgFIAgALQA0AbADADQADAEACAUIgPATIhAAHIgigHg');
    this.shape_9.setTransform(49.2, 0.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AgvA3IgUgXQgTgjAHgBQAEAAAMgZIAMgaIAMgLIASAAIAbAZIAGgOQAVACAcAhQAhAkgUAjIgVAHIhEAJg');
    this.shape_10.setTransform(-106.7, 4.7);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgoA6IhigBIhegTQAEAAAegSQAggTARgLIAmghQAYgUAVgCQAVgDAWAHIA2AVQAkANBCAMQBBALAdAAQAXAAg8AOQgeAJgjAIIhuAog');
    this.shape_11.setTransform(-97.4, -11.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#F1F1F2').s().p('AkmgJQAvgQA+gMQBMgOBRgFQBbgGA5ACQA/ADA7ANQBvAaAkAaQANAKgMAJIgPAGIiLgeIiYgVIhjgGIjMAYIiLArIglATQAtg3A4gQg');
    this.shape_12.setTransform(-27.3, -16.3);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#D2DADB').s().p('ATbFhQgBgBAAgBQgBAAAAgBQgBAAAAAAQgBABgBAAQgEAFgrgXQg2gcgRgGIheghQhKgbgngLQhCgUgugSQhFgbg0giIh/hSQhMgwgYgOQgjgUgOgGQgSgIgSAAIgqAAQgZAAgGAEQgTAMgFAJIgEANQgDAHgLAEQgKAGAKAMQAFAGAHAFIARATQAaAWAqAOQBhAiBPAjQAeAMACAUQACARgOALQgLAJglAEQgmAEgogEQhLgHgYgEQhBgLgtgaQgugbgigiQgUgUgtg4Qg1gPhAgPQiEgchDACQhhADhhAOQh6AUhCAgQjRBpgiAeQgnAjgTAOQgpAfgnAKQhLAVgbgYQgNgMgGgKQgKgQACgUQAFgrAegWQANgKAcgOIAagNIgjACQgsgBgsgJQgsgKgXgKQgMgFgDgEQAhgTAngbQAzghAUgUQAgglAXgXQAqgqAwgYQATg7AfgvQAZgkAbgZQAcgaAWgFQASgEAWADIAWABIASgHQARgFAIABQALABAEAIQAFAKgDAaQgFAigEATQgHAdgNAaQBcgXBDgMQBQgOCbgEQDKgFBsAeQDNA4AfARQAMAHAHAMQAGALADAAQAJACBWAAIBFgCQA3gCA1AFQByALA8ALQB7AUBaAlQBkApArAVQAmAVAYAZQAsAuAWAhQAtBEAHBJIAHBJIAAAAIgCgDg');
    this.shape_13.setTransform(0.1, -17.4);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-125.5, -54.1, 251.2, 73.4);


  (lib.s007 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AipiDQAwAPAWADQAVACAFAGQA7BmAgAfQBQBNBIAb');
    this.shape.setTransform(12.7, 15.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AA8hdIgYAFQgdAIgTASQgbAXgJANQgLAPAAARQABAVAGASQABAEAUAt');
    this.shape_1.setTransform(-81.3, -2.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('Ah9gJQACgBAcAGQAmAGAaACQAmAFAJABQAJAAAPgCQARgCAkgHIAhgI');
    this.shape_2.setTransform(-78.5, -12.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AAsgbIgaAWQgZAVgJAEQgNAFgOAD');
    this.shape_3.setTransform(-56.6, -31.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AhzAmQAwgDAmADQAXACAMgKIAJgKQALgKASgKQAkgZAkgN');
    this.shape_4.setTransform(-70.6, -41.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('ApJlkQAGgDASgDQBIgNATAKQANAGAAASQABASgOAVQgSAcgtAjQAWgLBEgIQAxgFBLAKQBFAJBDARQA8AQBgAoQBZAnBBAjQAsAZAaAXQAXATARAIQAvAWAZAHQAwARAkACQAmACAagIQATgHAbgRQBUg5BBgGQBqgJBkAvQAkASAqAcQAeAWAfAHQArAKAbgCQAdgCAlgSQACAWgDAeQgGA8gaArQgeAyg7AnQg2AkgvAHQgpAGhIgSQg+gQhhglQjnhXg8gjQgzgdgTgJQgdgPgQgCQgTgBgEACQgFABgWAPQgeAUgBAAQgKAGgXABIAPAaQAZAhA0AlQAsAgA5AdQAtAXALALQAnArgOATQgIAKgVAFQgWAFgSgFQgOgEgOgFIgKgEQgDAIgeAHQgZAHgUgCQgYgDgcgOQgggQgpgpQgsgsgVgqQgcg7gPg8QgMAAgXgGQgsgMgzgZQgpgUg7gjQgxgZgogFQhGgIggAAQg8AAg7ARQgtAOg+ASQgqAPgSAQQgSAQgDAFQgGAJAHAPQACAFAMAQQAHAJABAQQABATgFAJQgFAIgPAIQgPAIgUgBQgUgBgLgLQgPgPgMgRIgHACQgKABgSgBQghgCgLgGQgZgLgGgkQgHgmAHgcQAGgWAQgUQALgNAWgNIAUgLIgogFQgugHgfgKQgYgHgZgFQgagHg6gdQAfgOArgcQAzgjAcgUQAwggAkgQQAtgVAugGQAGgIALgNQAYgaAfgTQAqgbAbgKQAigOAqgBQAlgBgPAWQgGAKgNAKQgCABgBAB');
    this.shape_5.setTransform(0, -9.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(1, 1, 1).p('AgTgDQAHgJALgDQAKgCAHAHQAGAHgDAFQgCADgNAM');
    this.shape_6.setTransform(-82, -30.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#758594').s().p('AA7AZQgHgTgXgGQgfgKgcADIACgKIgQAAQACgMgbgKQgOgFgOgDIAqgKIAsgBIAKALIgPAUIBkgDIANAKIAAAZIgNAkIgNALIgLAIQAFgUgGgPg');
    this.shape_7.setTransform(-56, -43.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#758594').s().p('AghAAIA0gcQAGAHAFALQAJAUgJATg');
    this.shape_8.setTransform(-109.7, -20.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AhwCrIgxgTQhCgbAqglQAVgSAigNQgngFAJgiQAFgRANgPQgpgGAdgXQAOgMAXgKQg8gMALgZQAFgNASgKQgfgQAggTQAQgKAXgGIAsALIBZA7IAYAKQAbAKATgBIA8gDIAegKIANgBIAABBIgbBGIgvA+IhVA9Ig2AUg');
    this.shape_9.setTransform(93.2, 4.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AhCA2Ig6gbIgHgIQAGAFApADQAvACAQgLIAAgOQARgCAOgHQAhgQACghIA0AVIAgAkIADAgIgfAPIgsAAIglgIIgoANg');
    this.shape_10.setTransform(26, 24.4);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AAlBAIgegbIgUgIIgygFIgfgPIgOgaIgGguQACAFAFAEQALAKASABQAUABATAEIAQAEIAPAnIA3gFQAXgEAQgHIAMgGIAOAWQAGAYgGAJQgEAKgZAQg');
    this.shape_11.setTransform(-84.7, 4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AghAzIh4gaIhAgWIAJgDQA8gRAbgNIAtgcQAXgNAdABQAeABAdAPQAJAEAwAeQAYAPAxAUQAwAVAFAEIgvAVIhPAKg');
    this.shape_12.setTransform(-87.7, -19.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#F1F1F2').s().p('ADwBJIiKg1Ih2g+IhRgQIhogGIiCAgIA5gZQA7gYAfgEQAxgFAuABQA+ABAnAOQA+AUA5AVQBNAdAVAKIBNAvQAvAigmAEg');
    this.shape_13.setTransform(-29.3, -5.3);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#D2DADB').s().p('ADPGOQgYgDgcgOQgggQgpgpQgsgsgVgqQgcg7gPg8QgMAAgXgGQgsgMgzgZQgpgUg7gjQgxgZgogFQhGgIggAAQg8AAg7ARIhrAgQgqAPgSAQQgSAQgDAFQgGAJAHAPQACAFAMAQQAHAJABAQQABATgFAJQgFAIgPAIQgPAIgUgBQgUgBgLgLQgPgPgMgRIgHACQgKABgSgBQghgCgLgGQgZgLgGgkQgHgmAHgcQAGgWAQgUQALgNAWgNIAUgLIgogFQgugHgfgKQgYgHgZgFQgagHg6gdQAfgOArgcIBPg3QAwggAkgQQAtgVAugGQAGgIALgNQAYgaAfgTQAqgbAbgKQAigOAqgBQAlgBgPAWQgGAKgNAKQAGgDASgDQBIgNATAKQANAGAAASQABASgOAVQgSAcgtAjQAWgLBEgIQAxgFBLAKQBFAJBDARQA8AQBgAoQBZAnBBAjQAsAZAaAXQAXATARAIQAvAWAZAHQAwARAkACQAmACAagIQATgHAbgRQBUg5BBgGQBqgJBkAvQAkASAqAcQAeAWAfAHQArAKAbgCQAdgCAlgSQACAWgDAeQgGA8gaArQgeAyg7AnQg2AkgvAHQgpAGhIgSQg+gQhhglQjnhXg8gjIhGgmQgdgPgQgCQgTgBgEACQgFABgWAPIgfAUQgKAGgXABIAPAaQAZAhA0AlQAsAgA5AdQAtAXALALQAnArgOATQgIAKgVAFQgWAFgSgFIgcgJIgKgEQgDAIgeAHQgTAFgQAAIgKAAg');
    this.shape_14.setTransform(0, -9.7);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-114.4, -50.5, 229, 81.7);


  (lib.s006 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AhmiEQAYAHAXADIAGALQAIAOAHASQALAcAWAtQAZA0AQAWQAQAZAPAPQANANATAM');
    this.shape.setTransform(15.5, 27.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AgYgmIAxBN');
    this.shape_1.setTransform(16.9, 12.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('Ag+gEQANAEAXABQAsAGAtgE');
    this.shape_2.setTransform(-57.4, -5.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('ABlhzQgHAAgjAKQgtAOgcARQgnAWgQAPQgVATgEAXQgGAkAAAQQAAAdAMAe');
    this.shape_3.setTransform(-54.8, 4.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AAxgKIgYAKQggAKgpAB');
    this.shape_4.setTransform(-37, -22.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AiKgVQATADAsASQAlANARAJQAOgJAYgKQA2gRBEgH');
    this.shape_5.setTransform(-51, -29.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AuAkqQAnADBVAAQBcgCAcgBQAigBApAGQAkAGAIAAQAIABAbgDQAdgDAJAAQBrACAlgCQAagDANAAQAXgBAbAEQAeAFAKAFQAJAEgCAGQgCAGgMAOQgMAOgHAFQgKAIgoANQAzAZAxASQCRA0BHAIQB+ANBCAbQBbAlA0BDQAfApAUATQAWAUAUAIQAVAIAMgDQANgDAAgOQAAgSgDgUQgEgagIgLQgZgegUgZQglg2gHgnQgHgtAMgyQAMgvAZgdQAPgSAagXQAWgTAJgPQAJgNAPgPQAKgPgEggIAhAMQAmAOAZANQBDAhAUANQA/AoAeAwQAhAzAOBVQALBIgGA3QgHA5gXAzQgdA+gwAlQhAAxgSAKQgjAUgwABQgxACg2gTQgwgRgagXQgdgbgkgdQgrgjgKgBQgIAAglANIgjAOIBmCSQAQAXAMAYQANAaAAALQAAATgCAFQgFANgTgBQgUgBgPgGQgFgCgSgLQgGAKgTAAQgRAAgPgGQgTgHgKgNQgWgegLgRQgXgmgKgmQgRg7gKg4QiZgtg4gRQgcgJhPgYQhFgXgZgNQgogVgXgIIgeAHQgiAJgTAMQgmAWgBAAQgOALADAOQACANAOASQATAVAKAMQARAWABAEQAFAJgHARQgIAUgaALQgbANgdgFQgagEgWgXQgPgPgIgTIgLAAQgMgBgHgIQgXgYgDgFQgQgbAFgoQAFgnAqghIApgbIgpgOQgugRghgVQhKgtgOgMQg9gzhGhng');
    this.shape_6.setTransform(-6.6, -1.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(1, 1, 1).p('AgZgEQAKgLAOgEQANgEAIAJQAJAJgFAHQgDAEgQAP');
    this.shape_7.setTransform(-62.9, -24.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#758594').s().p('AgggUIBAgCQACAJgDAKQgGATgUAHg');
    this.shape_8.setTransform(-92.7, -29.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('AgjAaQABgMgGgTQgFgVgLgHQgGgEgEABIAZgIQBEADARgDQAKgBAIAJIAFAJIgGAQQgIANgCABIgmAWQgJAEgsAQIAFgTg');
    this.shape_9.setTransform(-31.5, -26.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AjCCaIgVgYIABgbIAKgwIAZg2IBHhGIAng4IAAggIAwASICTBMIAkAaQAmAjANAtQANAvgnADIgqgFQgFALgZgFIgZgGQgKATgYACIgXgDQgPAjgegGIgdgMQgIAKgYgIIgXgKQgIAOgZgCIgYgEQgNAjgRAAQgFAAgGgEg');
    this.shape_10.setTransform(57.2, -29.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AAjAwIgXgKIgSAKIgpgHIglgYIgKgYIAUAHQAXAFASgMIAPAFQASgIAQgLQAmgWADgOIAmA6IAAAvIgRAKg');
    this.shape_11.setTransform(22.9, 35.7);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgIA6QgWgBgegfQgIgIgLggQAOAOAmAAQAhgBAUgNQAQgJABgSIgBgQIANAJIAMAUQANAWAAAGQAAAXgRARQgIAIgZAGQgTAEgNAAIgGAAg');
    this.shape_12.setTransform(-56.5, 15.3);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AANAsIgmgsIgHgtQAHAMALAIQAVAQAWgOIAEBFg');
    this.shape_13.setTransform(-67.9, 10.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AA+B0IhkgsIh5hUIhJhQIgTghQA5AaAoAHIA7AFQAjACAWALQATAJArAoQArAjASAIIBaAjQBAAZAGAHQAHAGABAFIgBAGQAAAEgaAIIgaAHIhLAFg');
    this.shape_14.setTransform(-69.9, -17.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#F1F1F2').s().p('ADrBaQgUgDgGgDIjZhCIiqg4IhNghIALgHQAMgIAOAAIAjgDQATgCAOAFQBgAgAUAFICeAtQAhAIAkASQAgAQANAMQAKAJAFAOIADAQQABACgIAAIgOgBg');
    this.shape_15.setTransform(-16.3, 5.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AFtGyQgUgBgPgGIgXgNQgGAKgTAAQgRAAgPgGQgTgHgKgNQgWgegLgRQgXgmgKgmQgRg7gKg4QiZgtg4gRIhrghQhFgXgZgNQgogVgXgIIgeAHQgiAJgTAMIgnAWQgOALADAOQACANAOASIAdAhQARAWABAEQAFAJgHARQgIAUgaALQgbANgdgFQgagEgWgXQgPgPgIgTIgLAAQgMgBgHgIQgXgYgDgFQgQgbAFgoQAFgnAqghIApgbIgpgOQgugRghgVQhKgtgOgMQg9gzhGhnQAnADBVAAIB4gDQAigBApAGIAsAGQAIABAbgDIAmgDQBrACAlgCIAngDQAXgBAbAEQAeAFAKAFQAJAEgCAGQgCAGgMAOQgMAOgHAFQgKAIgoANQAzAZAxASQCRA0BHAIQB+ANBCAbQBbAlA0BDQAfApAUATQAWAUAUAIQAVAIAMgDQANgDAAgOQAAgSgDgUQgEgagIgLQgZgegUgZQglg2gHgnQgHgtAMgyQAMgvAZgdQAPgSAagXQAWgTAJgPQAJgNAPgPQAKgPgEggIAhAMQAmAOAZANQBDAhAUANQA/AoAeAwQAhAzAOBVQALBIgGA3QgHA5gXAzQgdA+gwAlQhAAxgSAKQgjAUgwABQgxACg2gTQgwgRgagXQgdgbgkgdQgrgjgKgBQgIAAglANIgjAOIBmCSQAQAXAMAYQANAaAAALQAAATgCAFQgFAMgRAAIgCAAg');
    this.shape_16.setTransform(-6.6, -1.9);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-97.3, -46.3, 181.5, 88.9);


  (lib.s005 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgXgQIAvAh');
    this.shape.setTransform(-9.2, 16.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AAkivQgfAbgLAaQgLAYgJAtQgLA1ACAtQAGB4AQAL');
    this.shape_1.setTransform(-4.5, 27.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AhQAFQCNAEAUgO');
    this.shape_2.setTransform(-54, 6.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('ABJiDQgKAMgSANQgMAIggAWQgPAMgeAVQgVATgDAXQgFAqABAKQACAiAYAv');
    this.shape_3.setTransform(-50.2, 16.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AAUgbIgMAWQgNAWgOAL');
    this.shape_4.setTransform(-44.8, -15.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('Ah0BHQAGAAAuAAQAbgBASABQAIgVAOgWQASgYAagWQAjgiAjgS');
    this.shape_5.setTransform(-56.2, -24.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AuNhAICCgZQATgEArgQQAogPAUgDQAZgEAvgGIAjgEIA8hEQAhggASgNQAPgNAFgFQAJgIANgBQAJAAAZACQASACAFgEQAIgGAMgCQANgCADAKQAHAVgBAeQgBAugZAmQAagEAngDQBNgFBCALQBRANBNAZQBSAbAuAeQAnAaA6AnQAfAWAlAbQAjAaAFADQAbARAXAEQAeAGAQgEQAUgFAJgWQAJgWAAgkQgBgggIgSQgSgegLgXQgUgrABgeQABgxAIgdQALgtAagTQA4gqAEgCQAlgYAygTQA3gUAagMQAWgLAOgMQAIgHAUgKQASgNAHgfQAOARAPAXQAfAuAKAeQAOArAEAQQAHAYAAARQAAAVgEAJQgEAKgRARQgaAagIANQgQAZADAdQAJA1AEAfQAIA2gHAgQgPA+gPAfQgcA7g0AeQhAAkgyAIQg6AKhQgTQhEgQhLgzQg+gvgHgBQgIgBgGAEQgGAHgFADQgcAUgXASQguAjgEAKQgCAEgHAMQgDAGAAAJQAABigCAyQgBAlgIAPQgHAPgUABQgOABgWADQgRABgEgFQgDgEgDADQgFAGgLgBQgTgBgRgMQgZgQgFgbQgGgeACgwQACgxAKghQAOgtATgpQgRgPgXgRQgtghgdgHQgggIg0ABQgpAAgcAEIgVAMQgYASgKAZQgNAjgDASQgEAZAHAPQAWApADAVQACALACAOQgBALgNAMQgOANgagCQgZgBgSgNQgYgRgSgZIgKAEQgMABgQgPQgUgSgRgkQgRglACgYQAEgsABgEQAHgaAZgXIgvgEQg4gIgpgOQgygShJgpQhNgohBgug');
    this.shape_6.setTransform(-10.4, -3.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(1, 1, 1).p('AgZADQAHgMANgHQAMgIALAHQAKAGgCAKQgCADgMAU');
    this.shape_7.setTransform(-65.6, -11.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#758594').s().p('AAxArQgTgDgQgMQgOgNgFgPQgDgFAAgFIgaAUQgZADgGgNQgCgEACgGIAXgZIAuADIAzgKQAIAbADAFQABADAAAYIgBAag');
    this.shape_8.setTransform(-47.3, -28.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('AgigNIBBgLQAEAJAAALQAAAUgOAJg');
    this.shape_9.setTransform(-97.9, -8.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('ABiChIgkgUQgXAHgXgTIgQgVQgjAZgVgIIgOgOQgKABgMgKIgJgKQgjAXgVACIgOgCQgfAZgKgmQgFgTABgYIAAgGIASgTIA0gmIBggzIBggoIA/grIAOgcIA2BEIAkBiIAFBBIggApQgJAJgYAlQgKAPgSAAQgMAAgPgGg');
    this.shape_10.setTransform(58.5, -35.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgoA8IgigXIgTglIAAg/IAcAaQAfAWANgPIACgNIAFAIQAMAJAcADQAhACATgLQAPgJABgLIgGBUIgPAXIgvAIg');
    this.shape_11.setTransform(-5.9, 39.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgcA3IgngxQAmASAbgIQASgHAIgQQAGgMgCgbIgEgZIAYAlIASAuIACAhIgRATIgkAIg');
    this.shape_12.setTransform(-48.4, 27.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AgEAXIglhCQAlAgARAAIAJAAIAUA0IgXADg');
    this.shape_13.setTransform(-59.5, 25.1);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('ABaBWIhagOIhcgjIh3g4IhHgzIA5gDIBJgFIBFgIQAkgDAcALQA6AYBGAjQAuAcAZAOQAuAZA5AAIgoAfIhIAIg');
    this.shape_14.setTransform(-71.2, -1.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#F1F1F2').s().p('AAyARIhTgkIhkgIIhBAWQAEgIAHgKQAOgUAQgKQAZgPAOgFQAWgIAjgBQBogEBTAlQAtAUATARQAJAJAAADIgXAYIgkA7g');
    this.shape_15.setTransform(-20.8, 10.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AAXHtQgTgBgSgMQgYgQgFgbQgHgeACgwQADgxAKghQAIgcALgdIAJgYQgPgQgWgSQgsgkgcgHQgggIg1ABQgpAAgaAEIgXAMQgXASgJAZQgOAjgDASQgEAZAHAPQAWApADAVIAEAZQAAALgOAMQgOANgagCQgYgBgTgNQgYgRgSgZIgKAEQgNABgPgPQgUgSgQgkQgSglACgYIAGgwQAGgaAZgXIgvgEQg4gIgpgOQgygShJgpQhNgohAguICBgZQATgEArgQQAogPAVgDQAYgEArgFIAngFIA8hEQAhggASgNIATgSQAKgIAOgBQAIAAAZACQASACAFgEQAIgGALgCQAOgCADAKQAIAVgBAeQgCAugYAmQAZgEAngDQBNgFBCALQBRANBNAZQBRAbAvAeQAnAaA6AnIBDAxIApAdQAbARAWAEQAeAGAQgEQAVgFAIgWQAKgWgBgkQgBgggIgSQgRgegLgXQgVgrABgeQACgxAHgdQAMgtAagTIA8gsQAlgYAygTQA3gUAagMQAWgLAOgMQAIgHAUgKQASgNAGgfQAOARAQAXQAfAuAJAeQAOArAEAQQAIAYgBARQAAAVgDAJQgFAKgRARQgZAagIANQgRAZAEAdQAJA1AEAfQAIA2gHAgQgPA+gPAfQgcA7g1AeQg/AkgyAIQg7AKhQgTQhDgQhLgzQg+gvgHgBQgIgBgHAEIgKAKIg0AmQgtAjgEAKIgJAQQgEAGAAAJQAABigBAyQgBAlgIAPQgHAPgVABIgkAEQgQABgEgFQgDgEgDADQgFAFgJAAIgCAAg');
    this.shape_16.setTransform(-10.4, -3.5);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-102.4, -53.9, 184, 100.8);


  (lib.s004 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgoAKQA1gBAcgS');
    this.shape.setTransform(-51.3, 23);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AAph2IgbAUQgaAYgJAVQgKAYgFAfQgFAdACATQACAWADALQAFARANAT');
    this.shape_1.setTransform(-46.5, 29.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AAIglIgIAcQgHAfABAR');
    this.shape_2.setTransform(-32.4, 40.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('ABqi1QgiATg0AwQhAA9gXAzQgmBRAAAqQAAARAFAPQAFAUAMAJ');
    this.shape_3.setTransform(-16.1, 31.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AAcAdQgTgbgkgd');
    this.shape_4.setTransform(-20.1, 20.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AAEgfQACAMgBAPQAAAagKAK');
    this.shape_5.setTransform(-43.1, -7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AgnBgQANgDAXACIASABQAEg1AFgiQADgPAGgpQAEglADgL');
    this.shape_6.setTransform(-58, -12.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('AIwnsQhmAjgrA7QgZAhgOA/QgHAiAEA/QAIBHABAhQADApgSAjQgVAegFALQgHAPgYAZQgWAVgQAKQgNAJgSABQgSACgOgHQgVgKgBAAQgMgMgkg6Qglg5gqgjQgegagigQQhQgkhhAMQgyAHgqAUQgHADg0AfQgMAIgOANQAAg2gNgmQgGgSgRgdQgUgjgXAHQgJACgGAGQgFAEgJANQgDAFgEATQgcgngKgGQgLgIgGAKQgIANgKA7QgGAqADAqQADAdAJAnQghABgaAMQgPAGgeANQgaAKgoAbQgVAOgcATQgUAMhIAeIBjAsQAjAQA0ATQBDAYAmAHQAkAHAaADIATAAQgYAqgHAVQgGASABAaQABAVATAQQANALASAFQALADANgBIAKgCIAOATQAPAVATAEQAGABAnAAQAZAAANgFQADgBAVgOQAHgEACgDQgCATAEAUQAFAcAAACQACATAXAHQARAFAVgDQAMgCAAgUQAOAXAWAAQAPAAALgKQALgKAEgQQALgRAOgaQAhhCA4hBQAWgZA6g4QAUgTAggPQAegOAHgHQAQgRAFgTQATAEAkAAQBHgBBTgRQBWgSA0gvQAXgUAthAQAxhHARhMQARhIgVgvQgJgWAJgWQAGgPAVgWQAKgMAcgWQAdgXATgUQAWgXAUgtQALgWAGgRQhygBgXADQgtAGhrAlgAj3GIQgFALgFAPIgEgPQgEgQgEgEQgHgEgIgIQgHgHgVgLQgRgKgFgIQgPgYAPgtQANgrAwgtQAVgTAYADQAPACAbAOQASAKAMAOQAFAIACAFQgOAOgfA6QgaAwgbA5g');
    this.shape_7.setTransform(-6.7, -2.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(1, 1, 1).p('AgXAMQAGgfAXACQANABAEAIQADAIgFAT');
    this.shape_8.setTransform(-63.6, 4.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('AgigDIA2gYIALAUQAJAUgMAPg');
    this.shape_9.setTransform(-87.7, 12.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AgFAyQgJgEgDgEIAAgWQgbAOgXgIQgMgEgGgHIAJgrIAMgZIAMAEIAhAmQABABAAAAQABABAAAAQABAAABgBQAAAAABgBIASghIAbgKIAYARQAJAMAJANQARAZgEAHQgJAPgEADQgMALgaAEQgJACgJAAQgOAAgIgFg');
    this.shape_10.setTransform(-52.6, -20.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AAVBoIgVgQQgOASgYgEIgVgHQgNAIgOgHIgKgIQgSAMgTgIIgQgJQgrAZgUgYQgKgNgBgRIASgcIAwgrIBfguIBogiIBkgMIBSABIgCAHIgyBdIg/A3QgZAWgYAeQgJALgMAAQgJAAgJgGg');
    this.shape_11.setTransform(55.7, -45.3);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('ABDBlIgQgOIgIAJIgIAEIgMAEQgFAAgegIIgOgVIgGgeIgBgjIggASQgHADghACIgigFIAPgDQAhgGAGgXQACgNgGghQgDgSgIgTIgHgQIBKA+IAQAKQACAZAYABIAZgFIAGgUQgCAKAOARQASATAfAAQAvAAAKgIIgmBHIglAZgAidAcQgBgBAGgCIANADIgNABIgFgBgAiLAcg');
    this.shape_12.setTransform(-29.7, 41.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AgbA5IjEhLIApgVQAigRATgHQAggLANgDQAYgEAXAEQAlAHBTAdIBPAaQA5ARAEAFQAGAIgUAOIg3ApIhJAKQhkgVgIgCg');
    this.shape_13.setTransform(-64.7, 16);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#F1F1F2').s().p('AApBYQABgCgXgaIgWgZIgwggIgngLIgqAcIgeAkQAEgvAOgUQAdguA7gUQAhgMAkACQAfABAbAJQAVAGAaAWQASAOAbAbIg9ArQg6A1gDAAIAAAAg');
    this.shape_14.setTransform(-21.8, 14.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#D2DADB').s().p('AjnIYQgXgHgCgTIgFgeQgEgUACgTQgCADgHAEIgYAPQgNAFgZAAQgnAAgGgBQgTgEgPgVIgOgTIgKACQgNABgLgDQgSgFgNgLQgTgQgBgVQgBgaAGgSQAHgVAYgqIgTAAQgagDgkgHQgmgHhDgYQg0gTgjgQIhjgsQBIgeAUgMIAxghQAogbAagKIAtgTQAagMAhgBQgJgngDgdQgDgqAGgqQAKg7AIgNQAGgKALAIQAKAGAcAnQAEgTADgFQAJgNAFgEQAGgGAJgCQAXgHAUAjQARAdAGASQANAmAAA2QAOgNAMgIIA7giQAqgUAygHQBhgMBQAkQAiAQAeAaQAqAjAlA5QAkA6AMAMIAWAKQAOAHASgCQASgBANgJQAQgKAWgVQAYgZAHgPQAFgLAVgeQASgjgDgpQgBghgIhHQgEg/AHgiQAOg/AZghQArg7BmgjQBrglAtgGQAXgDByABQgGARgLAWQgUAtgWAXQgTAUgdAXQgcAWgKAMQgVAWgGAPQgJAWAJAWQAVAvgRBIQgRBMgxBHQgtBAgXAUQg0AvhWASQhTARhHABQgkAAgTgEQgFATgQARQgHAHgeAOQggAPgUATQg6A4gWAZQg4BBghBCQgOAagLARQgEAQgLAKQgLAKgPAAQgWAAgOgXQAAAUgMACIgPABQgNAAgKgDgAkRCyQgwAtgNArQgPAtAPAYQAFAIARAKQAVALAHAHQAIAIAHAEQAEAEAEAQIAEAPQAFgPAFgLQBEiTAZgXQgBgHgEgJQgJgSgSgKQgbgOgPgCIgGgBQgVAAgSARgAnNgDIgFgGIAAAGIAFAAg');
    this.shape_15.setTransform(-6.7, -2.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AgBACIAAgEIADAFg');
    this.shape_16.setTransform(-53.2, -3.1);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-92.6, -57.3, 171.9, 109.9);


  (lib.s003 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AB2jIIgvAUQg0AZgTAXQgZAdgfA6QggA6gKAoQgRBEgBABQgFAiAMAt');
    this.shape.setTransform(-21.9, 29.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AgdgOQAqAOARAP');
    this.shape_1.setTransform(-25.1, 13.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AgBgnIgCAeQABAfAGAS');
    this.shape_2.setTransform(-37.7, 42.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AgeAMQAqgMATgL');
    this.shape_3.setTransform(-54.9, 21.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AAciKQgiAxgHAOQgQAgACApQAEA4AFAWQAJAlAaAa');
    this.shape_4.setTransform(-51.3, 29.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AgGAdQAOgegBgb');
    this.shape_5.setTransform(-49.2, -7.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AAUhSQgaBSgHAoIgGAr');
    this.shape_6.setTransform(-60.7, -11.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('AglACQAigEApAC');
    this.shape_7.setTransform(-63.3, -3.2);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(2, 1, 1).p('AJFoTQhxAYhMBaQgvA6gYBEQgMAggDBmQgCA1AABCQgBAZgMAPQgMARgSABQgVACgYgKQgcgMgVgVQgugzgIgIQgpgngzgbQg2gdhYADQhPACgxAYQgxAYg9BEQAAg3gFgqQgEgcgPgTQgJgLgXgRQgPgLgHAIQgCACgIATQgEAIgLAoQghgugOgIQgMgHgHAJQgGAHgHAYQgGASAAAkQgBArgBAVQgBAcALAlQg1AIg5AnQgLAHhVA9QhKA1glAWQAUAFAxAHQAZADBGAWQBQAZAfAGQBDAPA7gNQgaAsAAAfQAAA1ABAEQAEAoAXASQAaAVA5gDQALAJAKAFQAWAKAOACQALADAXAAQARAAAPgFQAIARAHAEQAGAFATAAIAJAMQALAMANAAQAQAAAJgGQALgGALgRQAKgQAXgvQAUgrARgnQAQgmAMgTQAPgZAXgaQAUgWAegQQA9gjALgHQAogaAWgiQALgRADgLQCBgBBUgjQA7gYA8g1QArgoAXhLQANguANhbQAHg2AqgyQAXgcApgrQAUgbAxgTQAYgKAUgEQgagPgvgLQhfgWhsAXgAkBGrIgigoQgXgcgGgjQgFgaADgnQABgWAIghQAZgOAQgNQAPgNAcgKQAagJAVgBQAPgBAMAKIAIALQgsAzghBbQgZBEgIA1g');
    this.shape_8.setTransform(-12.4, -3.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s('#758594').ss(1, 1, 1).p('AgVASQgDggAYgDQANgCAFAHQAFAIgBAS');
    this.shape_9.setTransform(-70.5, 4.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AAIAuQgPgFgGgKQgRASgggEQgQgDgMgGIAIgpIALggIASAFIArAvQABABALgcIANgfIALgGIA0ArIANAsQggAMgZAAQgOAAgMgEg');
    this.shape_10.setTransform(-58, -21.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#758594').s().p('AgjAOIA3gjQAGAEAFAHQAJAOgGASQhLgEAGgEg');
    this.shape_11.setTransform(-94.2, 14.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AACBjQgCgJAAgLQgkAHgNgNQgGgGABgIIgmAEQgrAPgXgOQgMgHgDgKQgoAXgWgCIgOgGIAUgfIAxg0IBohCIBzgZIBuAEIBlAfIgoAMIgnAbQgmAbgCACIhPBZQgBAGgFAHQgIANgQAGIgGABQgKAAgEgOg');
    this.shape_12.setTransform(48.3, -46.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('ABKBlIgiAAIgRgTIgPgBIgbgUIgmAAIgzgLQgDgCgTgRIAHABQAVAAAOgVQALgQACgYQACgRgGgdIgGgZIAUArIAoAwIAKgXQAAAPAQAQQAJAGAJAFIAIggQAVAoAwgCQASgBAQgIIANgHIgrBSQgVATgEAAIgBAAgAiOAcIAEgDIAIAGQgLAAgBgDg');
    this.shape_13.setTransform(-35.6, 40.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AAOAVIgdgHIgdgQIAAgIQANADAOAAQAaAAAGgNIAeApg');
    this.shape_14.setTransform(-54.1, 41.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#FFFFFF').s().p('AAIA9IiFgnIhggVQAJgIAhgSQAlgUAZgGIAtgNQAWgGAcAEQAaAEBEAPIBTATQAVAEAVAHQAVAHAEADQADADgMAQIgMASIgkAWIhPARg');
    this.shape_15.setTransform(-71.5, 16.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#F1F1F2').s().p('AiaAnIAKgWQAPgWARgOQAdgZAKgFQAWgPAdgDQBIgKAyAUQAaAKAYASQALAJAGAHIgPAMIhoA8IhMgtIgbABIhQAkIgfAVg');
    this.shape_16.setTransform(-26.8, 9.7);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#D2DADB').s().p('AjHIUIgJgMQgSAAgHgFQgGgEgIgRQgQAFgQAAQgXAAgMgDQgNgCgXgKQgKgFgKgJQg4ADgbgVQgXgSgEgoIgBg5QAAgfAagsQg7ANhDgPQgegGhRgZQhGgWgZgDQgxgHgUgFQAlgWBJg1IBhhEQA6gnA0gIQgMglACgcIABhAQABgkAGgSQAHgYAGgHQAHgJAMAHQAOAIAhAuQALgoADgIIAKgVQAIgIAPALQAXARAJALQAPATAEAcQAFAqAAA3QA9hEAwgYQAygYBPgCQBXgDA3AdQAzAbApAnQAIAIAuAzQAVAVAbAMQAZAKAUgCQATgBAMgRQAMgPABgZQAAhCACg1QADhmAMggQAYhEAvg6QBMhaBxgYQBrgXBfAWQAwALAaAPQgVAEgXAKQgyATgTAbQgqArgWAcQgqAygIA2QgMBbgOAuQgWBLgsAoQg7A1g7AYQhUAjiBABQgDALgLARQgWAigoAaIhIAqQgeAQgVAWQgWAagPAZQgMATgQAmQgRAngUArQgXAvgKAQQgLARgLAGQgKAGgPAAQgNAAgMgMgAi2CQQgVABgaAJQgcAKgPANQgQANgZAOQgIAhgCAWQgCAnAEAaQAHAjAXAcIAhAoQAIg1AZhEQAihbAsgzIgIgLQgLgJgOAAIgCAAg');
    this.shape_17.setTransform(-12.4, -3.3);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-99.1, -58.7, 173.5, 110.9);


  (lib.s002 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgWgJIAtAT');
    this.shape.setTransform(-27.9, 14.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('ACFjLQg4AcglAcQgwApgMALQgmAkgVAnQgtBVgHA8QgDAbAKAYIAQAc');
    this.shape_1.setTransform(-24.8, 27.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('AgCgaIAFA1');
    this.shape_2.setTransform(-45.7, 18.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AgeAOIA9gb');
    this.shape_3.setTransform(-56.9, 24);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('AANifQgLAYgUAfQgRAXgEARQgGAbABAeQABAiANAeQAZA7AyAs');
    this.shape_4.setTransform(-52.2, 33.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AAEgYIgHAx');
    this.shape_5.setTransform(-52.3, -4.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AARhWQgZB/gIAu');
    this.shape_6.setTransform(-63.9, -9.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('AAbgCQgRAAgKACQgGAAgUAE');
    this.shape_7.setTransform(-67.2, 0.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(2, 1, 1).p('AIXoZQg3ANgbANQgmATg5AyQg1AughBaQgUA5gJA+QgCAQgFBLQgDBBgHAeQgHAggOgJQgSgTgJgFQgHgGgJgLQgKgMgYgXQghgfgpgaQgrgcgkgPQgwgSgygBQhCgCg1AdQgtAZgpApQgXAXgmAqQAFgjAAgZQgBgggKgeQgVhDgiAAQgdAAgNBNIgDgHQgWg0gZAEQgVADgJAjQgHAaABAkQABAaAFAtQAEAYAHAeIgbAIQg0APgeAaQgSAQggAkQgiAfgpAfQgvAkghARQAmAHA+ADQAgACBnATQBiATATAAQAYAAASgIIANgJQgWBOAPBNQANBBAsATQAWAJARAAIAOgDIANgIQAPAMATAIQAMAGAWgEQATgDAIgHQAHgGgCgQQgBgPgHgNQgFgJgGgIQgMgOgJgNQgPgVgJgfQgKgggBgiQgBggAFgjQAFghAGgMQAIgNAVgQQAZgSAagGQAYgFAVAHIARAIIgOAUQgRAXgQATQgQATgPAkQgEAKgUA3QgJAaABAfQABARAEAVQABAHAIAJQAMALAHAOQATAjAmAAQAQAAAKgKQALgKAUgmQAPgdATg3QAXhHAEgKQAOgjAUgQQAUgRBEggQA6gbAhgmQARgTAFgOQA0AfAmgDQAXgCAlgXQAdgSA0gxQA1gvAdgnQAfgnATgsQAUguAPg/QAOg4ArgyQAcghAvgiQAcgVBQgQQApgHAigEQhihShqgLQg5gGhQATg');
    this.shape_8.setTransform(-13.1, -3.8);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s('#758594').ss(1, 1, 1).p('AgVATQgCghAXgDQANgCAFAHQAFAIgBAT');
    this.shape_9.setTransform(-73.1, 8.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AglAQIA2gnQAGAEAGAJQALAOgDAUg');
    this.shape_10.setTransform(-96.3, 20.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#758594').s().p('AheA1IAJg4IAVgbIAYADIAhAnIAZg9IATgEIAcATIAeBEQgRAUgvgIQgYgEgSgIQgKAQgmADIgSABIgRgBg');
    this.shape_11.setTransform(-61.4, -18.8);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AhMBhQgKgOgDgRQglAGgNgRQgGgJABgKQgWAEgHgIQgEgEABgFQgoARgZgFQgPgDgFgLQgDgFABgEIA2gvIBWgxIBWgWIBrgGIB3AlIBMA4IhwATIhGAeIg+A3QAYgKg9AeQgQAIgNAAQgTAAgMgQg');
    this.shape_12.setTransform(47.5, -47.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AA9BCQgigDgXgEQiGgagVgBIhCgFIAJgPQAZgKAXgQIAlgbIAggUQAOgGAXAAQAcAABhASQBpAUAqAQIgIARIgcAeIgcAPQgeAQgMACIgPABIgkgCg');
    this.shape_13.setTransform(-74, 20.1);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AgFA6QgSgFgKgLQgSgTAAgZIAAgGIgBADQgCAHgEABQgHAAgOgfIAAgfIAcASIACgLQAHAMAcALQATAJAaAAQAaAAARgJQAOgIgRAfQgIANgLAQIgKASQgMARgJABIgKABQgJAAgHgCg');
    this.shape_14.setTransform(-32.9, 42.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#FFFFFF').s().p('AgdAKIgJgIQAmgDAGgQQAEgLAPARQAIAJAGAIIAAANIghAEg');
    this.shape_15.setTransform(-52.9, 47.8);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#FFFFFF').s().p('AgYA3IgegbQAegEAPgpIAJgrIAXAkQAYAkAFAKQAGALgIALQgHAIgOAHQgHACgJAAQgNAAgYgGg');
    this.shape_16.setTransform(-43.5, 45.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#F1F1F2').s().p('AirAyQAAgFANgVQARgYAYgUQA1gwBJgHQA7gGA1APQAcAIAXAYIg/AiIhNAyQhDgVgBgFQgCgEgNgCIgOgBIg4AWIgrAng');
    this.shape_17.setTransform(-28.8, 10.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f('#D2DADB').s().p('Ak+IlQgTgIgPgMIgNAIIgOADQgRAAgWgJQgsgTgNhBQgPhNAWhOIgNAJQgSAIgYAAQgTAAhigTQhngTgggCQg+gDgmgHQAhgRAvgkQApgfAigfQAggkASgQQAegaA0gPIAbgIQgHgegEgYQgFgtgBgaQgBgkAHgaQAJgjAVgDQAZgEAWA0IADAHQANhNAdAAQAiAAAVBDQAKAeABAgQAAAZgFAjQAmgqAXgXQApgpAtgZQA1gdBCACQAyABAwASQAkAPArAcQApAaAhAfQAYAXAKAMQAJALAHAGQAJAFASATQAOAJAHggQAHgeADhBQAFhLACgQQAJg+AUg5QAhhaA1guQA5gyAmgTQAbgNA3gNQBQgTA5AGQBqALBiBSQgiAEgpAHQhQAQgcAVQgvAigcAhQgrAygOA4QgPA/gUAuQgTAsgfAnQgdAng1AvQg0AxgdASQglAXgXACQgmADg0gfQgFAOgRATQghAmg6AbQhEAggUARQgUAQgOAjIgbBRQgTA3gPAdQgUAmgLAKQgKAKgQAAQgmAAgTgjQgHgOgMgLQgIgJgBgHQgEgVgBgRQgBgfAJgaIAYhBQAPgkAQgTQAQgTARgXIAOgUIgRgIQgVgHgYAFQgaAGgZASQgVAQgIANQgGAMgFAhQgFAjABAgQABAiAKAgQAJAfAPAVQAJANAMAOQAGAIAFAJQAHANABAPQACAQgHAGQgIAHgTADIgQACQgLAAgHgEgAm1AUIAGgDIgHgBg');
    this.shape_18.setTransform(-13.1, -3.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f('#D2DADB').s().p('AgCAAIAFAAIgDABg');
    this.shape_19.setTransform(-56.7, -1.9);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-101.7, -60.1, 177.4, 112.7);


  (lib.s001 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#758594').ss(2, 1, 1).p('AgfhLQAuBcARA7');
    this.shape.setTransform(-54.1, 20.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('#758594').ss(2, 1, 1).p('AgVAMIArgX');
    this.shape_1.setTransform(-64.3, 24.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s('#758594').ss(2, 1, 1).p('Agwi/QALAmARBFQASBEAEAhQAdCUASAa');
    this.shape_2.setTransform(-59.2, 34.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('#758594').ss(2, 1, 1).p('AgZgIIAyAR');
    this.shape_3.setTransform(-33.8, 9.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s('#758594').ss(2, 1, 1).p('ACsiyQg/AVhCAsQgaARgmAXQgfAUgUAWQgqAsgHAKQgbAggIAXQgMAkgCAMQgEAWAIAOQANAVAkgF');
    this.shape_4.setTransform(-35.6, 21.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s('#758594').ss(2, 1, 1).p('AACgaQAAAagDAb');
    this.shape_5.setTransform(-59.2, -6.8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s('#758594').ss(2, 1, 1).p('AgmBpQAMgHAYgDIAVgCQAAglADgrQAGhUALgh');
    this.shape_6.setTransform(-73.4, -9.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s('#758594').ss(2, 1, 1).p('AI2pZQiKALhxBJQhtBGgtBlQgRAngTBsQgKA2gGAuQgdg0g3geQhCglhoABQhgABhXBIQgTAQhGBPIgGAHQAAg6gXguQgOgcgWgUQgUgSgHAFQgEADgFANQgFAMgKAjQgIgLgOgOQgLgMgQAEQgSAFgHAaQgGAXABAVQABAsAAANQgBAfAFAVQACAJAKAbQgrAUg9A6QgjAhhGBbQglAvgsA5QBGAIBqgMQBegKBMgVQAYgGAZgMQAMBdABALQAIA4AHAaQATBOAiAOQATAIANgCQAMANAOAFQANAFAQAAQAPAAAHgFQAJgGABgDQAEgHgBgXQgCgmgUhdQAJgFALgLQAPgPASgZQAcgmAxgzQAzg1AcgSQAogUAZgNQAtgYApgrQArgrARg4QAIgaAAgTQBpgnBLghQA1gXAvgzQAqguARgtQAWg7AqglQAbgXA7gfQBKgmBtADQA3ABAoAJQg+hNgvgfQhYg7h7AKgAlUCuQAPgUAggQQAfgRAegEQATgCAVAHQguAVgzAmQg3ApgZAiIgOgkQAcgaAPgUg');
    this.shape_7.setTransform(-16.5, -4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s('#758594').ss(1, 1, 1).p('AgUATQgFgeAXgGQAMgDAFAFQAHAGAAAS');
    this.shape_8.setTransform(-78.6, 10.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#758594').s().p('Ag7A1QgPgCgKgFIASg9IAagHIAfAaIAag5IATAIIAxA+QgUAcgpABQgUAAgPgFQgQANgVAAIgLgBg');
    this.shape_9.setTransform(-69.3, -19.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#758594').s().p('AgrAaIArg1QAIAAALAHQAVAOAEAig');
    this.shape_10.setTransform(-100.7, 28.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('Ah1BrQgHgHgFgIQgTAHgFgXQgCgLABgNQgjAHgEgdQgCgOAFgQQhFADALgkQAFgUATgUIAYgJIBWgXIBNgIIBTAHIBOAcIA0AjIBKBNIi1AFIhYAdQguAZgXAQQgGAFgHAAQgIAAgIgHg');
    this.shape_11.setTransform(46.4, -52.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgtBMQgVgUAAgIIAAgwIAshLIACAQQAFASANANQAPAQAYAFQAVAEAIgJIhOBYg');
    this.shape_12.setTransform(-46.2, 31.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AAlAwIhJgYIgRgNIgegmIAAgUQAGAIALAHQATANANgJIAAgTQAiAVAdACQAWAAAOgHQAMgGAAgIIAIBEIgOAZg');
    this.shape_13.setTransform(-53.8, 51);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('Ai6BOQA5hJAegWIApghQAVgPAUgCQB/gPA3AGIAWBNIgkAVIh2AiIifAWg');
    this.shape_14.setTransform(-80.7, 23.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#F1F1F2').s().p('Ai5A9QAKgPAPgTQAfgkAagRQApgeAcgMQAwgXBHAHQBFAHAXANIAJAMIh+BBIgxgPIgkgHIgnAJIgmAUIhHBDg');
    this.shape_15.setTransform(-37.6, 8.9);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#D2DADB').s().p('AlfJWQgOgFgMgNQgNACgTgIQgigOgThOQgHgagIg4IgNhoQgZAMgYAGQhMAVheAKQhqAMhGgIIBRhoQBGhbAjghQA9g6ArgUQgKgbgCgJQgFgVABgfIgBg5QgBgVAGgXQAHgaASgFQAQgEALAMQAOAOAIALQAKgjAFgMQAFgNAEgDQAHgFAUASQAWAUAOAcQAXAuAAA6IAGgHQBGhPATgQQBXhIBggBQBogBBCAlQA3AeAdA0QAGguAKg2QAThsARgnQAthlBthGQBxhJCKgLQB7gKBYA7QAvAfA+BNQgogJg3gBQhtgDhKAmQg7AfgbAXQgqAlgWA7QgRAtgqAuQgvAzg1AXQhLAhhpAnQAAATgIAaQgRA4grArQgpArgtAYIhBAhQgcASgzA1QgxAzgcAmQgSAZgPAPQgLALgJAFQAUBdACAmQABAXgEAHQgBADgJAGQgHAFgPAAQgQAAgNgFgAjoB1QgeAEgfARQggAQgPAUQgPAUgcAaIAOAkQAZgiA3gpQAzgmAugVQgRgFgOAAIgJAAg');
    this.shape_16.setTransform(-16.5, -4);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }]}).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-106.1, -65.4, 179.4, 122.7);


  // stage content:
  (lib.Foxanim_v1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { });

    // fox-anim
    this.s01 = new lib.s001();
    this.s01.setTransform(396.9, 71.3, 1, 1, 0, 0, 180);

    this.s02 = new lib.s002();
    this.s02.setTransform(400.5, 72.3, 1, 1, 0, 0, 180);
    this.s02._off = true;

    this.s03 = new lib.s003();
    this.s03.setTransform(401.4, 75.7, 1, 1, 0, 0, 180);
    this.s03._off = true;

    this.s04 = new lib.s004();
    this.s04.setTransform(405.4, 76.3, 1, 1, 0, 0, 180);
    this.s04._off = true;

    this.s05 = new lib.s005();
    this.s05.setTransform(407.5, 82, 1, 1, 0, 0, 180);
    this.s05._off = true;

    this.s06 = new lib.s006();
    this.s06.setTransform(416.4, 85.3, 1, 1, 0, 0, 180);
    this.s06._off = true;

    this.s07 = new lib.s007();
    this.s07.setTransform(403.8, 84.4, 1, 1, 0, 0, 180);
    this.s07._off = true;

    this.s08 = new lib.s008();
    this.s08.setTransform(413.2, 80.9, 1, 1, 0, 0, 180);
    this.s08._off = true;

    this.s09 = new lib.s009();
    this.s09.setTransform(409.7, 83.4, 1, 1, 0, 0, 180);
    this.s09._off = true;

    this._10 = new lib.s010();
    this._10.setTransform(401.7, 79.7, 1, 1, 0, 0, 180);
    this._10._off = true;

    this._11 = new lib.s011();
    this._11.setTransform(400.3, 74.4, 1, 1, 0, 0, 180);
    this._11._off = true;

    this._12 = new lib.s012();
    this._12.setTransform(401.8, 70, 1, 1, 0, 0, 180);
    this._12._off = true;

    this._13 = new lib.s013();
    this._13.setTransform(400.2, 69, 1, 1, 0, 0, 180);
    this._13._off = true;

    this.timeline.addTween(cjs.Tween.get(this.s01).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12));
    this.timeline.addTween(cjs.Tween.get(this.s02).wait(1).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(11));
    this.timeline.addTween(cjs.Tween.get(this.s03).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(10));
    this.timeline.addTween(cjs.Tween.get(this.s04).wait(3).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(9));
    this.timeline.addTween(cjs.Tween.get(this.s05).wait(4).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(8));
    this.timeline.addTween(cjs.Tween.get(this.s06).wait(5).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(7));
    this.timeline.addTween(cjs.Tween.get(this.s07).wait(6).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(6));
    this.timeline.addTween(cjs.Tween.get(this.s08).wait(7).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(5));
    this.timeline.addTween(cjs.Tween.get(this.s09).wait(8).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(4));
    this.timeline.addTween(cjs.Tween.get(this._10).wait(9).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(3));
    this.timeline.addTween(cjs.Tween.get(this._11).wait(10).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(2));
    this.timeline.addTween(cjs.Tween.get(this._12).wait(11).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
    this.timeline.addTween(cjs.Tween.get(this._13).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).wait(1));

    // shadow
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#697B8B').s().p('Aq9AqQkkgRAAgZQAAgYEkgRQEigSGbAAQGcAAEjASQEjARAAAYQAAAZkjARQkjASmcAAQmbAAkigSg');
    this.shape.setTransform(390.6, 129.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#697B8B').s().p('AqjAlQkZgQAAgVQAAgUEZgPQEYgQGLAAQGMAAEZAQQEYAPgBAUQABAVkYAQQkZAPmMAAQmLAAkYgPg');
    this.shape_1.setTransform(394.4, 129.9);
    this.shape_1._off = true;

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#697B8B').s().p('AqIAfQkOgNAAgSQAAgREOgNQENgNF7AAQF9AAENANQENANAAARQAAASkNANQkNANl9AAQl7AAkNgNg');
    this.shape_2.setTransform(398.1, 129.9);
    this.shape_2._off = true;

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#697B8B').s().p('ApuAZQkCgLgBgOQABgOECgLQECgKFsAAQFtAAEDAKQEBALAAAOQAAAOkBALQkDALltAAQlsAAkCgLg');
    this.shape_3.setTransform(401.8, 129.9);
    this.shape_3._off = true;

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#697B8B').s().p('AqZAbQkUgLAAgQQAAgPEUgMQEVgLGEAAQGGAAEUALQEUAMAAAPQAAAQkUALQkUANmGAAQmEAAkVgNg');
    this.shape_4.setTransform(403.4, 129.7);
    this.shape_4._off = true;

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#697B8B').s().p('ArEAdQklgMAAgRQAAgQElgNQEmgNGeAAQGfAAEmANQElANAAAQQAAARklAMQkmAOmfAAQmeAAkmgOg');
    this.shape_5.setTransform(405, 129.5);
    this.shape_5._off = true;

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#697B8B').s().p('AruAgQk3gOAAgSQAAgSE3gOQE3gNG3AAQG4AAE3ANQE3AOABASQgBASk3AOQk3AOm4AAQm3AAk3gOg');
    this.shape_6.setTransform(406.6, 129.3);
    this.shape_6._off = true;

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#697B8B').s().p('ArsAgQk3gOAAgSQAAgSE3gOQE2gNG2AAQG3AAE3ANQE3AOAAASQAAASk3AOQk3AOm3AAQm2AAk2gOg');
    this.shape_7.setTransform(404.5, 129.3);
    this.shape_7._off = true;

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#697B8B').s().p('ArrAgQk3gOAAgSQAAgSE3gOQE2gNG1AAQG2AAE2ANQE3AOAAASQAAASk3AOQk1AOm3AAQm1AAk2gOg');
    this.shape_8.setTransform(402.3, 129.3);
    this.shape_8._off = true;

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#697B8B').s().p('ArqAgQk1gOAAgSQAAgSE1gOQE2gNG0AAQG2AAE1ANQE2AOAAASQAAASk2AOQk1AOm2AAQm0AAk2gOg');
    this.shape_9.setTransform(400.2, 129.3);
    this.shape_9._off = true;

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#697B8B').s().p('ArpAgQk1gOAAgSQAAgSE1gOQE2gNGzAAQG1AAE1ANQE1AOgBASQABASk1AOQk1AOm1AAQmzAAk2gOg');
    this.shape_10.setTransform(398, 129.3);
    this.shape_10._off = true;

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#697B8B').s().p('ArnAgQk1gOAAgSQAAgSE1gOQE1gNGyAAQG0AAE0ANQE0AOAAASQAAASk0AOQk0AOm0AAQmyAAk1gOg');
    this.shape_11.setTransform(395.9, 129.3);
    this.shape_11._off = true;

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#697B8B').s().p('ArlAgQk0gOAAgSQAAgSE0gOQE0gNGxAAQGzAAE0ANQEzAOAAASQAAASkzAOQk0AOmzAAQmxAAk0gOg');
    this.shape_12.setTransform(393.7, 129.3);
    this.shape_12._off = true;

    this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12));
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(11));
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(10));
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(9));
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(8));
    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(7));
    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(6));
    this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(5));
    this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(4));
    this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(3));
    this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(2));
    this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(11).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
    this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).to({ _off: true }, 1).wait(12).to({ _off: false }, 0).wait(1));

    // dash-1
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('rgba(158, 193, 79, 0)').s().p('A4oAtQqMgTAAgaQAAgZKMgTQKOgTOaAAQObAAKNATQKNATAAAZQAAAaqNATQqNATubAAQuaAAqOgTg');
    this.shape_13.setTransform(575.1, 66.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('rgba(158, 193, 79, 0.169)').s().p('A4oAtQqMgTAAgaQAAgZKMgTQKOgTOaAAQObAAKNATQKNATAAAZQAAAaqNATQqNATubAAQuaAAqOgTg');
    this.shape_14.setTransform(545.7, 66.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('rgba(158, 193, 79, 0.333)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKOATAAAZQAAAaqOATQqNATubAAQuaAAqNgTg');
    this.shape_15.setTransform(516.4, 66.2);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('rgba(158, 193, 79, 0.502)').s().p('A4oAtQqMgTAAgaQAAgZKMgTQKOgTOaAAQObAAKNATQKOATgBAZQABAaqOATQqNATubAAQuaAAqOgTg');
    this.shape_16.setTransform(487.1, 66.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('rgba(158, 193, 79, 0.667)').s().p('A4oAtQqMgTAAgaQAAgZKMgTQKOgTOaAAQObAAKNATQKOATgBAZQABAaqOATQqNATubAAQuaAAqOgTg');
    this.shape_17.setTransform(457.7, 66.2);
    this.shape_17._off = true;

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f('rgba(158, 193, 79, 0.831)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKNATABAZQgBAaqNATQqNATubAAQuaAAqNgTg');
    this.shape_18.setTransform(428.4, 66.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f('#9EC14F').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKOATAAAZQAAAaqOATQqNATubAAQuaAAqNgTg');
    this.shape_19.setTransform(399.1, 66.2);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f('rgba(158, 193, 79, 0.831)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKOATAAAZQAAAaqOATQqNATubAAQuaAAqNgTg');
    this.shape_20.setTransform(369.7, 66.2);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f('rgba(158, 193, 79, 0.502)').s().p('A4nAtQqNgTgBgaQABgZKNgTQKNgTOaAAQObAAKNATQKNATABAZQgBAaqNATQqNATubAAQuaAAqNgTg');
    this.shape_21.setTransform(311.1, 66.2);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f('rgba(158, 193, 79, 0.333)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKNATABAZQgBAaqNATQqNATubAAQuaAAqNgTg');
    this.shape_22.setTransform(281.7, 66.2);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f('rgba(158, 193, 79, 0.169)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKOATAAAZQAAAaqOATQqNATubAAQuaAAqNgTg');
    this.shape_23.setTransform(252.4, 66.2);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f('rgba(158, 193, 79, 0)').s().p('A4nAtQqOgTAAgaQAAgZKOgTQKNgTOaAAQObAAKNATQKOATAAAZQAAAaqOATQqNATubAAQuaAAqNgTg');
    this.shape_24.setTransform(223, 66.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f('rgba(158, 193, 79, 0)').s().p('AwAAtQmpgTAAgaQAAgZGpgTQGpgTJXAAQJYAAGoATQGpATAAAZQAAAampATQmoATpYAAQpXAAmpgTg');
    this.shape_25.setTransform(653.1, 79.1);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f('rgba(158, 193, 79, 0.169)').s().p('AxcAtQnOgTgBgaQABgZHOgTQHPgTKNAAQKOAAHPATQHOATAAAZQAAAanOATQnPATqOAAQqNAAnPgTg');
    this.shape_26.setTransform(610.7, 79.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f('rgba(158, 193, 79, 0.333)').s().p('Ay4AtQn0gTAAgaQAAgZH0gTQH1gTLDAAQLDAAH1ATQH1ATABAZQgBAan1ATQn1ATrDAAQrDAAn1gTg');
    this.shape_27.setTransform(568.4, 79.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f('rgba(158, 193, 79, 0.502)').s().p('A0UAtQoagTAAgaQAAgZIagTQIcgTL4AAQL5AAIcATQIaATAAAZQAAAaoaATQocATr5AAQr4AAocgTg');
    this.shape_28.setTransform(526.1, 79.1);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f('rgba(158, 193, 79, 0.667)').s().p('A1vAtQpBgTAAgaQAAgZJBgTQJBgTMuAAQMvAAJBATQJBATAAAZQAAAapBATQpBATsvAAQsuAApBgTg');
    this.shape_29.setTransform(483.7, 79.1);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f('rgba(158, 193, 79, 0.831)').s().p('A3MAtQpmgTgBgaQABgZJmgTQJogTNkAAQNlAAJnATQJnATABAZQgBAapnATQpnATtlAAQtkAApogTg');
    this.shape_30.setTransform(441.4, 79.1);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f('rgba(158, 193, 79, 0.831)').s().p('A2oAtQpYgTgBgaQABgZJYgTQJZgTNPAAQNRAAJYATQJZATAAAZQAAAapZATQpYATtRAAQtPAApZgTg');
    this.shape_31.setTransform(351.7, 79.1);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f('rgba(158, 193, 79, 0.667)').s().p('A0oAtQolgTABgaQgBgZIlgTQIjgTMFAAQMGAAIkATQIjATAAAZQAAAaojATQokATsGAAQsFAAojgTg');
    this.shape_32.setTransform(304.4, 79.1);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f('rgba(158, 193, 79, 0.502)').s().p('AyqAtQnugTgBgaQABgZHugTQHvgTK7AAQK8AAHuATQHwATAAAZQAAAanwATQnuATq8AAQq7AAnvgTg');
    this.shape_33.setTransform(257.1, 79.1);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f('rgba(158, 193, 79, 0.333)').s().p('AwrAtQm5gTgBgaQABgZG5gTQG7gTJwAAQJxAAG6ATQG7ATAAAZQAAAam7ATQm6ATpxAAQpwAAm7gTg');
    this.shape_34.setTransform(209.7, 79.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f('rgba(158, 193, 79, 0.169)').s().p('AurAtQmGgTAAgaQAAgZGGgTQGGgTIlAAQInAAGEATQGHATAAAZQAAAamHATQmEATonAAQolAAmGgTg');
    this.shape_35.setTransform(162.4, 79.1);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics.f('rgba(158, 193, 79, 0)').s().p('AssAtQlRgTAAgaQAAgZFRgTQFSgTHaAAQHcAAFQATQFSATAAAZQAAAalSATQlQATncAAQnaAAlSgTg');
    this.shape_36.setTransform(115, 79.1);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [{ t: this.shape_13 }]}).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_19, p: { y: 66.2 } }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 10).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_19, p: { y: 79.1 } }] }, 1).to({ state: [{ t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_32 }] }, 1).to({ state: [{ t: this.shape_33 }] }, 1).to({ state: [{ t: this.shape_34 }] }, 1).to({ state: [{ t: this.shape_35 }] }, 1).to({ state: [{ t: this.shape_36 }] }, 1).to({ state: [{ t: this.shape_13 }] }, 9).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_19, p: { y: 66.2 } }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_13 }] }, 9).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_19, p: { y: 66.2 } }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [] }, 1).wait(1));
    this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(4).to({ _off: false }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4 }, 0).to({ _off: true }, 1).wait(38).to({ _off: false, x: 457.7 }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4 }, 0).to({ _off: true }, 1).wait(16).to({ _off: false, x: 457.7 }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4 }, 0).to({ _off: true }, 1).wait(5));

    // dash-2
    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f('rgba(185, 218, 112, 0)').s().p('A4oAjQqMgOAAgVQAAgTKMgQQKOgPOaAAQObAAKNAPQKNAQAAATQAAAVqNAOQqNAQubAAQuaAAqOgQg');
    this.shape_37.setTransform(575.1, 43.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f('rgba(185, 218, 112, 0.169)').s().p('A4oAjQqMgOAAgVQAAgTKMgQQKOgPOaAAQObAAKNAPQKNAQAAATQAAAVqNAOQqNAQubAAQuaAAqOgQg');
    this.shape_38.setTransform(545.7, 43.1);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f('rgba(185, 218, 112, 0.333)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKOAQAAATQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_39.setTransform(516.4, 43.1);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f('rgba(185, 218, 112, 0.502)').s().p('A4oAjQqMgOAAgVQAAgTKMgQQKOgPOaAAQObAAKNAPQKOAQgBATQABAVqOAOQqNAQubAAQuaAAqOgQg');
    this.shape_40.setTransform(487.1, 43.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f('rgba(185, 218, 112, 0.667)').s().p('A4oAjQqMgOAAgVQAAgTKMgQQKOgPOaAAQObAAKNAPQKOAQgBATQABAVqOAOQqNAQubAAQuaAAqOgQg');
    this.shape_41.setTransform(457.7, 43.1);
    this.shape_41._off = true;

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f('rgba(185, 218, 112, 0.831)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKNAQABATQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_42.setTransform(428.4, 43.1);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f('#B9DA70').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKOAQAAATQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_43.setTransform(399.1, 43.1);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f('rgba(185, 218, 112, 0.831)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKOAQAAATQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_44.setTransform(369.7, 43.1);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f('rgba(185, 218, 112, 0.502)').s().p('A4nAjQqNgOgBgVQABgTKNgQQKNgPOaAAQObAAKNAPQKNAQABATQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_45.setTransform(311.1, 43.1);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f('rgba(185, 218, 112, 0.333)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKNAQABATQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_46.setTransform(281.7, 43.1);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f('rgba(185, 218, 112, 0.169)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKOAQAAATQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_47.setTransform(252.4, 43.1);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f('rgba(185, 218, 112, 0)').s().p('A4nAjQqOgOAAgVQAAgTKOgQQKNgPOaAAQObAAKNAPQKOAQAAATQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_48.setTransform(223, 43.1);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f('rgba(185, 218, 112, 0.831)').s().p('A4nAkQqOgPAAgVQAAgUKOgPQKNgPOaAAQObAAKNAPQKOAPAAAUQAAAVqOAPQqNAPubAAQuaAAqNgPg');
    this.shape_49.setTransform(369.7, 75.2);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics.f('rgba(185, 218, 112, 0.502)').s().p('A4nAkQqNgPgBgVQABgUKNgPQKNgPOaAAQObAAKNAPQKNAPABAUQgBAVqNAPQqNAPubAAQuaAAqNgPg');
    this.shape_50.setTransform(311.1, 62.4);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics.f('rgba(185, 218, 112, 0)').s().p('A4oAjQqMgOAAgVQAAgUKMgQQKOgOOaAAQObAAKNAOQKNAQAAAUQAAAVqNAOQqNAQubAAQuaAAqOgQg');
    this.shape_51.setTransform(575.1, 36.7);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f('rgba(185, 218, 112, 0.169)').s().p('A4oAjQqMgOAAgVQAAgUKMgQQKOgOOaAAQObAAKNAOQKNAQAAAUQAAAVqNAOQqNAQubAAQuaAAqOgQg');
    this.shape_52.setTransform(545.7, 36.7);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f('rgba(185, 218, 112, 0.333)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKOAQAAAUQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_53.setTransform(516.4, 36.7);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f('rgba(185, 218, 112, 0.502)').s().p('A4oAjQqMgOAAgVQAAgUKMgQQKOgOOaAAQObAAKNAOQKOAQgBAUQABAVqOAOQqNAQubAAQuaAAqOgQg');
    this.shape_54.setTransform(487.1, 36.7);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f('rgba(185, 218, 112, 0.667)').s().p('A4oAjQqMgOAAgVQAAgUKMgQQKOgOOaAAQObAAKNAOQKOAQgBAUQABAVqOAOQqNAQubAAQuaAAqOgQg');
    this.shape_55.setTransform(457.7, 36.7);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f('rgba(185, 218, 112, 0.831)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKNAQABAUQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_56.setTransform(428.4, 36.7);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics.f('#B9DA70').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKOAQAAAUQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_57.setTransform(399.1, 36.7);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f('rgba(185, 218, 112, 0.831)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKOAQAAAUQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_58.setTransform(369.7, 36.7);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f('rgba(185, 218, 112, 0.502)').s().p('A4nAjQqNgOgBgVQABgUKNgQQKNgOOaAAQObAAKNAOQKNAQABAUQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_59.setTransform(311.1, 36.7);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f('rgba(185, 218, 112, 0.333)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKNAQABAUQgBAVqNAOQqNAQubAAQuaAAqNgQg');
    this.shape_60.setTransform(281.7, 36.7);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f('rgba(185, 218, 112, 0.169)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKOAQAAAUQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_61.setTransform(252.4, 36.7);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f('rgba(185, 218, 112, 0)').s().p('A4nAjQqOgOAAgVQAAgUKOgQQKNgOOaAAQObAAKNAOQKOAQAAAUQAAAVqOAOQqNAQubAAQuaAAqNgQg');
    this.shape_62.setTransform(223, 36.7);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: []}).to({ state: [{ t: this.shape_37, p: { y: 43.1 } }] }, 4).to({ state: [{ t: this.shape_38, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_39, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_40, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_42, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_43, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_44, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_45, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_46, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_47, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_48, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_37, p: { y: 49.5 } }] }, 14).to({ state: [{ t: this.shape_38, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_39, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_40, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_42, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_43, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_44, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_45, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_46, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_47, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_48, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_37, p: { y: 81.7 } }] }, 5).to({ state: [{ t: this.shape_38, p: { y: 81.7 } }] }, 1).to({ state: [{ t: this.shape_39, p: { y: 81.7 } }] }, 1).to({ state: [{ t: this.shape_40, p: { y: 81.7 } }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_42, p: { y: 81.7 } }] }, 1).to({ state: [{ t: this.shape_43, p: { y: 81.7 } }] }, 1).to({ state: [{ t: this.shape_49 }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_50 }] }, 1).to({ state: [{ t: this.shape_46, p: { y: 55.9 } }] }, 1).to({ state: [{ t: this.shape_47, p: { y: 49.5 } }] }, 1).to({ state: [{ t: this.shape_48, p: { y: 43.1 } }] }, 1).to({ state: [{ t: this.shape_51 }] }, 3).to({ state: [{ t: this.shape_52 }] }, 1).to({ state: [{ t: this.shape_53 }] }, 1).to({ state: [{ t: this.shape_54 }] }, 1).to({ state: [{ t: this.shape_55, p: { x: 457.7 } }] }, 1).to({ state: [{ t: this.shape_56 }] }, 1).to({ state: [{ t: this.shape_57 }] }, 1).to({ state: [{ t: this.shape_58 }] }, 1).to({ state: [{ t: this.shape_55, p: { x: 340.4 } }] }, 1).to({ state: [{ t: this.shape_59 }] }, 1).to({ state: [{ t: this.shape_60 }] }, 1).to({ state: [{ t: this.shape_61 }] }, 1).to({ state: [{ t: this.shape_62 }] }, 1).to({ state: [] }, 1).wait(3));
    this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(8).to({ _off: false }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4 }, 0).to({ _off: true }, 1).wait(21).to({ _off: false, x: 457.7, y: 49.5 }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4 }, 0).to({ _off: true }, 1).wait(12).to({ _off: false, x: 457.7, y: 81.7 }, 0).to({ _off: true }, 1).wait(3).to({ _off: false, x: 340.4, y: 68.8 }, 0).to({ _off: true }, 1).wait(22));

    // dash-3
    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f('rgba(166, 201, 89, 0)').s().p('A4oAdQqMgNAAgQQAAgQKMgNQKOgLOaAAQObAAKNALQKNANAAAQQAAAQqNANQqNAMubAAQuaAAqOgMg');
    this.shape_63.setTransform(575.1, 94.7);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f('rgba(166, 201, 89, 0.169)').s().p('A4oAdQqMgMAAgRQAAgQKMgNQKOgMOaAAQObAAKNAMQKNANAAAQQAAARqNAMQqNAMubAAQuaAAqOgMg');
    this.shape_64.setTransform(545.7, 94.7);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f('rgba(166, 201, 89, 0.333)').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgLOaAAQObAAKNALQKOANAAAQQAAAQqOANQqNAMubAAQuaAAqNgMg');
    this.shape_65.setTransform(516.4, 94.6);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f('rgba(166, 201, 89, 0.502)').s().p('A4oAdQqMgNAAgQQAAgQKMgNQKOgLOaAAQObAAKNALQKOANgBAQQABAQqOANQqNAMubAAQuaAAqOgMg');
    this.shape_66.setTransform(487.1, 94.6);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f('rgba(166, 201, 89, 0.667)').s().p('A4oAdQqMgNAAgQQAAgQKMgMQKOgNOaAAQObAAKNANQKOAMgBAQQABAQqOANQqNANubAAQuaAAqOgNg');
    this.shape_67.setTransform(457.7, 94.6);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f('rgba(166, 201, 89, 0.831)').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgLOaAAQObAAKNALQKNANABAQQgBAQqNANQqNAMubAAQuaAAqNgMg');
    this.shape_68.setTransform(428.4, 94.6);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f('#A6C959').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgMOaABQObgBKNAMQKOANAAAQQAAAQqOANQqNAMubAAQuaAAqNgMg');
    this.shape_69.setTransform(399.1, 94.6);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f('rgba(166, 201, 89, 0.831)').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgLOaAAQObAAKNALQKOANAAAQQAAAQqOANQqNAMubAAQuaAAqNgMg');
    this.shape_70.setTransform(369.7, 94.6);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f('rgba(166, 201, 89, 0.667)').s().p('A4oAcQqMgMAAgQQAAgQKMgMQKOgNOaAAQObAAKNANQKOAMgBAQQABAQqOAMQqNANubABQuagBqOgNg');
    this.shape_71.setTransform(340.4, 94.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f('rgba(166, 201, 89, 0.502)').s().p('A4nAdQqNgNgBgQQABgQKNgNQKNgLOaAAQObAAKNALQKNANABAQQgBAQqNANQqNAMubAAQuaAAqNgMg');
    this.shape_72.setTransform(311.1, 94.6);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f('rgba(166, 201, 89, 0.333)').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgLOaAAQObAAKNALQKNANABAQQgBAQqNANQqNAMubAAQuaAAqNgMg');
    this.shape_73.setTransform(281.7, 94.6);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f('rgba(166, 201, 89, 0.169)').s().p('A4nAdQqOgNAAgQQAAgRKOgMQKNgMOaAAQObAAKNAMQKOAMAAARQAAAQqOANQqNAMubAAQuaAAqNgMg');
    this.shape_74.setTransform(252.4, 94.7);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics.f('rgba(166, 201, 89, 0)').s().p('A4nAcQqOgMAAgQQAAgRKOgMQKNgLOaAAQObAAKNALQKOAMAAARQAAAQqOAMQqNANubAAQuaAAqNgNg');
    this.shape_75.setTransform(223, 94.7);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics.f('rgba(166, 201, 89, 0.169)').s().p('A4nAdQqOgMAAgRQAAgQKOgNQKNgMOaAAQObAAKNAMQKOANAAAQQAAARqOAMQqNAMubAAQuaAAqNgMg');
    this.shape_76.setTransform(252.4, 94.7);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics.f('rgba(166, 201, 89, 0)').s().p('A4nAdQqOgNAAgQQAAgQKOgNQKNgLOaAAQObAAKNALQKOANAAAQQAAAQqOANQqNAMubAAQuaAAqNgMg');
    this.shape_77.setTransform(223, 94.7);

    this.timeline.addTween(cjs.Tween.get({ }).to({ state: [] }).to({ state: [{ t: this.shape_63 }] }, 17).to({ state: [{ t: this.shape_64 }] }, 1).to({ state: [{ t: this.shape_65 }] }, 1).to({ state: [{ t: this.shape_66 }] }, 1).to({ state: [{ t: this.shape_67, p: { x: 457.7 } }] }, 1).to({ state: [{ t: this.shape_68 }] }, 1).to({ state: [{ t: this.shape_69 }] }, 1).to({ state: [{ t: this.shape_70 }] }, 1).to({ state: [{ t: this.shape_71 }] }, 1).to({ state: [{ t: this.shape_72 }] }, 1).to({ state: [{ t: this.shape_73 }] }, 1).to({ state: [{ t: this.shape_74 }] }, 1).to({ state: [{ t: this.shape_75 }] }, 1).to({ state: [{ t: this.shape_63 }] }, 23).to({ state: [{ t: this.shape_64 }] }, 1).to({ state: [{ t: this.shape_65 }] }, 1).to({ state: [{ t: this.shape_66 }] }, 1).to({ state: [{ t: this.shape_67, p: { x: 457.7 } }] }, 1).to({ state: [{ t: this.shape_68 }] }, 1).to({ state: [{ t: this.shape_69 }] }, 1).to({ state: [{ t: this.shape_70 }] }, 1).to({ state: [{ t: this.shape_67, p: { x: 340.4 } }] }, 1).to({ state: [{ t: this.shape_72 }] }, 1).to({ state: [{ t: this.shape_73 }] }, 1).to({ state: [{ t: this.shape_76 }] }, 1).to({ state: [{ t: this.shape_77 }] }, 1).to({ state: [] }, 1).wait(13));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(691.2, 75.9, 506.9, 130);
})(lib = lib || { }, images = images || { }, createjs = createjs || { }, ss = ss || { });
