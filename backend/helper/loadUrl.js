/* eslint-disable new-cap */
import UserAgent from 'user-agents';
import fetch, { Headers } from 'node-fetch';
import base64ArrayBuffer from '@/utils/base64ArrayBuffer.js';

export const loadUrl = async (url, options = {}) => {
  const { json, audioBase64 } = options;

  const userAgent = new UserAgent();
  const headers = new Headers(userAgent.data);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        ...headers,
      },
    });

    if (audioBase64) {
      const buffer = await res.arrayBuffer();
      const string = await base64ArrayBuffer(buffer);
      const data = `data:${res.headers.get('content-type')};base64,${string}`;
      return {
        audioBase64: data,
      };
    }

    if (json) {
      return {
        json: await res.json(),
      };
    }

    return {
      html: await res.text(),
    };
  } catch (error) {
    return { error };
  }
};
