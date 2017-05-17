const bench = require('nanobench');
const among = require('.');

const str = `Welcome to RegExr v2.1 by gskinner.com, proudly hosted by Media Temple!

Edit the Expression & Text to see matches. Roll over matches or the expression for details. Undo mistakes with ctrl-z. Save Favorites & Share expressions with friends or the Community. Explore your results with Tools. A full Reference & Help is available in the Library, or watch the video Tutorial.

Sample text for testing:
abcdefghijklmnopqrstuvwxyz {{ABCDEFGHIJKLMNOPQRSTUVWXYZ}}
0123456789 _+-.,!@#$%^&*();\/|<>"'
{{12345 -98.7 3.141 .6180 {9,000 +42}}\n
555.123.4567    +1-(800)-555-2468
foo@demo.net    bar.ba@test.co.uk
www.demo.com    http://foo.co.uk/{{aaa}}
http://regexr.com/foo.html?q=bar
https://mediatemple.net

{{asdsað}}`;

const END = 1000000;

const find = among('{{', '}}');

bench('among 1.000.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        find(str);
    }

    b.end();
});
