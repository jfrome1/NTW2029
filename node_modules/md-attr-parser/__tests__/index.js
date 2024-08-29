'use strict';

import test from 'ava';
import parse from '../src';

const errorHappened = {prop: {}, eaten: ''};

test('line-input', t => {
  const toParse = '{key=value}';
  const r = parse(toParse);
  t.is(r.prop.key, 'value');
  t.is(r.eaten, toParse);
});

test('curvy-brace optional', t => {
  const toParse = 'key=value';
  const r = parse(toParse);
  t.is(r.prop.key, 'value');
  t.is(r.eaten, toParse);
});

test('simple', t => {
  const toParse = 'key';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.is('key' in r.prop, true);
  t.is(r.prop.key, undefined);
});

test('simple-class', t => {
  const toParse = '.class';
  const r = parse(toParse);
  t.is(r.eaten, '.class');
  t.deepEqual(r.prop.class, ['class']);
  t.is(r.prop.key, undefined);
});

test('simple-id', t => {
  const toParse = '{#id}';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.is(r.prop.id, 'id');
  t.is(r.prop.key, undefined);
});

test('id and class', t => {
  const toParse = '{#id .class}';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.is(r.prop.id, 'id');
  t.deepEqual(r.prop.class, ['class']);
});

test('classes', t => {
  const toParse = '{.class2 .class .class3}';
  const r = parse(toParse);
  const expected = ['class', 'class2', 'class3'];
  t.is(r.eaten, toParse);
  r.prop.class.forEach(elem => t.is(expected.indexOf(elem) > -1, true));
  expected.forEach(elem => t.is(r.prop.class.indexOf(elem) > -1, true));
});

test('prop with class', t => {
  const toParse = '{class=another .class}';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.deepEqual(r.prop.class, ['another', 'class']);
});

test('id and id key', t => {
  const toParse = '#id id=falseId';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.is(r.prop.id, 'id');
});

test('id and id key inverted', t => {
  const toParse = 'id=falseId #id';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.is(r.prop.id, 'id');
});

test('class with key class', t => {
  const toParse = '{class=falseClass .class}';
  const r = parse(toParse);
  const expected = ['falseClass', 'class'];
  t.is(r.eaten, toParse);
  r.prop.class.forEach(elem => t.is(expected.indexOf(elem) > -1, true));
  expected.forEach(elem => t.is(r.prop.class.indexOf(elem) > -1, true));
});

test('classes with key class', t => {
  const toParse = '{class=falseClass .class .class2 class=falseClass2}';
  const r = parse(toParse);
  const expected = ['falseClass', 'class', 'class2', 'falseClass2'];
  t.is(r.eaten, toParse);
  r.prop.class.forEach(elem => t.is(expected.indexOf(elem) > -1, true));
  expected.forEach(elem => t.is(r.prop.class.indexOf(elem) > -1, true));
});

test('prop with class inverted', t => {
  const toParse = '{.class class=another}';
  const r = parse(toParse);
  const expected = ['another', 'class'];
  t.is(r.eaten, toParse);
  r.prop.class.forEach(elem => t.is(expected.indexOf(elem) > -1, true));
  expected.forEach(elem => t.is(r.prop.class.indexOf(elem) > -1, true));
});

test('classes with key class2', t => {
  const toParse = 'class=falseClass .class .class2 class=falseClass2 .class3';
  const r = parse(toParse);
  const expected = ['falseClass', 'class', 'class2', 'falseClass2', 'class3'];
  t.is(r.eaten, toParse);
  r.prop.class.forEach(elem => t.is(expected.indexOf(elem) > -1, true));
  expected.forEach(elem => t.is(r.prop.class.indexOf(elem) > -1, true));
});

test('id and id key with class', t => {
  const toParse = '{id=id #falseId .class}';
  const r = parse(toParse);
  t.is(r.prop.id, 'falseId');
  t.deepEqual(r.prop.class, ['class']);
  t.is(r.eaten, toParse);
});

test('multiple id test 1', t => {
  const toParse = '{id=id #falseId #falseId2}';
  const r = parse(toParse);
  t.is(r.prop.id, 'falseId');
  t.is(r.eaten, toParse);
});

test('multiple id test 2', t => {
  const toParse = '{#falseId id=id #falseId2}';
  const r = parse(toParse);
  t.is(r.prop.id, 'falseId');
  t.is(r.eaten, toParse);
});

test('multiple id test 3', t => {
  const toParse = '{id=id id=falseId}';
  const r = parse(toParse);
  t.is(r.prop.id, 'id');
  t.is(r.eaten, toParse);
});

test('multiple id test 4', t => {
  const toParse = '{id id=false #falseId2}';
  const r = parse(toParse);
  t.is(r.prop.id, 'falseId2');
  t.is(r.eaten, toParse);
});

test('multiple id', t => {
  const toParse = '#id #badId #again';
  const r = parse(toParse);
  t.is(r.prop.id, 'id');
  t.is(r.eaten, toParse);
});

test('empty', t => {
  const toParse = '';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('empty brace', t => {
  const toParse = '{}';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('only spaces', t => {
  const toParse = '    ';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('only one space', t => {
  const toParse = ' ';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('only spaces with tab', t => {
  const toParse = ' 		 ';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('braces with spaces', t => {
  const toParse = '{    }';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('braces with spaces2', t => {
  const toParse = '{ 		 	 }';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('braces in braces', t => {
  const toParse = '{{}}';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.deepEqual(r, errorHappened);
  t.is(r.eaten, ''); // It's an error
});

test('spaces then braces', t => {
  const toParse = '   {}';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, toParse);
});

test('braces then spaces', t => {
  const toParse = '{} 	 ';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, '{}');
});

test('newline in brace', t => {
  const toParse = '{#id \n.class}';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, ''); // It's an error
});

test('non latin value', t => {
  const toParse = '{#id .class key=🕶 neko="🐱"}';
  const r = parse(toParse);
  t.is(r.prop.id, 'id');
  t.is(r.prop.key, '🕶');
  t.is(r.prop.neko, '🐱');
  t.is(r.eaten, toParse);
});

test('non latin key and value', t => {
  const toParse = '{ねこ=🐈}';
  const r = parse(toParse);
  t.is(r.prop.ねこ, '🐈');
  t.is(r.eaten, toParse);
});

test('value in quote', t => {
  const toParse = 'key="value"';
  const r = parse(toParse);
  t.is(r.prop.key, 'value');
  t.is(r.eaten, toParse);
});

test('value in single quote', t => {
  const toParse = 'key=\'value\'';
  const r = parse(toParse);
  t.is(r.prop.key, 'value');
  t.is(r.eaten, toParse);
});

test('value in  with escaped quotes', t => {
  const toParse = 'key="\\"value\\""';
  const r = parse(toParse);
  t.is(r.prop.key, '"value"');
  t.is(r.eaten, toParse);
});

test('multiple value to same key', t => {
  const toParse = '{key=value key=value2 key=value3}';
  const r = parse(toParse);
  t.is(r.prop.key, 'value');
  t.is(r.eaten, toParse);
});

test('id key', t => {
  const toParse = '{id=id}';
  const r = parse(toParse);
  t.is(r.prop.id, 'id');
  t.is(r.eaten, toParse);
});

test('class key', t => {
  const toParse = 'class=class';
  const r = parse(toParse);
  t.deepEqual(r.prop.class, ['class']);
  t.is(r.eaten, toParse);
});

test('newline stop', t => {
  const toParse = 'hello=yeah  \nnotParsed=stop';
  const r = parse(toParse);
  t.is(r.prop.hello, 'yeah');
  t.not(r.prop.notParsed, 'stop');
  t.is(r.eaten, toParse.split('\n')[0]);
});

test('carriage return stop', t => {
  const toParse = 'hello="yeah"  \rnotParsed=stop';
  const r = parse(toParse);
  t.is(r.prop.hello, 'yeah');
  t.not(r.prop.notParsed, 'stop');
  t.is(r.eaten, toParse.split('\r')[0]);
});

test('class with spaces', t => {
  const toParse = '{.class="hello !"}';
  const r = parse(toParse);
  t.is(r.prop.class, undefined);
  t.is(r.eaten, '');
});

test('class with spaces2', t => {
  const toParse = '{.class=\'Hello ! }';
  const r = parse(toParse);
  t.is(r.prop.class, undefined);
  t.is(r.eaten, '');
});

test('class with spaces3', t => {
  const toParse = '{  .\'Hello !\'}';
  const r = parse(toParse);
  t.deepEqual(r.prop.class, ['\'Hello']);
  t.is('!\'' in r.prop, true);
  t.is(r.eaten, toParse);
});

test('opening brace in value', t => {
  const toParse = 'key=va{ue';
  const r = parse(toParse);
  t.is(r.prop.key, 'va');
  t.is(r.eaten, 'key=va');
});

test('normal case', t => {
  const toParse = 'unicorn="unicorn" type="text" editable .answer #first-answer';
  const r = parse(toParse);
  t.is(r.prop.unicorn, 'unicorn');
  t.is(r.prop.type, 'text');
  t.is(r.prop.editable, undefined);
  t.is('editable' in r.prop, true);
  t.is(r.prop.id, 'first-answer');
  t.deepEqual(r.prop.class, ['answer']);
  t.is(r.eaten, toParse);
});

test('normal case2', t => {
  const toParse = '{kind=textarea display #second-answer .nyan-cat}';
  const r = parse(toParse);
  t.is(r.prop.kind, 'textarea');
  t.is(r.prop.display, undefined);
  t.is(r.prop.id, 'second-answer');
  t.deepEqual(r.prop.class, ['nyan-cat']);
  t.is(r.eaten, toParse);
});

test('normal case not pretty-formated', t => {
  const toParse = '{ kind= textarea display= #second-answer  }';
  const r = parse(toParse);
  t.is(r.prop.kind, '');
  t.is(r.prop.textarea, undefined);
  t.is(r.prop.display, '');
  t.is(r.prop.id, 'second-answer');
  t.is(r.eaten, toParse);
});

test('normal case not pretty-formated2', t => {
  const toParse = '  kind=? textarea display=none #second-answer ';
  const r = parse(toParse);
  t.is(r.prop.kind, '?');
  t.is(r.prop.textarea, undefined);
  t.is(r.prop.display, 'none');
  t.is(r.prop.id, 'second-answer');
  t.is(r.eaten, toParse);
});

test('double class', t => {
  const toParse = '{.class .class}';
  const r = parse(toParse);
  t.deepEqual(r.prop.class, ['class']);
  t.is(r.eaten, toParse);
});

test('class look\'s like a key', t => {
  const toParse = '{.class=key}';
  const r = parse(toParse);
  t.is(r.prop.class, undefined);
  t.is(r.eaten, '');
});

test('id look\'s like a key', t => {
  const toParse = '{#class=key}';
  const r = parse(toParse);
  t.is(r.prop.id, undefined);
  t.is(r.eaten, '');
});

test('key\'s value looks like a key', t => {
  const toParse = '{key=key=value}';
  const r = parse(toParse);
  t.is(r.prop.key, undefined);
  t.is(r.eaten, '');
});

test('key\'s value looks like a key2', t => {
  const toParse = 'key=key=value';
  const r = parse(toParse);
  t.is(r.prop.key, 'key');
  t.is(r.eaten, 'key=key');
});

test('long too parse', t => {
  const toParse = '#Lorem-ipsum dolor sit ame=consectetur adipiscing elit .Sed ac placerat ex .Donec molestie .consequat dux=sodales laoreet justo vulputate .bibendum .Nunc sed ante .loborti qsd=venenatis velit ir=interdum lacus .Proin sed dapibus magna .Suspendisse .id faucibus ligula .Praesent fringilla auctor metus eget egestas .Cras at convallis justo .Duis mollis purus eras=ut maximus felis dignissim vel .Nulla fringille=ex id pellentesque .feugia sid=purus elit egestas odi=sagittis fringilla purus nulla in ligula .Etiam vitae .varius turpis .Sed scelerisque .non augue .vel dignissim .Class aptent taciti sociosqu ad litora torquent per conubia nostro=per inceptos himenaeos';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.snapshot(r);
});

test('very long too parse', t => {
  const toParse = 'In lobortis sapien in libero dapibu=eget aliquam sapien congue ..Fusce .et eros non est placerat dignissim .In et risus sed risus posuere .dignissim sed vel risus .Curabitur sodales dui eu ex ornari=sit amet cursus tellus lobortis .Mauris sit amet aliquam purus=in pulvinar velit .Proin sit amet dignissim libero .Praesent imperdiet eros ut libero ultriciet=eget congue .ante .faucibus .Donec imperdiet mi ut neque .finibus pharetra .Ut vel semper leo .Sed pulvina=lorem vitae .convallis viverro=purus nulla dignissim dul=in placerat lectus enim fermentum odio .Ut et nisi id eros fermentum tristique ..Pellentesque .venenatis faucibus magna hendrerit fermentum .Mauris euismod finibus lorem ac pellentesque ..Suspendisse .facilisis ex a lorem molestir=ac rhoncus massa porta .Fusce .suscipit sapien dus=vitae .imperdiet velit tempus nec .Aenean ut est ac ligula molestie .bibendum  .Quisque .vitae .placerat elit .Phasellus vel bibendum tellu=at ultricies felis .Mauris viverra urna in nibh volutpat congue ..Maecenas rhoncus commodo nisi id tristique ..Praesent id nisl at lacus elementum tempor .Quisque .eleifend nunc dolor .Nulla non sodales lacus=ut mattis nisi .Nullam nibh risut=auctor ut arcu eleifenlid=iaculis vulputate .dolor .Phasellus leo nunblu=malesuada vitae .orci i=pellentesque .rutrum libero .Etiam quam velib=accumsan sit amet gravida velo=finibus et ligula  .Vivamus justo lacunaire=placerat in felis dapibu=vestibulum fermentum ex .Aenean ultricies felis luctus=condimentum lacus interdu97=placerat lacus .In libero nis=aliquet molestie .lectus sit ame=pulvinar mollis purus .Sed fringilla dolor non eros fermentum vulputate ..Donec a porta tellus .Mauris interdum egestas cursus .Quisque .luctus risus eget massa euismod euismod .Mauris in tellus ut neque .vehicula posuere ..Integer vitae .vehicula mauris .Fusce .non libero condimentus=efficitur massa quid=fringilla tellus .Nunc a arcu lacinia sem venenatis finibus .In egestas ex niso=nec tempus metus ornare .vel  .Class aptent taciti sociosqu ad litora torquent per conubia nostre=per inceptos himenaeos .Fusce .sit amet vehicula mi .Sed nec rutrum tortor .Donec pretium mi nibu=ut sodales nibh volutpat sed .Vivamus finibus sollicitudin finibus .Quisque .euismo qsd=dolor porta feugiat ultricie dis=dui nunc pretium elikopter=vel suscipit dui nibh sit amet tortor .In suscipit condimentum nibus=quis condimentum lacus consequat in .Phasellus quis purus et ligula elementum fringilla id ut mi .Nullam ornare .magna ut arcu accumsa=non commodo nisi convallis .Sed eget consectetur orci .Sed vestibulum elit non erat sollicitudi=non maximus ipsum lobortis .Cras sed nisl iaculis massa eleifend accumsan .Suspendisse .nec ipsum elit .Quisque .at turpis erat .In lobortis sapien in libero dapibu=eget aliquam sapien congue ..Fusce .et eros non est placerat dignissim .In et risus sed risus posuere .dignissim sed vel risus .Curabitur sodales dui eu ex ornar=sit amet cursus tellus lobortis .Mauris sit amet aliquam purus=in pulvinar velit .Proin sit amet dignissim libero .Praesent imperdiet eros ut libero ultricien=eget congue .ante .faucibus .Donec imperdiet mi ut neque .finibus pharetra .Ut vel semper leo .Sed pulvina=lorem vitae .convallis viverr=purus nulla dignissim dus=in placerat lectus enim fermentum odio .Ut et nisi id eros fermentum tristique ..Pellentesque .venenatis faucibus magna hendrerit fermentum .Mauris euismod finibus #lorem ac pellentesque ..Suspendisse .facilisis ex a lorem molesti=ac rhoncus massa porta .Fusce .suscipit sapien du=vitae .imperdiet velit tempus nec .Aenean ut est ac ligula molestie .bibendum  .Quisque .vitae .placerat elit .Phasellus vel bibendum tellus=at ultricies felis .Mauris viverra urna in nibh volutpat congue ..Maecenas rhoncus commodo nisi id tristique ..Praesent id nisl at lacus elementum tempor .Quisque .eleifend nunc dolor .Nulla non sodales lacu=ut mattis nisi .Nullam nibh risut=auctor ut arcu eleifenlid=iaculis vulputate .dolor .Phasellus leo nunblum=malesuada vitae .orci i=pellentesque .rutrum libero .Etiam quam veli=accumsan sit amet gravida ve=finibus et ligula  .Vivamus justo lacu=placerat in felis dapibuqsdf=vestibulum fermentum ex .Aenean ultricies felis luctuqsdf=condimentum lacus interduaez=placerat lacus .In libero nisdf=aliquet molestie .lectus sit ameqsdf=pulvinar mollis purus .Sed fringilla dolor non eros fermentum vulputate ..Donec a porta tellus .Mauris interdum egestas cursus .Quisque .luctus risus eget massa euismod euismod .Mauris in tellus ut neque .vehicula posuere ..Integer vitae .vehicula mauris .Fusce .non libero condimentuazer=efficitur massa qui qsfd=fringilla tellus .Nunc a arcu lacinia sem venenatis finibus .In egestas ex niskip=nec tempus metus ornare .vel  .Class aptent taciti sociosqu ad litora torquent per conubia nostro=per inceptos himenaeos .Fusce .sit amet vehicula mi .Sed nec rutrum tortor .Donec pretium mi nibus=ut sodales nibh volutpat sed .Vivamus finibus sollicitudin finibus .Quisque euismop=dolor porta feugiat ultricieser=dui nunc pretium elidi=vel suscipit dui nibh sit amet tortor .In suscipit condimentum nibus=quis condimentum lacus consequat in .Phasellus quis purus et ligula elementum fringilla id ut mi .Nullam ornare .magna ut arcu accumsame=non commodo nisi convallis .Sed eget consectetur orci .Sed vestibulum elit non erat sollicituditis=non maximus ipsum lobortis .Cras sed nisl iaculis massa eleifend accumsan .Suspendisse .nec ipsum elit .Quisque .at turpis erat';
  const r = parse(toParse);
  t.is(r.eaten, toParse);
  t.snapshot(r);
});

test('id with a hash', t => {
  const toParse = '##id';
  const r = parse(toParse);

  t.is(r.prop.id, '#id');
  t.is(r.eaten, toParse);
});

test('class with a dot', t => {
  const toParse = '..class';
  const r = parse(toParse);
  t.deepEqual(r.prop.class, ['.class']);
  t.is(r.eaten, toParse);
});

test('value start with a equal', t => {
  const toParse = '{key==value}';
  const r = parse(toParse);
  /* Maybe this
  t.is(r.prop.key, '');
  t.is(r.eaten, toParse);
  */
  t.is(r.prop.key, undefined);
  t.is(r.eaten, '');
});

test('single quote in key', t => {
  const toParse = '{ke\'y=value}';
  const r = parse(toParse);
  t.is(r.prop['ke\'y'], 'value');
  t.is(r.eaten, toParse);
});

test('quoted key', t => {
  const toParse = '{"key"=value}';
  const r = parse(toParse);
  t.is(r.prop['"key"'], 'value');
  t.is(r.eaten, toParse);
});
test('dashed key', t => {
  const toParse = '{eg-key=value}';
  const r = parse(toParse);
  t.is(r.prop['eg-key'], 'value');
  t.is(r.eaten, toParse);
});
test('quoted class', t => {
  const toParse = '{."key"}';
  const r = parse(toParse);
  t.deepEqual(r.prop.class, ['"key"']);
  t.is(r.eaten, toParse);
});

test('quoted id', t => {
  const toParse = '{#"id"}';
  const r = parse(toParse);
  t.is(r.prop.id, '"id"');
  t.is(r.eaten, toParse);
});

test('key that start by a quote', t => {
  const toParse = '{\'key=value}';
  const r = parse(toParse);
  t.is(r.prop['\'key'], 'value');
  t.is(r.eaten, toParse);
});

test('single-quoted key', t => {
  const toParse = '"key"=value';
  const r = parse(toParse);
  t.is(r.prop['"key"'], 'value');
  t.is(r.eaten, toParse);
});

test('space in quoted value', t => {
  const toParse = 'key="value and value"';
  const r = parse(toParse);
  t.is(r.prop.key, 'value and value');
  t.is(r.eaten, toParse);
});

test('return in quoted value', t => {
  const toParse = 'key="value and\nvalue"';
  const r = parse(toParse);
  t.is(r.prop.key, undefined);
  t.is(r.eaten, '');
});

test('line feed in quoted value (brace version)', t => {
  const toParse = 'key="value and\nvalue"';
  const r = parse(toParse);
  t.is(r.prop.key, undefined);
  t.is(r.eaten, '');
});

test('cariage-return in quoted value (brace version)', t => {
  const toParse = 'key="value and\rvalue"';
  const r = parse(toParse);
  t.is(r.prop.key, undefined);
  t.is(r.eaten, '');
});

test('brace in quoted value', t => {
  const toParse = 'onclic="function() { return \\"Yeah !\\"; }"';
  const r = parse(toParse);
  t.is(r.prop.onclic, 'function() { return "Yeah !"; }');
  t.is(r.eaten, toParse);
});

test('braces as key name', t => {
  const toParse = '{ {}=qsf   }';
  const r = parse(toParse);
  t.is(r.prop['{}'], undefined);
  t.is(r.eaten, '');
});

test('braces as class name', t => {
  const toParse = '{ .{} }';
  const r = parse(toParse);
  t.is(r.prop.class, undefined);
  t.is(r.eaten, '');
});

test('alone dot', t => {
  const toParse = '{ . }';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, ''); // It's an error
});

test('start by a equal', t => {
  const toParse = '{ =qsdf }';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, ''); // It's an error
});

test('alone hash', t => {
  const toParse = '#';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, ''); // It's an error
});

test('alone brace', t => {
  const toParse = '{';
  const r = parse(toParse);
  t.deepEqual(r.prop, errorHappened.prop);
  t.is(r.eaten, ''); // It's an error
});

test('defaultValue true', t => {
  const toParse = 'visible';
  const r = parse(toParse, 0, {defaultValue: 'true'});
  t.is(r.prop.visible, 'true');
  t.is(r.eaten, 'visible');
});

test('defaultValue name', t => {
  const toParse = 'visible';
  const r = parse(toParse, 0, {defaultValue: x => x});
  t.is(r.prop.visible, 'visible');
  t.is(r.eaten, 'visible');
});

test('braces in attr', t => {
  const toParse = '{ data-json=\'{"a": 1, "b": 2}\' }';
  const r = parse(toParse);
  t.is(r.prop['data-json'], '{"a": 1, "b": 2}');
  t.is(r.eaten, toParse);
});

test('nested braces in attr', t => {
  const toParse = '{ data-json=\'{"a": 1, "b": { "c": 4 }}\' }';
  const r = parse(toParse);
  t.is(r.prop['data-json'], '{"a": 1, "b": { "c": 4 }}');
  t.is(r.eaten, toParse);
});

