<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmeanvar

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute an [arithmetic mean][arithmetic-mean] and an [unbiased sample variance][sample-variance] incrementally.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/b2df03cb2a582cf1df289c3ddca6922c0db854b4/lib/node_modules/@stdlib/stats/incr/meanvar/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

and the [unbiased sample variance][sample-variance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" alt="Equation for the unbiased sample variance."> -->

<div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/b2df03cb2a582cf1df289c3ddca6922c0db854b4/lib/node_modules/@stdlib/stats/incr/meanvar/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for the unbiased sample variance.">
    <br>
</div>

<!-- </equation> -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-meanvar
```

</section>

<section class="usage">

## Usage

```javascript
var incrmeanvar = require( '@stdlib/stats-incr-meanvar' );
```

#### incrmeanvar( \[out] )

Returns an accumulator `function` which incrementally computes an [arithmetic mean][arithmetic-mean] and [unbiased sample variance][sample-variance].

```javascript
var accumulator = incrmeanvar();
```

By default, the returned accumulator `function` returns the accumulated values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var accumulator = incrmeanvar( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated accumulated values. If not provided an input value `x`, the accumulator function returns the current accumulated values.

```javascript
var accumulator = incrmeanvar();

var mv = accumulator();
// returns null

mv = accumulator( 2.0 );
// returns [ 2.0, 0.0 ]

mv = accumulator( 1.0 );
// returns [ 1.5, 0.5 ]

mv = accumulator( 3.0 );
// returns [ 2.0, 1.0 ]

mv = accumulator( -7.0 );
// returns [ -0.25, ~20.92 ]

mv = accumulator( -5.0 );
// returns [ -1.2, 20.2 ]

mv = accumulator();
// returns [ -1.2, 20.2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are equal to `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var incrmeanvar = require( '@stdlib/stats-incr-meanvar' );

var offset;
var acc;
var buf;
var out;
var mv;
var N;
var v;
var i;
var j;

// Define the number of accumulators:
N = 5;

// Create an array buffer for storing accumulator output:
buf = new ArrayBuffer( N*2*8 ); // 8 bytes per element

// Initialize accumulators:
acc = [];
for ( i = 0; i < N; i++ ) {
    // Compute the byte offset:
    offset = i * 2 * 8; // stride=2, bytes_per_element=8

    // Create a new view for storing accumulated values:
    out = new Float64Array( buf, offset, 2 );

    // Initialize an accumulator which will write results to the view:
    acc.push( incrmeanvar( out ) );
}

// Simulate data and update the sample means and variances...
for ( i = 0; i < 100; i++ ) {
    for ( j = 0; j < N; j++ ) {
        v = randu() * 100.0 * (j+1);
        acc[ j ]( v );
    }
}

// Print the final results:
console.log( 'Mean\tVariance' );
for ( i = 0; i < N; i++ ) {
    mv = acc[ i ]();
    console.log( '%d\t%d', mv[ 0 ].toFixed( 3 ), mv[ 1 ].toFixed( 3 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-meanvar.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-meanvar

[test-image]: https://github.com/stdlib-js/stats-incr-meanvar/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-meanvar/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-meanvar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-meanvar?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-meanvar.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-meanvar/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-meanvar/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
