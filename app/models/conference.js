/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/30        Wang Jian
 */

export default {
  namespace: 'essayist',

  state: {
    usage: [
      {
        key: 'index[0]',
        src: 'http://m.chanyouji.cn/others/richufeng.jpg-600w',
        description: '清真寺响起祷告声，主裁判尊重当地习俗',
        comments: '36.8万',
        select: '221',
        Message: '1089',
      },
      {
        key: 'index[1]',
        src: 'http://p.chanyouji.cn/358437/1455616148180p1abknjou42ui1qhmp21npg1oge1c.jpg?imageView2/1/w/480/h/288',
        description: '凤凰军机处 歼15坠毁是因为设计失误吗？',
        comments: '40.0万',
        select: '2231',
        Message: '1089',
      },
      {
        key: 'index[2]',
        src: 'http://p.chanyouji.cn/1391695908/7C6AC2D4-7A7A-4480-9FC9-28403BDD62B1.jpg?imageView2/1/w/480/h/288',
        description: '清真寺响起祷告声，主裁判尊重当地习俗',
        comments: '36.8万',
        select: '221',
        Message: '1089',
      },
      {
        key: 'index[3]',
        src: 'http://p.chanyouji.cn/23447/1359991824171p17iist28kg9e1jmep9ckvr166tg.jpg?imageView2/1/w/480/h/288',
        description: '治疗之路磕磕绊绊',
        comments: '36.8万',
        select: '221',
        Message: '1089',
      },
      {
        key: 'index[4]',
        src: 'http://p.chanyouji.cn/1471753254/EE6C4EA0-6FF5-4102-BA9D-1601E5345225.jpg?imageView2/1/w/480/h/288',
        description: '清真寺响起祷告声，主裁判尊重当地习俗',
        comments: '36.8万',
        select: '221',
        Message: '1089',
      },
      {
        key: 'index[5]',
        src: 'http://p.chanyouji.cn/1451441207/24EB163B-4C04-4CBE-8A88-9E8B126FB810.jpg?imageView2/1/w/480/h/288',
        description: '清真寺响起祷告声，主裁判尊重当地习俗',
        comments: '20.8万',
        select: '301',
        Message: '2089',
      },
      {
        key: 'index[6]',
        src: 'http://p.chanyouji.cn/1370510897/00000000-0000-0000-0000-0000000000DF.jpg?imageView2/1/w/480/h/288',
        description: '清真寺响起祷告声，主裁判尊重当地习俗',
        comments: '40万',
        select: '221',
        Message: '1089',
      },
    ],
  },

  reducers: {
    Other(state, action) {
      return {
        ...state,
        Evaluation: action.Evaluation,
      };
    },
  },
};
