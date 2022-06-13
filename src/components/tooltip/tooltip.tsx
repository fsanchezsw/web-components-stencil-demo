import { h, Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'uc-tooltip',
  styleUrl: './tooltip.css',
  shadow: true,
})
export class Tooltip {
  @Prop() text: string;
  @State() opened = false;

  toggle() {
    this.opened = !this.opened;
  }

  // TODO: add styles to make this tooltip looks nicer!
  render() {
    return [<slot name="label" />, <span onClick={this.toggle.bind(this)}>?</span>, this.opened ? <div class="tooltip">{this.text}</div> : null];
  }
}
