import { load } from 'cheerio';
import { createUrl } from '@/helper/createUrl.js';
import { loadUrl } from '@/helper/loadUrl.js';
import { getSynonyms } from '@/helper/extractFromHtml.js';

export const powerThesaurusSynonyms = async (req, res, next) => {
  const { word } = req.params;
  if (!word) {
    res.send({});
  }

  const url = createUrl('https://www.powerthesaurus.org/QUERY/synonyms', word);
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

  const synonyms = await getSynonyms($, 'a[title~="synonym"]');

  res.send({ synonyms });
};
