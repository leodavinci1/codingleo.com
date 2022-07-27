import React from 'react';

export class Text {
  constructor(Styled, colors) {
    // eslint-disable-next-line no-debugger
    debugger;
    this.Styled = Styled;
    this.colors = colors;
  }

  // Getter
  t(col, text) {
    const color = this.colors[col];
    return <this.Styled color={color}>{text}</this.Styled>;
  }
}
