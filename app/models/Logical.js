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
 *     Initial: 2018/01/27        Wang Jian
 */

export default {
  namespace: 'others',

  state: {
    Evaluation: [
      {
        key: 'index[0]',
        src: 'http://file28.mafengwo.net/M00/B3/7F/wKgB6lRTzqiAPvooAAnd5QaCdAw75.rbook_comment.w1024.jpeg',
        description: '175名中国游客滞留日本机场 有人与警方冲突高唱国歌',
        comments: '36.8万评',
        select: '',
      },
      {
        key: 'index[1]',
        src: 'http://d.ifengimg.com/w160_h90/p0.ifengimg.com/cmpp/2018/01/26/e953a7efd61dfb56c2c7e78e2979ff7b_size80_w230_h152.jpg',
        description: '在烈士陵园跳广场舞，真当群众没意见？',
        comments: '36.8万评',
        select: '',
      },
      {
        key: 'index[2]',
        src: 'http://d.ifengimg.com/w160_h90/p1.ifengimg.com/cmpp/2018/01/26/058a9773f90da775254f4bb054adcf62_size89_w230_h152.jpg',
        description: '辽宁省第十三届人大代表名单出炉',
        comments: '36.8万评',
        select: '',
      },
      {
        key: 'index[3]',
        src: 'http://d.ifengimg.com/w160_h90/p1.ifengimg.com/cmpp/2018/01/26/058a9773f90da775254f4bb054adcf62_size89_w230_h152.jpg',
        description: '辽宁省第十三届人大代表名单出炉',
        comments: '36.8万评',
        select: '',
      },
      {
        key: 'index[4]',
        src: 'http://d.ifengimg.com/w160_h90/p1.ifengimg.com/cmpp/2018/01/26/058a9773f90da775254f4bb054adcf62_size89_w230_h152.jpg',
        description: '辽宁省第十三届人大代表名单出炉',
        comments: '36.8万评',
        select: '精选',
      },
      {
        key: 'index[5]',
        src: 'http://d.ifengimg.com/w160_h90/p1.ifengimg.com/cmpp/2018/01/26/058a9773f90da775254f4bb054adcf62_size89_w230_h152.jpg',
        description: '辽宁省第十三届人大代表名单出炉',
        comments: '36.8万评',
        select: '精选',
      },
      {
        key: 'index[6]',
        src: 'http://d.ifengimg.com/w160_h90/p1.ifengimg.com/cmpp/2018/01/26/058a9773f90da775254f4bb054adcf62_size89_w230_h152.jpg',
        description: '辽宁省第十三届人大代表名单出炉',
        comments: '36.8万评',
        select: '精选',
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
