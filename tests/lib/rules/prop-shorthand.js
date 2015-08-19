'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prop-shorthand');
var RuleTester = require('eslint').RuleTester;


// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('prop-shorthand', rule, {
    valid: [{
        code: 'var ids = _.map([], function (i) { return x.id; });'
    }, {
        code: 'var ids = _.map([], function (i) { return i.id + "?"; });'
    }, {
        code: 'var publicModules = _(files).map(readModule).compact().value();'
    }],
    invalid: [{
        code: 'var ids = _(users).map(function (i) { return i.id; });',
        errors: [{message: 'Prefer property shorthand syntax'}]
    }, {
        code: 'var ids = _.map([], function (i) { return i.id; });',
        errors: [{message: 'Prefer property shorthand syntax'}]
    }, {
        code: 'var ids = _(users).map().map().map(function (i) { return i.id; });',
        errors: [{message: 'Prefer property shorthand syntax'}]
    }]
});