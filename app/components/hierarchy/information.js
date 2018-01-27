/**
 * 2018-01-18   Wang Jian
 */

import React from 'react';
import { connect } from 'dva';

class Macao extends React.Component {
  render() {
    const { allMacao } = this.props;
    return (
      <div>
        {
        allMacao.map(item => (
          <div
            key={item.key}
          >
            <div style={{ position: 'relative' }}>
              <h1 >
                <span>{item.position}</span>
                <div
                  style={{ fontSize: '20px' }}
                >
                  {item.description}
                </div>
              </h1>
              <h2 >
                {item.number}
              </h2>
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}

export default connect(state => ({
  Evaluation: state.others.Evaluation,
}))(Macao);
