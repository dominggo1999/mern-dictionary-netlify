import { load } from 'cheerio';
import { createUrl } from '@/helper/createUrl.js';
import { loadUrl } from '@/helper/loadUrl.js';
import { getSentenceExamples } from '@/helper/extractFromHtml.js';

export const hippoSentences = async (req, res, next) => {
  const { word } = req.params;
  if (!word) {
    res.send({});
  }

  const url = createUrl('https://www.wordhippo.com/what-is/sentences-with-the-word/QUERY.html', word);
  const { html, error } = await loadUrl(url);

  if (error) {
    console.log(error);
    res.status(500);
    res.send({
      message: 'Something went wrong when finding sentences',
    });
  }

  const $ = await load(html, {
    xml: {
      normalizeWhitespace: true,
    },
  });
  const sentences = await getSentenceExamples($, '.wordtype + div');

  res.send({
    sentences,
  });
};
