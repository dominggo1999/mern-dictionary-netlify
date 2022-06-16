import { createUrl } from '../helper/createUrl.js';
import { loadUrl } from '@/helper/loadUrl.js';

export const googleTTS = async (req, res, next) => {
  const { word } = req.params;
  if (!word) {
    res.send({});
  }

  const url = createUrl('https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=en&q=QUERY', word);
  const { audioBase64, error } = await loadUrl(url, {
    audioBase64: true,
  });

  if (error) {
    console.log(error);
    res.status(500);
    res.send({
      message: 'Something went wrong when finding audio',
    });
  }

  res.send({ audioBase64 });
};
