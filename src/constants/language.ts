import { ILanguage } from "types/language.model";


export const DEFAULT_LANGUAGE = 'eng';

export const LANGUAGES: ILanguage[] = [
  {
    label: 'English',
    value: 'eng',
    img: '/images/ticket/txt-buy.png',
  },
  {
    label: '한국어',
    value: 'kr',
    img: '/images/ticket/txt-buy-korea.png',
  },
  {
    label: 'Filipino',
    value: 'phi',
    img: '/images/ticket/txt-buy-philip.png',
  },
  {
    label: 'हिन्दी',
    value: 'hi',
    img: '/images/ticket/txt-buy-hindi.png',
  },
  {
    label: '日本語',
    value: 'jp',
    img: '/images/ticket/txt-buy-japan.png',
  },
  {
    label: 'Việt Nam',
    value: 'vi',
    img: '/images/ticket/txt-buy-vn.png',
  },
];