import { load } from 'cheerio';
import { createUrl } from '@/helper/createUrl.js';
import { loadUrl } from '@/helper/loadUrl.js';
import { getElementSingle } from '@/helper/extractFromHtml.js';

export const vocabularyComDefinitions = async (req, res, next) => {
  const { word } = req.params;
  if (!word) {
    res.send({});
  }

  const url = createUrl('https://www.vocabulary.com/dictionary/definition.ajax?search=QUERY&lang=en', word);
  const { html, error } = await loadUrl(url);

  if (error) {
    console.log(error);
    res.status(500);
    res.send({
      message: 'Something went wrong when finding definitions',
    });
  }

  const $ = await load(html, {
    xml: {
      normalizeWhitespace: true,
    },
  });
  const short = await getElementSingle($, '.short');
  const long = await (getElementSingle($, '.long'));

  res.send({
    english: {
      short,
      long,
    },
  });
};
