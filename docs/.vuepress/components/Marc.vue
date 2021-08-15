<template>
  <div>
    <pre class="pre-marc"><code v-html="code"></code></pre>
  </div>
</template>
<script>

import Prism from 'prismjs'

Prism.hooks.add('wrap', function (env) {

	if (/-link$/.test(env.type)) {
		env.tag = 'a';
		var href = env.content;

		if (env.type == 'noraf-link') {
			href = 'https://bsaut.toolforge.org/show/' + env.content.replace(/\(NO-TrBIB\)/, '');
		}
		if (env.type == 'bibbi-link') {
			href = 'https://id.bs.no/bibbi/' + env.content.replace(/\(NO-OsBA\)/, '');
		}
		if (env.type == 'marc-tag-link') {
			href = 'https://www.loc.gov/marc/bibliographic/bd' + env.content.replace(/\(NO-TrBIB\)/, '') + '.html';
		}

		env.attributes.href = href;

		env.attributes.target = '_blank';

		// Silently catch any error thrown by decodeURIComponent (#1186)
		try {
			env.content = decodeURIComponent(env.content);
		} catch (e) { /* noop */ }
	}
});


Prism.languages.marc = {
	// Field tag
	'marc-tag-link': {
		pattern: /(?:\n|^)[0-9A-Z]{3}/
	},

	// Subfield code
	'subfield-code': {
		pattern: /\s\$[a-z0-9]\s/,
	},

	'noraf-link': {
		pattern: /\(NO-TrBIB\)[0-9]+/,
	},

	'bibbi-link': {
		pattern: /\(NO-OsBA\)[0-9]+/,
	},

	'general-link': {
		pattern: /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
	},

	// Default
	// 'comment': [
	// 	{
	// 		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
	// 		lookbehind: true,
	// 		greedy: true 
	// 	},
	// 	{
	// 		pattern: /(^|[^\\:])\/\/.*/,
	// 		lookbehind: true,
	// 		greedy: true
	// 	}
	// ],
	// 'string': {
	// 	pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
	// 	greedy: true
	// },
	// // 'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	// 'boolean': /\b(?:true|false)\b/,
	// 'function': /\b\w+(?=\()/,
	// 'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	// 'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	// 'punctuation': /[{}[\];(),.:]/
};

export default {
  props: {
    images: Array,
  },
  data () {
    return {
      lang: 'marc',
      code: 'Initialization failed ',
    }
  },
  /** 
   * Note: mounted() is only called client side
   * Ref: https://ssr.vuejs.org/guide/universal.html#data-reactivity-on-the-server
   */
  mounted () {
		if (!this.$slots.default.length) {
			this.code = '(empty)'
			return
		}
		console.log(this.$slots.default[0].text)
    const lang = 'marc';
    const code = Prism.highlight(
			this.$slots.default[0].text.trim(), 
			Prism.languages.marc, 
			lang
		)
    console.info(code)
    this.code = code  
  },
}
</script>
<style>
  
</style>